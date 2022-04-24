// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTraceMethod from '../../../app/middleware/trace_method';

declare module 'egg' {
  interface IMiddleware {
    traceMethod: typeof ExportTraceMethod;
  }
}
