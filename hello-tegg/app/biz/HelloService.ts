import {
  ContextProto,
  AccessLevel,
} from '@eggjs/tegg';

@ContextProto({
  accessLevel: AccessLevel.PUBLIC,
})
export class HelloService {
  async hello(name: string): Promise<string> {
    return `hello, ${name}`;
  }
}
