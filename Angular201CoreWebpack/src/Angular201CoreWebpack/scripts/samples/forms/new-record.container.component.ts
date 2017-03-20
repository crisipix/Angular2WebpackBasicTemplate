import {Component, OnInit, Input} from '@angular/core';
import {NewRecordStatus} from '../../common/components/new-record.component';
//import {StartsWithValidator} from '../../common/validators/starts-with.validator.directive'; 
// uses the directive not the function. 



@Component({
    selector: 'new-record-form',
    template: `<div><new-record [status]="status" [model]="model"></new-record></div>`,

})

export class NewRecordContainerComponent implements OnInit {
    user: any;
    status: NewRecordStatus;
    model: string = '';
    validators: Array<any> = [];
    constructor() {
        this.status = new NewRecordStatus();
        this.status.isValid = true;
        this.status.isValidating = false;
        this.model = '';
        this.user = { name: 'Chris', email: 'Chris@email.com' };
    }
    ngOnInit()
    { }

    onSubmit(value) {
        console.log(value);

    }
}