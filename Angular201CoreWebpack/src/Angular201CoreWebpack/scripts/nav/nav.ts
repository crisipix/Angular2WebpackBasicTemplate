export class Nav {
    name: string;
    icon: string;
    link: string;
    linkType: string;
    isSelected: boolean;

    constructor(name, link, icon = '', selected) {
        this.name = name;
        this.link = link;
        this.icon = icon;
        this.isSelected = selected;
    }

    select() {
        this.isSelected = true;
    }

}