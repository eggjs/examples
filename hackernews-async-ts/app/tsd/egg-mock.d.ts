declare module 'egg-mock' {
  import { Application, Context } from 'egg';

  interface MockApplication extends Application {
    ready(): Promise<void>;
    close(): Promise<void>;
    callback(): any;

    /**
     * mock Context
     */
    mockContext(data?: Object): Context;

    /**
     * mock cookie session
     */
    mockSession(data: Object): MockApplication;

    mockCookies(cookies: Object): MockApplication;

    mockHeaders(headers: Object): MockApplication;

    /**
     * Mock service
     */
    mockService(service: string, methodName: string, fn: Object | Function | Error): MockApplication;

    /**
     * mock service that return error
     */
    mockServiceError(service: string, methodName: string, err?: Error): MockApplication;

    mockHttpclient(mockUrl: string, mockMethod: string | Array<String>, mockResult: {
      data: Buffer | string | JSON;
      status: number;
      headers: Object;
    }): MockApplication;
  }

  interface MockOption {
    /**
     * The directory of the application
     */
    baseDir?: string;

    /**
     * Custom you plugins
     */
    plugins?: Object;

    /**
     * The directory of the egg framework
     */
    framework?: string;

    /**
     * Cache application based on baseDir
     */
    cache?: boolean;

    /**
     * Swtich on process coverage, but it'll be slower
     */
    coverage?: boolean;

    /**
     * Remove $baseDir/logs
     */
    clean?: boolean;
  }

  type EnvType = 'default' | 'test' | 'prod' | 'local' | 'unittest';
  interface EggMock {
    /**
     * Create a egg mocked application
     */
    app(option?: MockOption): MockApplication;

    /**
     * mock the serverEnv of Egg
     */
    env(env: EnvType): void;

    /**
     * mock console level
     */
    consoleLevel(level: string): void;
    
    /**
     * set EGG_HOME path 
     */
    home(homePath: string): void;

    /**
     * restore mock
     */
    restore(): void;
  }
  var mm: EggMock;

  export = mm;
}