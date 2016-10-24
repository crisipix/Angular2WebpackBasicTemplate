import {FormControl} from '@angular/forms';
import { ValidationResult } from './validator.result';

// sample validator ensures input starts with s. this is an example of how a validator should be structured. 
// and implemented where it gives a key and validation result if it fails. 
export class ValidateStart {

    public validator: Function;
    public name: string = 'validateStart';

    constructor() {
        this.validator = this.validate;
    }

    // returns null if true
    // returns key : validationResult object if false. 
    validate(c: FormControl) {
        return (c.value.startsWith('s')) ? null : {
            validateStart: {
                validationResult: new ValidationResult(false, 'StartsWith', 'Input must start with s!')
            }
        };
    }
}