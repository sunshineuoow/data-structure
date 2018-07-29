import Queue from './Queue'
import MyArray from '../Array/Array'

class ArrayQueue<T> implements Queue<T> {
  
  private array: MyArray<T>

  constructor(capacity: number) {
    this.array = new MyArray(capacity);
  }

  public enqueue(e: T): void {
    this.array.addLast(e);
  }

  public dequeue(): T {
    return this.array.removeFirst();
  }

  public getFront(): T {
    return this.array.get(0);
  }

  public getSize(): number {
    return this.array.getSize();
  }

  public isEmpty(): boolean {
    return this.array.isEmpty();
  }

  public toString(): string {
    let str = 'Queue: front [';
    for (let i = 0; i < this.array.getSize(); i++) {
      str += this.array.get(i);
      if (i !== this.array.getSize() - 1)
        str += ', '
    }
    str += '] tail'
    return str
  }
}

export default ArrayQueue