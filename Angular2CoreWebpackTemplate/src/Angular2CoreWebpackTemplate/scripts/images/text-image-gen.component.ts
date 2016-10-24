import {Component, OnInit, Input} from '@angular/core';


@Component({
    selector: 'txt-img-gen',
    templateUrl: './views/images/text-image-gen.component.html'
})

//http://lea.verou.me/2013/03/easily-center-text-vertically-with-svg/
export class TextImageGenComponent implements OnInit {
    @Input() width: string;
    @Input() height: string;
    @Input('rect-color') rectColor: string;
    @Input('text-value') textValue: string;
    @Input('text-color') textColor: string;
    @Input('is-circle') isCircle: boolean;
    rectStyle: any;
    textStyle: any;
    constructor() {
        console.log(this.rectColor);
    }
    ngOnInit() {
        console.log(this.rectColor);
        console.log(this.textColor);

        this.rectStyle = {
            'width': this.width || '100px',
            'height': this.height || '100px',
            'background': this.rectColor || '#ffe680',
            'border-radius': this.isCircle ? '50%' :'0%' };
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
            //'text-shadow' : '0 1px 2px rgba(0, 0, 0, .5)'
        };
    }
}