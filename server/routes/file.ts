import KoaRouter from 'koa-router';
import { test } from '../controllers/files-controler'

const router = new KoaRouter({
    prefix: '/api/v1/file'
})

router.get('/test', test)

export default router