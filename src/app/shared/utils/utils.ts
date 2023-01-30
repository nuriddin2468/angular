export function padZero(value: unknown): string {
  return `0${value}`;
}

export function cloneDeep<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export function isDate(date: any): boolean {
  return Object.prototype.toString.call(date) === '[object Date]'
}
