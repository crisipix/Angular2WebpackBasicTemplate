import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';
import {ValidationResult} from './validator.result.ts';

 
export function StartsWithValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        if (!control.value) {
            return null;
        }

        return (control.value.startsWith('s')) ? null :
            {
                validateStart: { validationResult: new ValidationResult(false, 'StartsWith', 'Input must start with s!') }
            };
    };
}

@Directive({
    selector: '[startsWithValidation]',
    providers: [{ provide: NG_VALIDATORS, useExisting: StartsWithValidatorDirective, multi: true }]
})
export class StartsWithValidatorDirective implements Validator, OnChanges {
    @Input() forbiddenName: string;
    //private valFn = Validators.nullValidator;
      private valFn = StartsWithValidator();



    ngOnChanges(changes: SimpleChanges): void {
        this.valFn = StartsWithValidator();

        //const change = changes['startsWithValidation'];
        
        //if (change)
        //{
        //    const val: string  = change.currentValue;

        //    this.valFn = StartsWithValidator();
        //} else {
        //    this.valFn = Validators.nullValidator;
        //}
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }
}

