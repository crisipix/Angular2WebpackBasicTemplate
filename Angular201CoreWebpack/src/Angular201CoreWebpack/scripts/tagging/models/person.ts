
import { Tag } from './tag';

export class Person {
    name: string;
    tags: Array<Tag>;

    constructor(name, tags) {
        this.name = name;
        this.tags = tags;
    }
}