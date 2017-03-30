import { Component } from '@angular/core';

@Component({
    selector: 'search-test',
    templateUrl: './views/samples/searchfilter/highlight-search.component.html',
    styles: [`.highlight { background-color:yellow;}`]

})
export class HighlightSearchComponent{
    records: Array<any>;
    showFilter: boolean;
    filter: string;
    constructor() {
        this.records = [
            { code: 'A', desc: 'Apple' },
            { code: 'B', desc: 'Boy' },
            { code: 'C', desc: 'Cat' },
            { code: 'D', desc: 'Dog' },
            { code: 'E', desc: 'Egypt' }
        ];
    }
    toggleFilter() {
        this.showFilter = !this.showFilter || false;
    }

}
