/* eslint-disable @typescript-eslint/ban-ts-ignore */
export function toPath(str: string): Array<unknown> {
  return str.match(/(\w+)/g) || [];
}

export function isNumber(str: string): boolean {
  return !isNaN(Number(str));
}

export type objectType = {
  [key: string]: unknown;
};

export function getIn(obj: objectType, path: string): any {
  const pathArr = toPath(path);
  let currentPath = obj;
  pathArr.forEach((item) => {
    if (!currentPath) return;
    currentPath = currentPath[item as string] as objectType;
  });
  return currentPath;
}

export function setIn(obj: objectType, path: string, value: unknown): objectType {
  const pathArr = toPath(path);
  let currentPath = obj;
  pathArr.forEach((item, index) => {
    if (index === pathArr.length - 1) {
      currentPath[item as string] = value;
      return;
    }
    if (!currentPath[item as string]) {
      currentPath[item as string] = isNumber(pathArr[index + 1] as string) ? [] : {};
    }
    currentPath = currentPath[item as string] as objectType;
  });

  return { ...obj };
}

export function deepClone(obj: unknown): unknown {
  if (typeof obj !== 'object' || obj === null || obj instanceof Date) {
    return obj;
  }

  const outObj = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    // @ts-ignore
    const value = obj[key];
    // @ts-ignore
    outObj[key] = deepClone(value);
  }

  return outObj;
}
