const check = require('../check.js');

describe('check', () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    // mock 함수 생성 -> 할당
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it('should call onSuccess when predicate is true', () => {
    check(() => true, onSuccess, onFail);

    // onSuccess mock 함수가 호출된 횟수는 1번이어야 한다.
    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);

    // mock 함수와 함께 호출되어야 하는 인자는 yes 여야 한다.
    // expect(onSuccess.mock.calls[0][0]).toBe('yes'); // calls의 첫번째로 호출된 함수의 첫번째 인자
    expect(onSuccess).toHaveBeenCalledWith('yes');

    // onFail mock 함수가 호출된 횟수는 0번이어야 한다.
    // expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it('should call onFail when predicate is false', () => {
    check(() => false, onSuccess, onFail);

    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith('no');
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
