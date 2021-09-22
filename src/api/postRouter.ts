import express, {Request, Response, Router}  from 'express';
import Post from '../entity/Post';
import PostRepository from '../service/PostRepository';

const postRouter: Router =  Router();

postRouter.post('/newPost', async (req: Request, res: Response) => {
    let data = req.body;
    let post = new PostRepository();
    if(await post.insert( await new Post(data.id, data.title, data.content, Date.now.toString()))){
        res.status(200).send(JSON.stringify({msg:"Success"}));
    }else{
        res.status(400).send(JSON.stringify({msg:"Failed"}));
    }
});

postRouter.get('/allPosts', async (req: Request, res: Response) => {
    let data = req.body;
    let post = new PostRepository();
    let result = await post.select()
    if(result){
        res.status(200).send(result);
    }else{
        res.status(400).send(JSON.stringify({msg:"Failed"}));
    }
});

postRouter.get('/getPost/:id', async (req: Request, res: Response) => {
    let id = req.params.id;
    let post = new PostRepository();
    let result = await post.selectById(Number.parseInt(id));
    if(result){
        res.status(200).send(result);
    }else{
        res.status(400).send(JSON.stringify({msg:"Failed"}));
    }
});

postRouter.delete('/deletePost/:id', async (req: Request, res: Response) => {
    let id = req.params.id;
    let post = new PostRepository();
    let result = await post.delete(Number.parseInt(id));
    if(result){
        res.status(200).send(JSON.stringify({msg:"Success"}));
    }else{
        res.status(400).send(JSON.stringify({msg:"Failed"}));
    }
});

export default postRouter;