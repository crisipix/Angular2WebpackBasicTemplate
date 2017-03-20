import {AbstractControl, ValidatorFn} from '@angular/forms';
import { ValidationResult } from './validator.result';

// sample validator ensures input starts with s. this is an example of how a validator should be structured. 
// and implemented where it gives a key and validation result if it fails. 
export class ValidateStart {

    public validator: Function; // access the validate function . 
    public name: string = 'validateStart';

    constructor() {
        this.validator = this.validate;
    }

    // returns null if true
    // returns key : validationResult object if false. 
    validate(control: AbstractControl): { [key: string]: any } {
        return (control.value.startsWith('s')) ? null : {
            validateStart: {
                validationResult: new ValidationResult(false, 'StartsWith', 'Input must start with s!')
            }
        };
    }
}


/*
    function that implements Validator FN
*/
export function ValidateStartFunction(): ValidatorFn {
    // returns null if true
    // returns key : validationResult object if false. 
    return (control: AbstractControl): { [key: string]: any } =>
    {
        return (control.value.startsWith('s')) ? null : {
            validateStart: {
                validationResult: new ValidationResult(false, 'StartsWith', 'Input must start with s!')
            }
        };
    }
}