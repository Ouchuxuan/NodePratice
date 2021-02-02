import Koa from 'koa';
import appConfig from './config'
import KoaBody from 'koa-body'
import path from 'path'
import cors from '@koa/cors'
import KoaStatic from 'koa-static'
import appRouter from './routes'
import logMiddleWare from './middlewares/log'

const app = new Koa()

app.use(logMiddleWare())
app.use(cors())
app.use(KoaBody({
    formidable: {
        //设置文件的默认保存目录，不设置则保存在系统临时目录下  os
        uploadDir: path.resolve(__dirname, '../static/uploads')
    },
    multipart: true
}))

// 静态资源
app.use(KoaStatic(path.resolve(__dirname, '../static')))


// router
appRouter.forEach(router => {
    app.use(router.routes()).use(router.allowedMethods())
})


app.listen(appConfig.port, () => {
    console.log(`server listen on port ${appConfig.port}`)
})