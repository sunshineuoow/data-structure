interface Queue<T> {

  getSize: () => number;

  isEmpty: () => boolean;

  enqueue: (e: T) => void;

  dequeue: () => T;

  getFront: () => T;
}

export default Queue