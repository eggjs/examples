'use strict';

// exports.keys = 'my keys';
// 配置 logger 文件的目录，logger 默认配置由框架提供
// module.exports = {
//     keys: 'my keys',
//     logger: {
//         dir: 'logs', // 默认目录
//     },
// };
const path = require('path');
module.exports = appInfo => {
    // console.log(appInfo.pkg)
    // console.log(appInfo.name)
    // console.log(appInfo.baseDir)
    // console.log(appInfo.HOME)
    // console.log(appInfo.root)

    return {
        keys: 'my-cookie-secret-key',
        // 日志分为 NONE，DEBUG，INFO，WARN 和 ERROR 5 个级别 ,
        // 默认只会输出 INFO 及以上（WARN 和 ERROR）的日志到文件中。
        logger: {
            encoding: 'utf-8', // 默认
            level: 'INFO',// 默认
            consoleLevel: 'NONE', // 打开终端日志 默认
            dir: path.join(appInfo.baseDir, 'logs'),
            appLogName: `${appInfo.name}-web.log`,
            coreLogName: 'egg-web.log',
            agentLogName: 'egg-agent.log',
            errorLogName: 'common-error.log',
        },
        //日志大小切割 默认按天切割(在凌晨00:00)
        logrotator: {
            enable: true,
            // filesRotateBySize: [ //日志按照大小
            //     path.join(appInfo.root, 'logs', appInfo.name, 'egg-web.log'),
            // ],
            // maxFileSize: 2 * 1024 * 1024 * 1024, // 当文件超过 2G 时进行切割。
            // filesRotateByHour: [ // 日志按照小时
            //     path.join(appInfo.root, 'logs', appInfo.name, 'common-error.log'),
            // ],
        },
    };
};