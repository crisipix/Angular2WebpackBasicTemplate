import { Control } from '@angular/common';

//[key:string]:boolean;
// accepts a control and returns either null if it's valide or some error object if it's not valid
export interface Validator<T extends Control> {
    (c: T): { [error: string]: any };
}

export class ValidationResult {
    valid: boolean
    name: string;
    message: string;
    attributes: Array<any>;

    constructor(valid: boolean, name: string, message: string, attributes: Array<any> = []) {
        this.valid = valid;
        this.name = name;
        this.message = message;
        this.attributes = attributes;
    }
}
