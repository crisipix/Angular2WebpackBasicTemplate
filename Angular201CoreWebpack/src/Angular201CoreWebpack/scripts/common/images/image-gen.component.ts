import {Component, OnInit, Input} from '@angular/core';


@Component({
    selector: 'img-gen',
    templateUrl: './views/common/images/image-gen.component.html'
})

export class ImageGenComponent implements OnInit
{
    @Input('rect-color') rectColor: string;
    @Input('text-value') textValue: string;
    @Input('text-color') textColor: string;
    rectStyle: any;
    textStyle: any; 
    redius: string = "50";
    constructor() {
        console.log(this.rectColor);
    }
    ngOnInit() {
        console.log(this.rectColor);
        console.log(this.textColor);
       
        this.rectStyle = {
            'fill': this.rectColor || '#ffe680'
        };
        this.textValue = this.textValue || "CW";
        this.textStyle = {
            'font-style': 'normal',
            'font-weight': 'normal',
            'font-size': '25px',
            'line-height': '125%',
            'font-family': 'sans-serif',
            'letter-spacing': '0px',
            'word-spacing': '0px',
            'fill': this.textColor || '#000000',
            'fill-opacity': '1',
            'stroke': 'none',
            'stroke-width': '1px',
            'stroke-linecap': 'butt',
            'stroke-linejoin': 'miter',
            'stroke-opacity': '1',
            //'text-align': 'center',
            'text-anchor': 'middle',
            //'text-shadow': '0 1px 2px rgba(0, 0, 0, .5)'
        };
    }
}