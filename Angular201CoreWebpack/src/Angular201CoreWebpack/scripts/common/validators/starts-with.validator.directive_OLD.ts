// create class for validation then shove into a directive 
// class is good for module driven forms. 
// directives are good for template forms. 
import {AbstractControl} from '@angular/forms';
import {ValidationResult} from './validator.result.ts';

import {Directive} from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';

@Directive({
    selector: '[startsWithValidator][ngModel], [startsWithValidator][formControl],[startsWithValidator][formControlName]',
    providers: [{
        provide: NG_VALIDATORS,
        useValue: StartsWithValidator.validate, //point to direct validator you want to use. 
        multi: true
    }]
})
export class StartsWithValidatorDirective { }

/*
    Don't repeat code for directive and module validators. 
*/
export class StartsWithValidator {
    public name: string = 'validateStart';

       //returns null if true
      //returns key : validationstart : validationResult object if false.   
    static validate(control: AbstractControl): { [key: string]: any}
    {
        if (!control.value) {
            return null;
        }

        return (control.value.startsWith('s')) ? null :
            { validateStart: { validationResult: new ValidationResult(false, 'StartsWith', 'Input must start with s!') }
        };
        
    }
}



