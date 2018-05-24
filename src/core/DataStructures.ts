export class Stack<T> {
  _list:T[];

  push(item: T):number {
    return this._list.push(item);
  }

  pop() {
    return this._list.pop();
  }

  size() {
    return this._list.length;
  }

  clear() {
    this._list.length = 0;
  }

  top<T>() {
    const el = this._list.pop();
    this._list.push(el);
    return el;
  }
}

export class Queue<T> {
  _list: T[];
  enqueue(item: T):number {
    return this._list.push(item);
  }

  dequeue() {
    const el = this._list.reverse().pop();
    this._list.reverse();
    return el;
  }

  front() {
    const el = this._list.reverse().pop();
    this._list.push(el);
    this._list.reverse();
    return el;
  }

  back() {
    const el = this._list.pop();
    this._list.push(el);
    return el;
  }

  size() {
    return this._list.length;
  }

  clear() {
    this._list.length = 0;
  }
}

export class Node<T> {
  _data: T;
  _next:Node<T>
  _prev:Node<T>

  constructor(data:T) {
    this._data = data;
  }

  data<T>() {
    return this._data;
  }

  next() {
    return this._next;
  }

  prev() {
    this._prev;
  }

  setNext(next:Node<T>) {
    this._next = next;
  }

  setPrev(prev:Node<T>) {
    this._prev = prev;
  }

  setData(data:T) {
    this._data = data;
  }
}