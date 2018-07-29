import Queue from './Queue'

class LoopQueue<T> implements Queue<T> {
  private array: Array<T>
  private size: number
  private front: number
  private tail: number

  constructor(capacity: number) {
    this.array = new Array(capacity + 1);
    this.size = this.front = this.tail = 0;
  }

  private resize(newCapacity: number): void {
    const newArray = new Array(newCapacity + 1);
    for (let i = 0; i < this.size; i++)
      newArray[i] = this.array[(this.front + i) % this.array.length];
    this.array = newArray;
    this.front = 0;
    this.tail = this.size;
  }

  public enqueue(e: T): void {
    if ((this.tail + 1) % this.array.length == this.front)
      this.resize(this.getCapacity() * 2);

    this.array[this.tail] = e;
    this.tail = (this.tail + 1) % this.array.length;
    this.size++;
  }

  public dequeue(): T {
    const res = this.array[this.front];
    this.array[this.front] = null;
    this.front = (this.front + 1) % this.array.length;
    this.size--;

    if (this.size === this.getCapacity() / 4 && this.getCapacity() / 2 !== 0)
      this.resize(this.getCapacity() / 2);
    return res;
  }

  public getFront(): T {
    if (this.isEmpty())
      throw new Error("Cannot get from an empty queue.")

    return this.array[this.front];
  }

  public getCapacity(): number {
    return this.array.length - 1;
  }

  public getSize(): number {
    return this.size;
  }

  public isEmpty(): boolean {
    return this.size === 0;
  }
}