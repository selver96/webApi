import express, {Request, Response, Router} from 'express';
import CommentRepository from '../service/CommentRepository';
import Comment from '../entity/Comment';

const commentRouter: Router =  Router();


commentRouter.post('/newComment', async (req: Request, res: Response) => {
    let data = req.body;
    let comment = new CommentRepository();
    if(await comment.insert(new Comment(data.content, Number.parseInt(data.post_id)))){
        res.status(200).send(JSON.stringify({msg:"Success"}));
    }else{
        res.status(400).send(JSON.stringify({msg:"Failed"}));
    }
});


export default commentRouter;