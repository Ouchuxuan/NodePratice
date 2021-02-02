import { Context, Next } from 'koa';
export const test = (ctx: Context) => {
    ctx.body = '12345'
}