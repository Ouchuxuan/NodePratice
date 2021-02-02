import fileRouter from './file';
import testRouter from './test'
import Router from 'koa-router'

const appRouter: Router[] = [fileRouter, testRouter]

export default appRouter
