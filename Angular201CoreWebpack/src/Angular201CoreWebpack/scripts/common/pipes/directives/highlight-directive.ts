﻿import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';
//import { escapeStringRegexp } from '../helpers/helper';

@Directive({
    selector: '[highlight-search]'
})
export class HighlightDirective implements OnInit {
    @Input() search: string;
    @Input() text: string;
    @Input() classToApply: string;

    constructor(private el: ElementRef, private renderer: Renderer) { }

    ngOnInit() {
        if (typeof this.classToApply === 'undefined') {
            this.classToApply = '';
        }

        if (typeof this.search === 'undefined') {
            this.renderer.setElementProperty(this.el.nativeElement, 'innerHTML', this.text);
            return;
        }

        let search = escapeStringRegexp(this.search.toString());
        this.renderer.setElementProperty(this.el.nativeElement, 'innerHTML', this.replace(this.text, search));
    }

    replace(txt: string, search: string) {
        let searchRgx = new RegExp('(' + search + ')', 'gi');

        return txt.replace(searchRgx, `<span class="${this.classToApply}">$1</span>`);
    }
}

export let matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

export function escapeStringRegexp(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }

    return str.replace(matchOperatorsRe, '\\$&');
};