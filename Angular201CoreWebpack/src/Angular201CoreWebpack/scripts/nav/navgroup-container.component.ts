
import { Component, Input, Output, OnInit, ChangeDetectorRef, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { NavGroupComponent } from './navgroup.component';
import {NavGroup} from './navgroup';
import {Nav} from './nav';

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
        private _router: Router) {
        this.isNavVisible = !this.isMenuButtonVisible;
        this.isVertical = false;
    }

    ngOnInit() {

        console.log('this._router.currentInstruction');
        //console.log(this._router.currentInstruction);
        let selected = new Nav('Home', 'Dashboard');
        selected.isSelected = true;
        this.selectedNav = selected;

        //console.log(this.navconfig);
        //this.navconfig = [
        //    new NavGroup(
        //        'Root',
        //        [
        //            new Nav('Home', 'Home'),
        //            new Nav('Form', 'Form'),
        //            new Nav('Dashboard', 'Dashboard')
        //        ],
        //        [
        //            new NavGroup('Widgets', [
        //                new Nav('Widgets', 'Widgets', 'fa-edit'),
        //                new Nav('Nav', 'Nav', 'fa-balance-scale'),
        //                new Nav('Http Test', 'HttpTest')], []),
        //            new NavGroup('Level 3',  [
        //                new Nav('Inheritance', 'Inheritance', 'fa-snapchat-ghost'),
        //                new Nav('Resolver', 'Resolver'),
        //                new Nav('Dashboard Widgets', 'MyDashboard')
        //                ], [
        //                        new NavGroup('Level 4', [
        //                            new Nav('Home 3', 'Home', 'fa-snapchat-ghost'),
        //                            new Nav('Form 3', 'Form'),
        //                            new Nav('Dashboard 3', 'Dashboard')
        //                    ], [])]),
        //            new NavGroup('About', [ new Nav('AppCaller', 'AppCaller', 'fa-book fa-fw')], [], 'right', 'fa-user')

        //        ])
        //];
        this.config = {
            left: [{
                name: 'Root', navs:
                [
                    { name: 'Home', link: 'tagging' },
                    { name: 'Form', link: 'tree' },
                    { name: 'Dashboard', link: 'tagging' },
                ],
                navgroups: [
                    {
                        name: 'Widgets', navs: [
                            { name: 'Widgets', link: 'Widgets', icon: 'fa-edit' },
                            { name: 'Submission State', link: 'SubmissionState', icon: 'fa-edit' },
                            { name: 'Nav', link: 'Nav', icon: 'fa-balance-scale' },
                            { name: 'Nested Routing', link: 'NestedRouting', icon: 'fa-book fa-fw' },
                            { name: 'Http Test', link: 'HttpTest' }], navgroups: []
                    },
                    {
                        name: 'Level 3', navs: [
                            { name: 'Inheritance', link: 'Inheritance', icon: 'fa-snapchat-ghost' },
                            { name: 'Resolver', link: 'Resolver' },
                            { name: 'Dashboard Widgets', link: 'MyDashboard' },
                            { name: 'Custom Table', link: 'Table' },
                            { name: 'Sortable Table', link: 'SortTable' }
                        ], navgroups: [
                            {
                                name: 'Level 4', navs: [
                                    { name: 'Home 3', link: 'Home', icon: 'fa-snapchat-ghost' },
                                    { name: 'Form 3', link: 'Form' },
                                    { name: 'Dashboard 3', link: 'Dashboard' }
                                ], navgroups: []
                            }]
                    }
                ]
            }],
            right: [{
                name: 'Root',
                navs: [],
                navgroups: [
                    {
                        name: 'About',
                        navs: [
                            { name: 'Nested Routing', link: 'NestedRouting', icon: 'fa-book fa-fw' },
                            { name: 'Settings', link: 'NestedRouting', icon: 'fa-book fa-fw' }
                        ], navgroups: [], location: 'right', icon: 'fa-user'
                    }
                ]}]
        };
        this.leftConfig = this.mapNavGroups(this.config.left);
        this.rightConfig = this.mapNavGroups(this.config.right);

        //this.leftConfig = [
        //    new NavGroup(
        //        'Root',
        //        [
        //            selected,
        //            new Nav('Form', 'Form'),
        //            new Nav('Dashboard', 'Dashboard')
        //        ],
        //        [
        //            new NavGroup('Widgets', [
        //                new Nav('Widgets', 'Widgets', 'fa-edit'),
        //                new Nav('Nav', 'Nav', 'fa-balance-scale'),
        //                new Nav('Http Test', 'HttpTest')], []),
        //            new NavGroup('Level 3', [
        //                new Nav('Inheritance', 'Inheritance', 'fa-snapchat-ghost'),
        //                new Nav('Resolver', 'Resolver'),
        //                new Nav('Dashboard Widgets', 'MyDashboard')
        //            ], [
        //                    new NavGroup('Level 4', [
        //                        new Nav('Home 3', 'Home', 'fa-snapchat-ghost'),
        //                        new Nav('Form 3', 'Form'),
        //                        new Nav('Dashboard 3', 'Dashboard')
        //               ], [])])
        //        ])
        //];
        //this.rightConfig = [
        //    new NavGroup(
        //        'Root',
        //        [],
        //        [
        //            new NavGroup('About', [new Nav('AppCaller', 'AppCaller', 'fa-book fa-fw')], [], 'right', 'fa-user')
        //        ])
        //];

        
        console.log(this.leftConfig);
        console.log(this.rightConfig);

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

    mapNavGroups(navgroups: Array<any>): Array<NavGroup> {
        if (!navgroups || navgroups.length == 0) { return new Array<NavGroup>(); }

        return navgroups.map(ng => { return new NavGroup(ng.name, this.mapNavs(ng.navs), this.mapNavGroups(ng.navgroups), ng.location, ng.icon); });
    }
}
