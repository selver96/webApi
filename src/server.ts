import express, { Application } from "express";
import commentRouter from "./api/commentRouter";
import postRouter from "./api/postRouter";
import * as swaggerUi from 'swagger-ui-express';
import * as swaggocumerDent from './swagger/openapi.json'
const app: Application = express();
const HOST_NAME: string = '127.0.0.1';
const PORT: string = '6000';
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/post', postRouter);
app.use('/comment', commentRouter);
app.use ('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggocumerDent));
app.listen(PORT, () =>{
    console.log(`Server run in http//${HOST_NAME}:${PORT}`);
});
