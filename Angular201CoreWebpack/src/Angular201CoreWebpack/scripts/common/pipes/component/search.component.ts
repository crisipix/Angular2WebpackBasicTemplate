import {Component, Input, Output, EventEmitter, OnInit, ViewChild} from '@angular/core';

// Search box takes in a filter if it's seeded. 
// returns an updated filter event and outputs an event if toggle is pressed. 
// event needs to be captured and passed to a pipe ie: search.pipe.ts which accepts 
// a search string "args: string" and filters a list.
// sample usage emits an update event that we set to a filter <search-box (update)="filter = $event"></search-box>
// then the filter is piped to the search pipe. <tr *ngFor="let row of rows | search:filter">

@Component({
    selector: 'search-box',
    template: `
  <div class="input-group">
        <input #inputFilter type="text" class="form-control" name="inputFilter" [(ngModel)]="filter" placeholder="Filter" (input)="update.emit(inputFilter.value)">
        <span class="input-group-btn">
            <button class="btn btn-default" (click)="toggleFilterIdeas()"><i class="fa fa-chevron-up fa"></i></button>
        </span>
    </div>
`,
})
export class SearchComponent implements OnInit {
    @Input() filter: string;
    @Output() toggleFilter: EventEmitter<any>;
    @Output() update: EventEmitter<any>;
    @ViewChild('inputFilter') inputFilter;
    constructor() {
        this.toggleFilter = new EventEmitter<any>();
        this.update = new EventEmitter<any>();
    }

    ngOnInit() {
        this.inputFilter.nativeElement.focus();
    }

    toggleFilterIdeas() {
        this.toggleFilter.emit('');
    }
}