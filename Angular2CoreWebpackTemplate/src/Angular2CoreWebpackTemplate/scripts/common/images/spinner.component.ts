import {Component, OnInit, Input, Output} from '@angular/core';

// Usage creates a spinner to indicate some currently running action is taking place. 
// show spinner allows the spinner to be added to the dom. 
// top quarter shows the spinner 25% from the top rather than the standard 50%
// background makes the grey background visible to overlay all components. 
@Component({
    selector: 'spinner',
    template: ` 
            <div class="spin" [ngClass]="bodyStyle()" *ngIf="showSpinner">
                <p class="center" [ngClass]="spinStyle()"><i class="fa fa-spinner fa-spin fa-3x fa-fw "></i></p>
            <div>`,
    styleUrls:['./styles/common/images/spinner.css']
     
})
export class SpinnerComponent implements OnInit
{
    @Input() showSpinner: boolean;
    @Input() topQuarter: boolean;
    @Input() background: boolean;

    constructor() {
        this.showSpinner = false;
        this.topQuarter = false;
        this.background = false;
    }
    ngOnInit()
    {

    }

    spinStyle()
    {
        let style = this.topQuarter ? { 'top-quarter': true } : { 'top-center': true };

        return style;

    }

    bodyStyle()
    {
        let style = this.background ? { 'spin-background': true } : { };

        return style;
    }
}
