import { Component } from '@angular/core';
import { escapeStringRegexp } from '../../common/pipes/directives/highlight-directive';

@Component({
    selector: 'search-test',
    templateUrl: './views/samples/searchfilter/highlight-search.component.html',
    styles: [`.highlight { background-color:yellow;}`]

})
export class HighlightSearchComponent{
    records: Array<any>;
    showFilter: boolean;
    filter: string;
    testString: string = 'Apple Boy Cat Dog There //is a wal{rus} ';
    originalString: string = 'Apple Boy Cat Dog There //is a wal{rus} ';
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
        if (!textblock) { return textblock; }
        if (!this.filter) { return textblock; }

        let search = escapeStringRegexp(this.filter.toString());


        return search ?
            textblock.replace(new RegExp('(' + search + ')', 'ig'), '<span class=highlight>$1</span>')
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
