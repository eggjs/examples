import moment from 'moment';

export function relativeTime(seconds: number) {
  return moment(new Date(seconds * 1000)).fromNow();
}

export function domain(url: string) {
  return url && url.split('/')[2];
}
