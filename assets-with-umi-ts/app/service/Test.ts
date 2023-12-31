import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  async sayHi(name: string): Promise<string> {
    return `hi, ${name}`;
  }
}
