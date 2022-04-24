const CONTEXT_VISITOR = Symbol('context#CONTEXT_VISITOR');

export default {
  get currentContext() {
    if (!this[CONTEXT_VISITOR]) {
      this[CONTEXT_VISITOR] = this;
    }
    return this[CONTEXT_VISITOR];
  },
}
