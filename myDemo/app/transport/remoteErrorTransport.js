const util = require('util');
const Transport = require('egg-logger').Transport;

// 系统错误级别日志上报远程服务
class RemoteErrorTransport extends Transport {

    // 定义 log 方法，在此方法中把日志上报给远端服务
    log(level, args) {
        let log;
        if (args[0] instanceof Error) {
            const err = args[0];
            log = util.format('%s: %s\n%s\npid: %s\n', err.name, err.message, err.stack, process.pid);
        } else {
            log = util.format(...args);
        }

        this.options.app.curl('http://url/to/remote/error/log/service/logs', {
            data: log,
            method: 'POST',
        }).catch(console.error);
    }
}
module.exports = RemoteErrorTransport;