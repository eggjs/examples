'use strict';

exports.keys = '123456';

exports.bodyParser = {
  enableTypes: [ 'json', 'form', 'text', 'xml' ],
  extendTypes: {
    json: 'application/custom-json',
    text: [ 'application/xml' ],
  },
};
