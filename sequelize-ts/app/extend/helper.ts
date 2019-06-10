export default {
  parseInt(str: string | number) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str) || 0;
  },
}