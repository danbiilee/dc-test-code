const Stack = require('../stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.size()).toBe(0);
  });

  it('allows to push item', () => {
    stack.push('haha');
    expect(stack.size()).toBe(1);
  });

  describe('pop', () => {
    it('throws an error if stack is empty', () => {
      expect(() => stack.pop()).toThrow('Stack is empty');
    });

    it('returns the last pushed item and remove it from the stack', () => {
      stack.push('haha');
      stack.push('hoho');

      expect(stack.pop()).toBe('hoho');
      expect(stack.size()).toBe(1);
    });
  });

  describe('peek', () => {
    it('throws an error if stack is empty', () => {
      expect(() => stack.peek()).toThrow('Stack is empty');
    });

    it('returns the last pushed item but keeps it in the stack', () => {
      stack.push('haha');
      stack.push('hoho');

      expect(stack.peek()).toBe('hoho');
      expect(stack.size()).toBe(2);
    });
  });
});
