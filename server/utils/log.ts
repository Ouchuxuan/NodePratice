/**
 * 日志插件
 */
import { PathLike } from "fs"
import { Context, Next } from 'koa';

type logLevel = 'normal' | 'warn' | 'error'

interface logTypeItem {
    typeName: string
    savaDir: PathLike
}

type ArrayElement<T> = T extends (infer U)[] ? U : null;

type logType = Array<logTypeItem>


type LogConfig = {
    logLevel?: logLevel,
    logFilePath?: PathLike,
    logType?: logType
} | null


export default class Log {
    public config
    constructor(config: LogConfig = null) {
        this.config = config
    }
    // 初始化
    init() {
        // 实根据config配置，生成log目录及子目录等
        console.log('init 了 log')
    }
    addToServerContext(ctx:Context){
        ctx.logger = this;
    }
    // 生成log文件夹保存文件
    saveLogFile(logFilePath: PathLike) {

    }
}