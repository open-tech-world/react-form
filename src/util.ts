function toPath(str: string) {
  return str.match(/(\w+)/g) || [];
}

function isNumber(str: string) {
  return !isNaN(Number(str));
}

type stateObject = {
  [key: string]: any;
};

function getIn(obj: stateObject, path: string) {
  const pathArr = toPath(path);
  let currentPath = obj;
  pathArr.forEach(item => {
    if (!currentPath) return;
    currentPath = currentPath[item];
  });
  return currentPath;
}

function setIn(obj: stateObject, path: string, value: any) {
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
}
