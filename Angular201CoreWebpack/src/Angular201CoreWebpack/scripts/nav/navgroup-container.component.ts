﻿
import { Component, Input, Output, OnInit, ChangeDetectorRef, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { NavGroupComponent } from './navgroup.component';
import {NavGroup} from './navgroup';
import {Nav} from './nav';

//import {Observable} from 'rxjs/Observable';
//import {Observer} from 'rxjs/Observer';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import {NavService} from './services/nav.service';

//import {ImageGenComponent} from '../common/images/image-gen.component';


@Component({
    selector: 'navgroup-container',
    templateUrl: './views/nav/navgroup-container.component.html',
    //template: `
    //    <img class="logo" src="../../images/logo.svg" />
    //    <nav-group [navconfig]=navconfig></nav-group>`,
    styleUrls: ['./styles/nav/navigation.css'],
    host: { '(document:click)': 'onWindowClick($event)' },
})
export class NavGroupContainerComponent implements OnInit {
    config: any;
    leftConfig: Array<NavGroup>;
    rightConfig: Array<NavGroup>;
    isMenuButtonVisible: boolean;
    isNavVisible: boolean;
    isVertical: boolean;

    selectedNav: Nav;
    selectedNavGroup: NavGroup;

    constructor(private cdr: ChangeDetectorRef,
        private _eref: ElementRef,
        private _router: Router,
        private _service : NavService
    ) {
        this.isNavVisible = !this.isMenuButtonVisible;
        this.isVertical = false;
    }

    ngOnInit() {

        console.log('this._router.currentInstruction');
        //console.log(this._router.currentInstruction);
        let selected = new Nav('Home', 'Dashboard');
        selected.isSelected = true;
        this.selectedNav = selected;

        this._service.getConfig().subscribe(data => {
        this.config = data;
        this.leftConfig = this.mapNavGroups(this.config.left, 0);
        this.rightConfig = this.mapNavGroups(this.config.right, 0);

        console.log(this.leftConfig);
        console.log(this.rightConfig);


        });
        
        // check the window with after initializing the nav.
        this.checkWidth(window.innerWidth);
    }

    // collapse all open menus after a user clicks anywhere on the screen
    onWindowClick(event) {
        //console.log(this._eref.nativeElement.contains(event.target));
        //console.log(event.target);
        //console.log(event.explicitOriginalTarget);
        //console.log(this._eref.nativeElement.contains(event.explicitOriginalTarget));
        //console.log(this._eref.nativeElement);
        //console.log(event);
        if (!this._eref.nativeElement.contains(event.target)) // or some similar check
        {

            let left: NavGroup = this.getRoot(this.leftConfig);
            let right: NavGroup = this.getRoot(this.rightConfig);
            if (!this.isVertical) {
                this.collapseAll(left);
                this.collapseAll(right);
            }

            //this.collapseExpandedGroup();
        }
    }

    menuClicked() {
        this.isNavVisible = !this.isNavVisible;
    }

    onResize(event) {
        console.log('resize');
        let width = event.target.innerWidth;

        this.checkWidth(width);
    }

    checkWidth(width) {
        if (width < 1000) {
            this.isMenuButtonVisible = true;
            this.cdr.detectChanges(); //running change detection manually
        }
        else {
            this.isMenuButtonVisible = false;
            this.cdr.detectChanges(); //running change detection manually
        }
        this.isNavVisible = !this.isMenuButtonVisible;

        if (this.isVertical !== this.isMenuButtonVisible) {
            this.toggleOrientation();
        }

    }

    onNavClick(event) {
        //console.log(event);
        //console.log('NAV CLICK');

        // hide the menu after a user selects a nav item if the screen is small.
        if (this.isMenuButtonVisible) {
            this.isNavVisible = false;
        }

        if (this.selectedNav && this.selectedNav.name !== event.nav.name) {
            console.log('from : ' + this.selectedNav.name + ' to: ' + event.nav.name);
            this.selectedNav.isSelected = false;
            this.selectedNav = event.nav;
        }
        else { this.selectedNav = event.nav; }

        let left: NavGroup = this.getRoot(this.leftConfig);
        let right: NavGroup = this.getRoot(this.rightConfig);

        //if (rootNavGroup){
        //    this.deSelectAll(event.link, event.navgroup, rootNavGroup);
        //}

        if (!this.isVertical){
            //this.collapseAll(rootNavGroup);
            this.collapseAll(left);
            this.collapseAll(right);
        }

       // this.collapseExpandedGroup();
    }

    // deselect from root
    deSelectAll(link: string, navgroupName: string, root: NavGroup) {
        for (let nIndex in root.navs) {
            let nav: Nav = root.navs[nIndex];

            if (!(nav.link === link && root.name === navgroupName)) {
                nav.isSelected = false;
            }
        }

        for (let ngIndex in root.navgroups) {
            this.deSelectAll(link, navgroupName, root.navgroups[ngIndex]);
        }
    }

    onNavGroupClick(event) {
        if (event.navgroup) {
            console.log(event);
            if (this.selectedNavGroup &&
                !this.selectedNavGroup.isRoot &&
                !event.navgroup.isRoot &&
                this.selectedNavGroup.name !== event.navgroup.name &&
                !this.selectedNavGroup.navgroups.find(x => x.name === event.navgroup.name)
            ) {
                console.log('collapse group');
                this.selectedNavGroup.expanded = false;
            }

            this.selectedNavGroup = event.navgroup;
        }
    }

    // collapse from root
    collapseAll(root: NavGroup) {
        if (!root) { return;}
        for (let ngIndex in root.navgroups) {
            let ng: NavGroup = root.navgroups[ngIndex];

            ng.expanded = false;
            this.collapseAll(ng);
        }
    }


    collapseExpandedGroup() {
        if (!this.isVertical &&
            this.selectedNavGroup &&
            !this.selectedNavGroup.isRoot)
        {
            this.selectedNavGroup.expanded = false;
        }
    }


    toggleOrientation() {
        this.isVertical = !this.isVertical;
        console.log('this.isVertical');
        console.log(this.isVertical);

        let left: NavGroup = this.getRoot(this.leftConfig);
        let right: NavGroup = this.getRoot(this.rightConfig);

        if ( !this.isVertical) {
            this.collapseAll(left);
            this.collapseAll(right);
        }

        //this.collapseExpandedGroup();
    }

    getRoot(config : any) {
        for (let ngIndex in config) {
            let navGroup: NavGroup = config[ngIndex];

            if (navGroup.name.toLowerCase() === "root") {
                return navGroup;
            }
        }

        return null;
    }

    mapNavs(navs: Array<any>): Array<Nav> {
        if (!navs || navs.length == 0) { return new Array<Nav>(); }

        return navs.map(n => { return new Nav(n.name, n.link, n.icon); });
    }

    /*
        Maps Navigation Group and all of their inner navigations
    */
    mapNavGroups(navgroups: Array<any>, level : number): Array<NavGroup> {
        if (!navgroups || navgroups.length == 0) { return new Array<NavGroup>(); }

        return navgroups.map(ng => {
            return new NavGroup(ng.name,
                this.mapNavs(ng.navs),
                this.mapNavGroups(ng.navgroups, level + 1),
                ng.location,
                ng.icon,
                level);
        });
    }
}
