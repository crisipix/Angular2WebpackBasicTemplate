import { Component } from '@angular/core';
import { GenericSort } from '../../common/sorters/generic-sorter';
@Component({
    selector: 'table-comp',
    template: `<div>Sorter
        <button class="btn btn-primary" type="button" (click)="onSort()">Sort</button>
        <ul>
            <li *ngFor="let number of numbers">
                {{number}}
            </li>
        </ul>
    </div>`
})

export class TableComponent {

    numbers: Array<any>;

    constructor(private gsort: GenericSort) {

        this.numbers = new Array<any>([1, 3, 4, 57, 9, 11, 44, 2]);
    }

    onSort() {
        this.gsort.sort(this.numbers);
        this.numbers.sort((a, b) => { return a - b;})
    }
}