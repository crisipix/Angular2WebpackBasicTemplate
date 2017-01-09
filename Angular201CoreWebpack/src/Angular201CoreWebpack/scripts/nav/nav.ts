export class Nav {
    name: string;
    icon: string;
    link: string;
    linkType: string;
    isSelected: boolean;

    constructor(name, link, icon = '') {
        this.name = name;
        this.link = link;
        this.icon = icon;
        this.isSelected = false;
    }

    select() {
        this.isSelected = true;
    }

}