import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {StartsWithValidator} from '../../common/validators/starts-with.validator.directive'; // the function not the directive

@Component({
    selector: 'model-form',
    templateUrl: './views/samples/forms/model-form.component.html',
    styles: [`input.ng-invalid {border-left:5px solid red;}
input.ng-valid{border-left:5px solid green;}`]
})

export class ModelDrivenFormComponent
{
    constructor() { }

    userForm = new FormGroup({
        name: new FormControl('Chris', [Validators.required, StartsWithValidator]),
        email: new FormControl('Chris@Email.com', [Validators.required, Validators.minLength(4)]),
        address: new FormGroup({
            street: new FormControl(),
            city: new FormControl(),
            zipcode: new FormControl(1, [Validators.pattern('^[1-9][0-9]{4}$')])
        })
    });

    onSubmit() {
        console.log(this.userForm.value);
    }
}