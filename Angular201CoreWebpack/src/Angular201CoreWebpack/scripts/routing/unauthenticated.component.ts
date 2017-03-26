import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
    selector: 'unauthenticated',
    template: `
    <div class="jumbotron" style="text-align:center;">
    <h1>User Not Found</h1>
    <txt-img-gen rect-color="Red" text-value="401" text-color="black" is-circle="true" width="200px" height="200px"></txt-img-gen>
    <p>Your user information cannot be found...</p>
    <p><a class="btn btn-primary btn-lg">Go Back</a></p>
</div>`
})
export class UnAuthenticatedComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }

}