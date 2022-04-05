interface ICookie {
  [key: string]: string;
}

export interface IDateRes {
  [key: string]: string;
}

/**
 * is function
 * @param functionToCheck
 */
export const isFunction = (functionToCheck: any): boolean => {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
  );
};

/**
 * 是否为空
 * @param data
 */
export const isNull = (data: any) => {
  return (
    data === undefined ||
    data === null ||
    String(data) === 'undefined' ||
    String(data) === 'null'
  );
};

/**
 * format Cookies
 * @param cookie
 */
export const formatCookie = (cookie: string): ICookie => {
  const cookies = cookie.split(';');
  const cookieMap: ICookie = {};
  cookies.forEach(item => {
    const _ = item.trim().split('=');
    cookieMap[_[0]] = _[1];
  });
  return cookieMap;
};

/**
 * 生成hash值
 * @param hashLength
 */
const hashMap = new Map();
export const createHash = (hashLength: number): string => {
  // 默认长度 24
  let _hash = Array.from(Array(Number(hashLength) || 24), () =>
    Math.floor(Math.random() * 36).toString(36)
  ).join('');
  if (hashMap.has(_hash)) return createHash(hashLength);
  hashMap.set(_hash, '');
  return _hash;
};

/**
 * Find value in Array
 * @param arr Array
 * @param target targetValue
 * @param condition condition
 */
export const arrayFind = <T>(
  arr: T[],
  condition: (item: T) => boolean
): { index: number; value: T } => {
  if (!isFunction(condition))
    return {
      index: -1,
      value: null,
    };
  for (let i = 0, len = arr.length; i < len; i++) {
    if (condition(arr[i]))
      return {
        index: i,
        value: arr[i],
      };
  }
  return {
    index: -1,
    value: null,
  };
};

/**
 * 格式化时间戳
 * @param timestamp
 */
export const formatTimestamp = (timestamp: number): IDateRes => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const week = date.getDay();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return {
    year: year.toString(),
    month: month.toString(),
    day: day.toString(),
    week: week.toString(),
    hour: hour < 10 ? '0' + hour : '' + hour,
    minute: hour < 10 ? '0' + minute : '' + minute,
    second: second < 10 ? '0' + second : '' + second,
  };
};
