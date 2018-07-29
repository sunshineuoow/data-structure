import MyArray from '../Array/Array'
import Stack from './Stack'

class ArrayStack<T> implements Stack<T> {
  private array: MyArray<T>

  constructor(capacity: number) {
    this.array = new MyArray(capacity);
  }

  public push(e: T): void {
    this.array.addLast(e);
  }

  public pop(): T {
    return this.array.removeLast();
  }

  public peek(): T {
    return this.array.get(this.array.getSize() - 1);
  }

  public getSize(): number {
    return this.array.getSize();
  }

  public isEmpty(): boolean {
    return this.array.isEmpty();
  }

  public toString(): string {
    let str = 'Stack: [';
    for (let i = 0; i < this.array.getSize(); i++) {
      str += i;
      if (i !== this.array.getSize() - 1)
        str += ',';
    }
    str += '] top';
    return str;
  }
}

export default ArrayStack