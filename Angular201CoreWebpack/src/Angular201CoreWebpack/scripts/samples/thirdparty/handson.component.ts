import {Component, OnInit, Input, Output} from '@angular/core';
import { genData} from './data/data';

@Component({
    selector: 'handson',
    templateUrl: './views/samples/thirdparty/handson.component.html'
})

export class HandsonComponent implements OnInit
{
    constructor() { }

    ngOnInit() {

    }
    private data: Array<any> = genData(10);
    private colHeaders: Array<string> = ['ID', 'First Name', 'Last Name', 'Address',
        'Favorite food', 'Price', 'Is active'];
    private columns: Array<any> = [
        {
            data: 'id',
            readOnly: false
        },
        {
            data: 'name.first',
            renderer: 'text',
            readOnly: false
        },
        {
            data: 'name.last',
            readOnly: false
        },
        {
            data: 'address'
        },
        {
            data: 'product.description',
            source: 'product.options',
            optionField: 'description',
            type: 'autocomplete',
            strict: false,
            visibleRows: 4
        },
        {
            data: 'price',
            type: 'numeric',
            format: '$ 0,0.00'
        },
        {
            data: 'isActive',
            type: 'checkbox',
            checkedTemplate: 'Yes',
            uncheckedTemplate: 'No'
        }
    ];
    private colWidths: Array<number> = [null, null, null, null, null, null, 30];
    private options: any = {
        stretchH: 'all',
        columnSorting: true,
        contextMenu: [
            'row_above', 'row_below', 'remove_row'
        ]
    };

    private afterChange(e: any) {
        console.log(e);
    }

    private afterOnCellMouseDown(e: any) {
        console.log(e);
    }
}