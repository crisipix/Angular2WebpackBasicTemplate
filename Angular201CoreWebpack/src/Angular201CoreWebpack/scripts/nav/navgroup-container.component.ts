
import { Component, Input, Output, OnInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NavGroupComponent } from './navgroup.component';
import { NavGroup } from './navgroup';
import { Nav } from './nav';

//import {Observable} from 'rxjs/Observable';
//import {Observer} from 'rxjs/Observer';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { NavService } from './services/nav.service';

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
        private _route: ActivatedRoute,
        private _service: NavService
    ) {
        this.isNavVisible = !this.isMenuButtonVisible;
        this.isVertical = false;
    }

    ngOnInit() {

        console.log('this._router.currentInstruction');


        this._service.getConfig().subscribe(data => {
            this.config = data;
            this.leftConfig = this.mapNavGroups(this.config.left, 0);
            this.rightConfig = this.mapNavGroups(this.config.right, 0);
           

            console.log(this.leftConfig);
            console.log(this.rightConfig);
            //let test = this._route.url[0];
            //console.log(this._router.url);
            //console.log(this._route.snapshot.url);
            //console.log(this._route.snapshot);
            console.log('Current Route');
            let urlPart = this._router.url.split('/')[1];
            console.log(urlPart);

            if (urlPart) {
                let leftRoot = this.getRoot(this.leftConfig);
                this.setIsSelected(leftRoot, urlPart);

                let rightRoot = this.getRoot(this.rightConfig);
                this.setIsSelected(rightRoot, urlPart);
            }

            /*
               Initialize the selected Nav
           */
            let selectedNavs = this.findSelectedNavs(this.getRoot(this.leftConfig));
            if (selectedNavs && selectedNavs.length > 0) {
                this.selectedNav = selectedNavs[0];
            }

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
        if (width < 1030) {
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

        if (!this.isVertical) {
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
        if (!root) { return; }
        for (let ngIndex in root.navgroups) {
            let ng: NavGroup = root.navgroups[ngIndex];

            ng.expanded = false;
            this.collapseAll(ng);
        }
    }


    collapseExpandedGroup() {
        if (!this.isVertical &&
            this.selectedNavGroup &&
            !this.selectedNavGroup.isRoot) {
            this.selectedNavGroup.expanded = false;
        }
    }


    toggleOrientation() {
        this.isVertical = !this.isVertical;
        console.log('this.isVertical');
        console.log(this.isVertical);

        let left: NavGroup = this.getRoot(this.leftConfig);
        let right: NavGroup = this.getRoot(this.rightConfig);

        if (!this.isVertical) {
            this.collapseAll(left);
            this.collapseAll(right);
        }

        //this.collapseExpandedGroup();
    }

    getRoot(config: any) {
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

        return navs.map(n => { return new Nav(n.name, n.link, n.icon, n.isSelected); });
    }

    /*
        Maps Navigation Group and all of their inner navigations
    */
    mapNavGroups(navgroups: Array<any>, level: number): Array<NavGroup> {
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

    /*
        get a flat list of navs. 
    */
    getNavs(navgroup: NavGroup): Array<Nav> {
        var currentNavs = navgroup.navs.reduce((acc, value) => { return [...acc, value]; }, []);

        var groupNavs = navgroup.navgroups.reduce((acc, ng) => { return acc.concat(this.getNavs(ng)); }, []);

        return currentNavs.concat(groupNavs);
    }

    /*
        alters the root NavGroup
        finds anything selected de-selects it.
        finds what needs to be selected based on the link name and sets the isSelected
    */
    setIsSelected(navgroup: NavGroup, linkName: string) {
        navgroup.navs.map((n) => {

            if (n.link === linkName) { n.isSelected = true; }
            if (n.isSelected === true && n.link !== linkName) { n.isSelected = undefined; }

        });

        navgroup.navgroups.map((ng) => { this.setIsSelected(ng, linkName); });
    }

    /*
        finds a list of the selected Navs.
        anything not selected is null. filter those out.
        or use Find. 

        var selected = findSelected(items[0]).find(s => s !== undefined);
	    console.log('outpput set is selected navs', JSON.stringify(selected, null, 2));
    */
    findSelected(navgroup: NavGroup) : Array<Nav>{

    var array = navgroup.navs.reduce((acc, value) => {
        return acc.concat(value.isSelected ? value : undefined);
    }, []);

    var innerarray = navgroup.navgroups.reduce((acc, ng) => { return acc.concat(this.findSelected(ng)); }, []);


    return [...array, ...innerarray];
    }


    /*
        finds a list of the selected Navs.
        is filtered out
        
        var selected = findSelected(items[0]).find(s => s !== undefined);
	    console.log('outpput set is selected navs', JSON.stringify(selected, null, 2));
    */
	findSelectedNavs(navgroup : NavGroup) : Array<Nav> {

    var array = navgroup.navs.reduce((acc, value) => {
        if (value.isSelected) { acc.push(value); }
        return acc;
    }, []);

    var innerarray = navgroup.navgroups.reduce((acc, ng) => { return acc.concat(this.findSelectedNavs(ng)); }, []);


    return [...array, ...innerarray];
}





}
