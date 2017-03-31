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
    testString: string = 'Apple Boy Cat Dog ';
    originalString: string = 'Apple Boy Cat Dog ';
    searchString: string = 'y Cat';
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

    onFilterChanged(value) {
        this.filter = value;
        console.log(this.filter);

        this.onInputChange();
    }

    hilite(textblock) {
        return this.filter ?
            textblock.replace(new RegExp('(' + this.filter + ')', 'ig'), '<span class=highlight>$1</span>')
            : textblock;
    }

    onInputChange() {

        //this.testString = this.searchString ?
        //    this.originalString.replace(new RegExp('(' + this.searchString + ')', 'ig'), '<span class=highlight>$1</span>')
        //    : this.originalString;

        this.testString = this.filter ?
            this.originalString.replace(new RegExp('(' + this.filter + ')', 'ig'), '<span class=highlight>$1</span>')
            : this.originalString;
    }

}
