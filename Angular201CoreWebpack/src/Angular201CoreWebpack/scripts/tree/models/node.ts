export class TreeNode {
    name: string;
    children: Array<TreeNode>;
    isCollapsed: boolean;
    constructor(name, children: Array<TreeNode>)
    {
        this.name = name;
        this.children = children;
        this.isCollapsed = true;
    }
}