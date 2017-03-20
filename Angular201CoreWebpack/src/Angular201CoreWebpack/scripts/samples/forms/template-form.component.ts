import {Component, OnInit, Input} from '@angular/core';
//import {} from '@angular/core';
//import {StartsWithValidator} from '../../common/validators/starts-with.validator.directive'; 
// uses the directive not the function. 

@Component({
    selector: 'template-form',
    templateUrl: './views/samples/forms/template-form.component.html',
    styles: [`input.ng-invalid {border-left:5px solid red;} input.ng-valid{border-left:5px solid green;}`],
    
})

export class TemplateFormComponent implements OnInit {
    user: any;

    constructor() {
       
        this.user = {name : 'Chris', email : 'Chris@email.com'};
    }
    ngOnInit()
    { }

    onSubmit(value) {
        console.log(value);

    }
}