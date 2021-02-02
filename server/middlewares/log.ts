import { Context, Next } from 'koa';
import Log from '../utils/log'
export default () => {
    const logger = new Log()
    logger.init()
    return async (ctx: Context, next: Next) => {
        /** to do here */
        // 每一个请求都会执行一次
        logger.addToServerContext(ctx)
        await next();
    }
}