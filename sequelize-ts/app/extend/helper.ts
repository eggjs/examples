export default {
  parseInt(str: string | number) {
    if (typeof str === 'number') return str;
    if (!str) return 0;
    return parseInt(str) || 0;
  },
}