import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
    selector: 'notfound',
    template: `
    <div class="jumbotron" style="text-align:center;">
    <h1>Not Found</h1>
    <txt-img-gen rect-color="Red" text-value="404" text-color="black" is-circle="true" width="200px" height="200px"></txt-img-gen>
    <p>You are looking for cannot be found...</p>
    <p><a class="btn btn-primary btn-lg">Go Back</a></p>
</div>`
    
})
export class NotFoundComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }

}