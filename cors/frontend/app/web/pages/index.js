import request from 'umi-request';

request('http://local.alipay.net:7001/api')
  .then(res => console.log(res));
