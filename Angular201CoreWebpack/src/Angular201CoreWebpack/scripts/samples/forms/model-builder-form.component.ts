import { Component , OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'model-form',
    templateUrl: './views/samples/forms/model-builder-form.component.html',
    styles: [`input.ng-invalid {border-left:5px solid red;}
input.ng-valid{border-left:5px solid green;}`]
})

export class ModelBuilderFormComponent implements OnInit{
    userForm: FormGroup;

    constructor(private _formBuilder: FormBuilder) { }


    /*
userForm = new FormGroup({
        name: new FormControl('Chris', Validators.required),
        email: new FormControl('Chris@Email.com', [Validators.required, Validators.minLength(4)]),
        address: new FormGroup({
            street: new FormControl(),
            city: new FormControl(),
            zipcode: new FormControl(1, [Validators.pattern('^[1-9][0-9]{4}$')])
        })
    });

    */
    
    ngOnInit()
    {
        this.userForm = this._formBuilder.group({
            name: ['Brandon', [Validators.required]],
            email: ['Chris@Email.com', [Validators.required, Validators.minLength(4)]],
            address: this._formBuilder.group({
                street: [],
                city: [],
                zipcode: [1, [Validators.pattern('^[1-9][0-9]{4}$')]]
            })
        });
    }
   

    onSubmit() {
        console.log(this.userForm.value);
    }
}