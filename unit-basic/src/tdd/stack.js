class Stack {
  constructor() {
    this.store = [];
  }

  get() {
    return this.store;
  }

  add(item) {
    this.store.push(item);
  }

  remove() {
    this.store.pop();
  }
}

module.exports = Stack;
