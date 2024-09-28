export class MyCircularDeque {
  private queue: number[];
  private size: number;
  constructor(k: number) {
    this.queue = [];
    this.size = k;
  }

  insertFront(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    this.queue.unshift(value);
    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    this.queue.push(value);
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.queue.shift();
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.queue.pop();
    return true;
  }

  getFront(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue[0];
  }

  getRear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue[this.queue.length - 1];
  }

  isEmpty(): boolean {
    if (this.queue.length == 0) {
      return true;
    }
    return false;
  }

  isFull(): boolean {
    if (this.queue.length == this.size) {
      return true;
    }
    return false;
  }
}
