class MyArray<T> {
  private size:number;
  private data: Array<T>;

  constructor(capacity) {
    this.data = new Array(capacity);
    this.size = 0;
  }

  // 重置数组大小
  private resize(length: number): void {
    const res = new Array(length);

    for (let i = 0; i < this.size; i++)
      res[i] = this.data[i]

    this.data = res;
  }

  // 添加元素
  public add(index: number, e: T):void {
    if (index < 0 || index > this.size)
      throw new Error("Add failed. IndexOutOfBound.");
    
    if (this.size === this.data.length)
      this.resize(2 * this.data.length);

    for (let i = this.size; i > index; i--)
      this.data[i] = this.data[i - 1];

    this.data[index] = e;
    this.size++;
  }

  // 在数组头部添加元素
  public addFirst(e: T): void {
    this.add(0, e);
  }

  // 在数组尾部添加元素
  public addLast(e: T): void {
    this.add(this.size, e);
  }

  // 删除元素
  public remove(index:number): T {
    if (index < 0 || index > this.size)
      throw new Error("Remove failded. IndexOutOfBound.");

    const res: T = this.data[index];

    for (let i = index + 1; i < this.size; i++)
      this.data[i - 1] = this.data[i];

    this.data[this.size--] = null;

    if (this.size < this.data.length / 4)
      this.resize(this.data.length / 2);

    return res;
  }

  // 删除第一个元素
  public removeFirst(): T {
    return this.remove(0);
  }

  // 删除最后一个元素
  public removeLast(): T {
    return this.remove(this.size - 1);
  }

  // 删除某个元素
  public removeEle(e: T): void {
    const index: number = this.find(e);
    if (index !== -1)
      this.remove(index);
  }

  // 修改某个索引的元素值
  public set(index:number, e: T): void {
    if (index < 0 || index > this.size)
      throw new Error("Set failed. IndexOutOfBound.")

    this.data[index] = e;
  }

  // 获取索引对应元素
  public get(index: number): T {
    if (index < 0 || index > this.size)
      throw new Error("Get failed. IndexOutOfBound.");

    return this.data[index];
  }

  // 查找元素对应索引
  public find(e: T):  number {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] == e)
        return i;
    }
    return -1;
  }

  // 数组是否包含该元素
  public contains(e: T): boolean {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] == e)
        return true
    }
    return false
  }

  // 获取数组内元素个数
  public getSize(): number {
    return this.size;
  }

  // 获取数组长度
  public getCapacity(): number {
    return this.data.length;
  }

  // 数组是否为空
  public isEmpty(): boolean {
    return this.size === 0;
  }

  public toString(): string {
    return `Array size is ${this.size} capacity is ${this.data.length} \n ${this.data.toString()}`
  }
}

export default MyArray