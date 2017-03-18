import { Nav } from './nav';

export class NavGroup {
    name: string;
    icon: string;
    navgroups: Array<NavGroup>;
    navs: Array<Nav>;
    expanded: boolean;
    isRoot: boolean;
    level: number;
    location: string;

    constructor(name, navs, navgroups, location = 'left', icon = '', level) {
        this.name = name;
        this.icon = icon;
        this.navs = navs;
        this.navgroups = navgroups;
        this.isRoot = name === 'Root';
        this.level = level;
        this.expanded = this.isRoot;
        this.location = location;
    }

    toggle() {
        this.expanded = !this.expanded;
    }

    isPushedRight(isVertical: boolean) {
        let styleClass = {};
        let isRight = !isVertical && !this.isRoot && this.location === 'right';
        if (isRight) {
            styleClass = { 'nav-item-horizontal-right': isRight };
        }
        // added for nested subgroup
        else if (!isVertical && !this.isRoot && this.level > 1) {
            styleClass = { 'nav-item-horizontal': !isRight };
        }
        // added for first
        else if (!isVertical && !this.isRoot) {
            styleClass = { 'nav-item-horizontal-left': !isRight };
        }
       

        return styleClass;
    }

    getItemClass(isVertical : boolean) {
        let styleClass = {};
        let isRight = !isVertical && !this.isRoot && this.location === 'right';

        // in case there is a right group that's nested
        if (isRight && !isVertical && this.level > 1) {
            styleClass = { 'nav-sub-item-horizontal-right': isRight };
        }
        // added for nested subgroup
        if (!isVertical && this.level > 1) {
            styleClass = { 'nav-sub-item-horizontal': true };
        }
        // added for first
        else if (!isVertical && !this.isRoot) {
            styleClass = { 'nav-item-horizontal': true };
        }
        // added for root
        else if (!isVertical && this.isRoot) {
            styleClass = { 'nav-root-item-horizontal': true };
        }
        //{
        //    'nav-sub-item-horizontal' : !isVertical && navgroup.level
        //    'nav-item-horizontal': !isVertical && !navgroup.isRoot,
        //        'nav-root-item-horizontal' : !isVertical && navgroup.isRoot
        //}

        return styleClass;
    }

    isFixedWidth(isVertical: boolean) {
        let styleClass = {};
        let isFixed = !isVertical && !this.isRoot;
        if (!isVertical && this.isRoot) {
            styleClass = { 'nav-root-item-horizontal': true };
        }
        else if (isFixed) {
            styleClass = { 'nav-item-horizontal': true };
        }

        return styleClass;
    }
}