
import { Component, OnInit } from '@angular/core';
import { Person } from './models/person';
import { Tag } from './models/tag';

@Component({

    selector: 'tagging',
    templateUrl: './views/tagging/tagging.component.html',
})

export class TaggingComponent implements OnInit {
    people: Array<Person>;
    tagCache: any = {};
    tags: Array<Tag> = new Array<Tag>();
    selectedTag: Tag;
    constructor() {
        this.people = [
            new Person('A', [new Tag('Cool'), new Tag('Smart')]),
            new Person('B', [new Tag('Smart')]),
            new Person('C', [new Tag('Cool')]),
            new Person('D', [new Tag('Weird')]),
            new Person('E', [])
        ];

        this.getAllTags(this.people);
    }

    ngOnInit()
    { }

    selectTag(tag) {
        this.selectedTag = tag;
    }
    getAllTags(people: Array<Person>) {
        for (let p in people) {
            let person = people[p];
            let tags = person.tags
            for (let t in tags) {
                let tag = tags[t];
                if (!this.tagCache[tag.name]) {
                    this.tagCache[tag.name] = [person];
                    this.tags.push(tag);
                }
                else {
                    this.tagCache[tag.name].push(person);
                }
            }
        }
    }
}

