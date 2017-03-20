
import {Component, Input, Output, EventEmitter, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
//FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES,
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';

import { ValidateStart } from '../validators/startswith.validator';
import { ValidationResult } from '../validators/validator.result';

// input takes in a new record if it's given. 
// validates the input on every key. 
// can accept external validators both synchronous or asynchronous
// can accept an external validation result in the form of NewRecordStatus
@Component({
    selector: 'new-record',
    templateUrl: './views/common/components/new-record.component.html',
    styles: [`   
        .valid,  
        .ng-valid[required] {
          border-left: 5px solid green; /* green */
        }
        .invalid,
        .ng-invalid {
          border-left: 5px solid red; /* red */
        }`],
    //directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
    //providers: [ValidateStart]
})
export class NewRecordComponent implements OnInit {
    @Input() status: NewRecordStatus;
    @Input() model: string = '';
    @Input() validators: Array<any> = [];
    @Input() asyncValidators: Array<any> = [];
    @ViewChild('newRecordEl') newRecordElem;

    newRecordForm: FormGroup;
    newRecord: FormControl;

    @Output() cancelAdd: EventEmitter<any>;
    @Output() submitAdd: EventEmitter<any>;
    @Output() update: EventEmitter<any>;

    // we can either define the validators that are being used for this or you can have them passed in. 
    // it's best to keep the validators within this and have this component not dependent on a reference within the parent component. 
    // this can accept a 
    constructor(
        private _fb: FormBuilder//,
        //private _validateStart: ValidateStart
    ) {
        this.cancelAdd = new EventEmitter<any>();
        this.update = new EventEmitter<any>();
        this.submitAdd = new EventEmitter<any>();

        // these hardcoding validators //Validators.maxLength(5), Validators.minLength(2), _validateStart.validate 
        this.validators = [Validators.required];//, _validateStart.validate];//this.containsSecretWord]; 
        this.asyncValidators = []; //this.recordExists
    }

    ngOnInit() {
        
        //this.newRecordElem.nativeElement.focus();
        if (this.asyncValidators || this.validators) {
            this.newRecord = new FormControl(this.model, this.validators, this.asyncValidators);  // async
            this.newRecordForm = new FormGroup({
                newRecord : this.newRecord
            });
        }
        else {
            console.log('there are no validators');
            console.log(this.asyncValidators);
            this.newRecordForm = new FormGroup({
                newRecord: new FormControl(this.model, [], [])
            });
        }
    }

    toggleAdd() {
        this.cancelAdd.emit('');
    }

    // single form control
    addRecord() {
        this.status.isValidating = true;
        this.status.validationResults.length = 0;

        //this.newRecord.updateValueAndValidity();
        this.submitAdd.emit('');
    }

    // handle validation error messages
    getErrors() {
        // if there are no errors exit
        if (!this.newRecord || (!this.newRecord.errors && this.status.isValid)) {
            return [];
        }
        var errorMessages = [];
        let errorMessage = ''
        let propertyName = '';
        try {
            // built in validations. 
            if (this.newRecord.hasError('required')) {
                errorMessage = 'An input is required';
                propertyName = 'Required';
                errorMessages.push(`${propertyName} : ${errorMessage}`);
            }
            if (this.newRecord.hasError('maxlength')) {
                propertyName = 'Max Length';
                errorMessage = `Max length is :(${this.newRecord.errors['maxlength'].requiredLength}) actual is (${this.newRecord.errors['maxlength'].actualLength})`;
                errorMessages.push(`${propertyName} : ${errorMessage}`);
            }
            if (this.newRecord.hasError('minlength')) {
                propertyName = 'Min Length';
                errorMessage = `Min length is :(${this.newRecord.errors['minlength'].requiredLength}) actual is (${this.newRecord.errors['minlength'].actualLength})`;
                errorMessages.push(`${propertyName} : ${errorMessage}`);
            }

            // this handles our custom validation messages
            for (let i in this.newRecord.errors) {
                if (this.newRecord.errors[i].validationResult) {
                    let message = this.newRecord.errors[i].validationResult.message;
                    propertyName = this.newRecord.errors[i].validationResult.name;
                    if (message) {
                        errorMessages.push(`${propertyName} : ${message}`);
                    }
                }
            }

            // collect external/parent validation messages
            for (let i in this.status.validationResults) {
                let result = this.status.validationResults[i]
                if (result) {
                    propertyName = result.name;
                    if (result.message) {
                        errorMessages.push(`${propertyName} : ${result.message}`);
                    }
                }
            }
        }
        catch (error) {
            console.log(error);
            errorMessages.push(`Failed to get message for ${propertyName} : ${error.message}`);
        }

        return errorMessages;
    }

    // custom validator 
    // returns null if true
    // returns key : validationResult object if false 'secret'
    containsSecretWord(c: FormControl) {
        if (c.value.indexOf('secret') >= 0) {
            return { secret: { validationResult: new ValidationResult(false, 'SecretWord', 'secret message!') } }
        }
        // Oddly enough null means it's valid. 
        return null;
    }

    // maybe have the parent pass the service url so we can do a query for existance. 
    // or have the parent pass it's implementation of the record exists. 
    // this will wait a second before calling the record exists 
    // returns null if true
    // returns key : validationResult object if false 'secret'
    recordExists(c: FormControl): { [key: string]: any } {
        let q = new Promise((resolve, reject) => {
            if (c.value.indexOf('secret') >= 0) {
                resolve({
                    recordExists: {
                        validationResult: new ValidationResult(false, 'RecordExists', 'secret async message!')
                    }
                });
            }
            else { resolve(null); }
        });

        return q;
    }

    // hold of on the check until timeout. 
    // returns null if true
    // returns key : validationResult object if false 'secret'
    recordExistsWait(c: FormControl): { [key: string]: any } {
        let q = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (c.value.indexOf('secret') >= 0) {
                    resolve({ recordExists: { validationResult: new ValidationResult(false, 'RecordExistsWait', 'secret async message!') } });
                }
                else { resolve(null); }
            }, 1000);
        });
        return q;
    }
}
export class NewRecordStatus {
    public isValid: boolean = true;
    public isValidating: boolean;
    public validationResults: Array<ValidationResult> = new Array<ValidationResult>();
}