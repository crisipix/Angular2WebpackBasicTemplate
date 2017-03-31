import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
    selector: 'highlight-sample',
    template: `<div [innerHTML]="highlighted"></div>
<input [(ngModel)]="text" (ngModelChange)="updateHighlight()" name="high">`,
    styles: [`.highlight { background-color:yellow;}`]
})


export class HightlightSampleComponent {
    allText: string = 'lorem ipsum ...';
    text: string = '';
    highlighted: string = 'lorem ipsum ...';

    updateHighlight() {
        this.highlighted = this.text ?
              this.allText.replace(new RegExp('(' + this.text + ')', 'ig'), '<span class=highlight>$1</span>')
            : this.allText;
    }

}