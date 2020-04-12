import { deepClone } from '../src/util';

describe('cloning', () => {
  test('deep cloning', () => {
    let obj = undefined;
    expect(deepClone(obj)).toEqual(undefined);
    obj = null;
    expect(deepClone(obj)).toEqual(null);
    obj = 1;
    expect(deepClone(obj)).toEqual(1);
    obj = '';
    expect(deepClone(obj)).toEqual('');
    obj = 'abc';
    expect(deepClone(obj)).toEqual('abc');
    obj = NaN;
    expect(deepClone(obj)).toEqual(NaN);
    obj = true;
    expect(deepClone(obj)).toEqual(true);
    obj = 9007199254740992n;
    expect(deepClone(obj)).toEqual(9007199254740992n);
    obj = new Date();
    expect(deepClone(obj)).toEqual(obj);
    obj = [];
    expect(deepClone(obj)).toEqual([]);
    obj = [1, '', undefined, null, ['abc'], {}];
    expect(deepClone(obj)).toEqual([1, '', undefined, null, ['abc'], {}]);
    expect(deepClone(obj)[4]).not.toBe(obj[4]);
    obj = {};
    expect(deepClone(obj)).toEqual({});
    expect(deepClone(obj)).not.toBe(obj);
    obj = { car: ['Car1'] };
    expect(deepClone(obj)).toEqual(obj);
    expect(deepClone(obj).car).not.toBe(obj.car);
    obj = { person: { firstName: 'Jhon', age: 45 } };
    expect(deepClone(obj)).toEqual(obj);
    expect(deepClone(obj).person).not.toBe(obj.person);
  });
});
