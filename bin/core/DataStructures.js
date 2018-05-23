var Stack = /** @class */ (function () {
    function Stack() {
    }
    Stack.prototype.push = function (item) {
        return this._list.push(item);
    };
    Stack.prototype.pop = function () {
        return this._list.pop();
    };
    Stack.prototype.size = function () {
        return this._list.length;
    };
    Stack.prototype.clear = function () {
        this._list.length = 0;
    };
    Stack.prototype.top = function () {
        var el = this._list.pop();
        this._list.push(el);
        return el;
    };
    return Stack;
}());
export { Stack };
var Queue = /** @class */ (function () {
    function Queue() {
    }
    Queue.prototype.enqueue = function (item) {
        return this._list.push(item);
    };
    Queue.prototype.dequeue = function () {
        var el = this._list.reverse().pop();
        this._list.reverse();
        return el;
    };
    Queue.prototype.front = function () {
        var el = this._list.reverse().pop();
        this._list.push(el);
        this._list.reverse();
        return el;
    };
    Queue.prototype.back = function () {
        var el = this._list.pop();
        this._list.push(el);
        return el;
    };
    Queue.prototype.size = function () {
        return this._list.length;
    };
    Queue.prototype.clear = function () {
        this._list.length = 0;
    };
    return Queue;
}());
export { Queue };
var Node = /** @class */ (function () {
    function Node() {
    }
    Node.prototype.data = function () {
        return this._data;
    };
    Node.prototype.next = function () {
        return this._next;
    };
    Node.prototype.prev = function () {
        this._prev;
    };
    Node.prototype.setNext = function (next) {
        this._next = next;
    };
    Node.prototype.setPrev = function (prev) {
        this._prev = prev;
    };
    return Node;
}());
export { Node };
