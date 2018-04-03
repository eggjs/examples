// extend egg
declare module 'egg' {
  type PowerPartial<T> = {
    [U in keyof T]?: T[U] extends {}
      ? { [V in keyof T[U]]?: T[U][V] extends {} ? Partial<T[U][V]> : T[U][V] }
      : T[U]
  };
}