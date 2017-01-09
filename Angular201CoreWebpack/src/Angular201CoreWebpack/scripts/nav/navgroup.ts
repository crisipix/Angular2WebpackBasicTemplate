import { Nav } from './nav';

export class NavGroup {
    name: string;
    icon: string;
    navgroups: Array<NavGroup>;
    navs: Array<Nav>;
    expanded: boolean;
    isRoot: boolean;
    location: string;

    constructor(name, navs, navgroups, location = 'left', icon='') {
        this.name = name;
        this.icon = icon;
        this.navs = navs;
        this.navgroups = navgroups;
        this.isRoot = name === 'Root';
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
        else if (!isVertical && !this.isRoot) {
            styleClass = { 'nav-item-horizontal-left': !isRight };
        }

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