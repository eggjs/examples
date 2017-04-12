declare module 'egg' {

  import * as KoaApplication from 'koa';

  class BaseClass {
    public ctx: Context;
    public app: Application;
    constructor(ctx: Context);
  }

  interface Logger {
    info: Function;
    warn: Function;
    debug: Function;
    error: Function;
  }

  /**
   * Singleton instance in App Worker, extend EggApplication
   */
  export interface Application extends KoaApplication {

    /**
     * The configuration of application
     */
    config: any;

    /**
     * app.env delegate app.config.env
     */
    env: string;

    /**
     * global locals for view
     */
    locals: Object;

    /**
     * application logger, log file is $HOME/logs/{appname}/{appname}-web
     */
    logger: Logger;

    /**
     * All loggers contain logger, coreLogger and customLogger
     */
    loggers: { [loggerName: string]: Logger };

    /**
     * create a singleton instance
     */
    addSingleton(name: string, create: Object): void;

    /**
     * http request helper base on httpclient, it will auto save httpclient log.
     * Keep the same api with httpclient.request(url, args).
     * See https://github.com/node-modules/urllib#api-doc for more details.
     */
    curl(url: string, opt: Object): Promise<any>;

    /**
     * Get logger by name, it's equal to app.loggers['name'], but you can extend it with your own logical
     */
    getLogger(name: string): Logger;

    get(path: string, fn: Function | string);

    redirect(path: string, redirectPath: string);
  }

  export interface Context extends KoaApplication.Context {

    app: Application;

    service: IService;

    params: any;

    render: Function;

    redirect(url: string);

    curl: Function;
  }

  export class Controller extends BaseClass { }

  export class Service extends BaseClass { }

  export interface IService { }

  export interface IController { }

}
