import Router from 'koa-router';
import KoaRouter from 'koa-router';
import { Context, Next } from 'koa';

const router = new KoaRouter()
router.get('/',(ctx:Context)=>{
    ctx.body = '测试'
})

router.get('/test',(ctx:Context)=>{
    ctx.body = '测试2'
})


export default router