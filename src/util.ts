export function toPath(str: string) {
  return str.match(/(\w+)/g) || [];
}

export function isNumber(str: string) {
  return !isNaN(Number(str));
}

export type stateObject = {
  [key: string]: any;
};

export function getIn(obj: stateObject, path: string): any {
  const pathArr = toPath(path);
  let currentPath = obj;
  pathArr.forEach(item => {
    if (!currentPath) return;
    currentPath = currentPath[item];
  });
  return currentPath;
}

export function setIn(obj: stateObject, path: string, value: any) {
  const pathArr = toPath(path);
  let currentPath = obj;
  pathArr.forEach((item, index) => {
    if (index === pathArr.length - 1) {
      currentPath[item] = value;
      return;
    }
    if (!currentPath[item]) {
      currentPath[item] = isNumber(pathArr[index + 1]) ? [] : {};
    }
    currentPath = currentPath[item];
  });

  return { ...obj };
}
