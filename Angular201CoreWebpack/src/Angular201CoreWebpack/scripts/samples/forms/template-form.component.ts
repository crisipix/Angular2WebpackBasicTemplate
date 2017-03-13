import {Component, OnInit, Input} from '@angular/core';
//import {} from '@angular/core';

@Component({
    selector: 'template-form',
    templateUrl: './views/samples/forms/template-form.component.html'
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