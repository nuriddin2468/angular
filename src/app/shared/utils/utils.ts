export function padZero(value: unknown): string {
  return `0${value}`;
}

export function cloneDeep<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
