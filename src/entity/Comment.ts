export default class Comment{
    content: string;
    post_id: number;

    constructor(content: string, post_id: number){
        this.content = content;
        this.post_id = post_id;
    }

    getContent(){
        return this.content;
    }

    getPost_Id(){
        return this.post_id;
    }
}