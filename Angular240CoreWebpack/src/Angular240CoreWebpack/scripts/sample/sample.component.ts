import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
    selector: 'notfound',
    template: `
    <div class="jumbotron" style="text-align:center;">
    <h1>Sample Found</h1>
    <p>Sample...</p>
    <p><a class="btn btn-primary btn-lg">Go Back</a></p>
    <alert type="success">
      <strong>Well done!</strong> You successfully read this important alert message.
    </alert>
    <alert type="info">
      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
    </alert>
    <alert type="warning">
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </alert>
    <alert type="danger">
      <strong>Oh snap!</strong> Change a few things up and try submitting again.
    </alert>
</div>`

})
export class SampleComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }

}