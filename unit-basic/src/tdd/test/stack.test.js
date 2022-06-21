const Stack = require('../stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('add', () => {
    stack.add(1);
    stack.add(2);

    expect(stack.get()).toEqual([1, 2]);
  });

  it('remove', () => {
    stack.add(1);
    stack.add(2);
    stack.remove();

    expect(stack.get()).toEqual([1]);
  });
});
