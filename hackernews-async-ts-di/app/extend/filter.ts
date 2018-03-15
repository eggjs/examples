'use strict';

import * as moment from 'moment';

exports.relativeTime = (time) => moment(new Date(time * 1000)).fromNow();

exports.domain = (url) => url && url.split('/')[2];
