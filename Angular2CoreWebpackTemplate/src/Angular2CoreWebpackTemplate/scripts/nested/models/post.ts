export class Post {
    id: number;
    userId: number;
    title: string;
    body: string;

    constructor(userId : number, title : string, body : string)
    {
        this.id = -1;
        this.userId = userId;
        this.title = title;
        this.body = body;
    }
}