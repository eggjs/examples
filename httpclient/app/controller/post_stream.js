'use strict';

module.exports = function* postStream() {
  console.log(this.header);
  let size = 0;
  this.req.on('data', data => {
    size += data.length;
  });
  this.req.resume();
  yield end(this.req);

  this.body = {
    streamSize: size,
  };
};

function end(req) {
  return new Promise((resolve, reject) => {
    req.on('end', resolve);
    req.on('error', reject);
  });
}
