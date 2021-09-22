export default class Post{
    id!: number;
    title: string;
    content: string;
    create_date: string;

    constructor(id: number, title: string, content: string, create_date: string){
        this.id = id;
        this.title = title;
        this.content = content;
        this.create_date = create_date;
    }

    getId(){
        return this.id;
    }

    getTitle(){
        return this.title;
    }

    getContent(){
        return this.content;
    }

    getCreate_Date(){
        return this.create_date;
    }
}