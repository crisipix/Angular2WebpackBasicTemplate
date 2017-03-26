import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
    selector: 'unauthorized',
    template: `
    <div class="jumbotron" style="text-align:center;">
    <h1>User Not Authorized</h1>
    <txt-img-gen rect-color="Red" text-value="403" text-color="black" is-circle="true" width="200px" height="200px"></txt-img-gen>
    <p>Your user information cannot be authorized...</p>
    <p><a class="btn btn-primary btn-lg">Go Back</a></p>
</div>`
})
export class UnAuthorizedComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }

}