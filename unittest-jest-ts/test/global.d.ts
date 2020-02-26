import { MockApplication } from 'egg-mock';

declare module 'egg' {
  export interface Application {
    mockUser(): void;
  }
}

declare module 'egg-mock' {
  interface MockApplication {
    fromCustomApp: string;
    applicationShow: any;
  }
}

declare global {
  const EggApp: MockApplication;
}

