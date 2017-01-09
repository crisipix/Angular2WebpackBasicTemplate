import { Component, Input, Output, OnInit, EventEmitter, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { NavGroup } from './navgroup';
import {Nav} from './nav';


@Component({
    selector: 'nav-group',
    templateUrl: './views/nav/navgroup.component.html',
    styleUrls: ['./styles/nav/navigation.css']
})
export class NavGroupComponent implements OnInit {
    @Input() navconfig: Array<NavGroup>;
    @Input() navgroup: NavGroup;
    @Input() isVertical: boolean;
    @Output() public navClick = new EventEmitter();
    @Output() public groupInit = new EventEmitter();

    constructor(private _router: Router, private _el: ElementRef) { }

    ngOnInit() {
        console.log('group isVertical');
        console.log(this.isVertical);
        this.groupInit.emit({ navgroup: this.navgroup });
    }
    navigate(navgroup: string, link: string, nav: Nav) {
        this._router.navigate([link]);
        this.navClick.emit({ 'navgroup': navgroup, 'link': link, 'nav': nav });
        console.log('NAV');
    }

    onNavClick(event) {
        // pass it's own event up. 
        console.log('Passing Internal click up');
        this.navClick.emit(event);
    }

    onNavGroupClick(event) {
        this.groupInit.emit(event);
    }
}