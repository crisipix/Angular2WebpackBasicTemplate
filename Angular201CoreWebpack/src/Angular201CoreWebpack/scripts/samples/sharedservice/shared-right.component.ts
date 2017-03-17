import { Component } from '@angular/core';

import {IndependentService} from './services/independent.service';
import {SharedService} from './services/shared.service';

@Component({
    selector: 'shared-right',
    template: `
       <h1>Right Form</h1>
<form class="form-horizontal" #userTemplateForm="ngForm"   (ngSubmit)="onSubmit(userTemplateForm.value)">
  <fieldset>
    <legend>Legend</legend>
    <div class="form-group">
      <label for="inputMessage" class="col-lg-2 control-label">Message</label>
      <div class="col-lg-10">
        <input type="text" required class="form-control" name="message" placeholder="Message" ngModel>
      </div>
	  <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </fieldset>
</form>
<div class="alert alert-dismissible alert-info">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>Heads up!</strong>
  This <a href="#" class="alert-link">alert needs your attention</a>, but it's not super important.
  sharedmessage {{sharedmessage}}
  mymessage {{mymessage}}
</div>
    `,
    styles: [],
    providers: [IndependentService]
})
export class SharedRightComponent {
    sharedmessage: string;
    mymessage: string;

    constructor(
        private _sharedService: SharedService,
        private _independentService: IndependentService) {


        this.mymessage = this._independentService.myMessage;
        this.sharedmessage = this._sharedService.sharedMessage;
    }

    onSubmit(value) {
        this._sharedService.setSharedMessage(value.message);
        this._independentService.setIndependentMessage(value.message);



        this.mymessage = this._independentService.myMessage;
        this.sharedmessage = this._sharedService.sharedMessage;
    }

}
