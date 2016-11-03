
import { Injectable, Pipe, PipeTransform } from '@angular/core';

import { Person } from '../models/person';
import { Tag } from '../models/tag';

@Pipe({ name: 'matchingTags' })
@Injectable()
export class MatchingTagsPipe implements PipeTransform {

    transform(people: Array<Person>, tag: Tag, tagCache: any) {
        if (!tag || !tagCache) {
            return people;
        }

        return people.filter(p => this.findPerson(p.name, tag, tagCache));
    }

    findPerson(name, tag, tagCache) {
        if (!tag || !tagCache) {
            return true;
        }

        let taggedPeople: Array<Person> = tagCache[tag.name];

        if (!taggedPeople) { return false; }

        for (let tp in taggedPeople) {
            if (taggedPeople[tp].name === name)
            { return true; }
        }
        return false;

    }
}



