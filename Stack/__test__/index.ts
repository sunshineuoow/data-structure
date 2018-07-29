import ArrayStack from '../ArrayStack'

const stack = new ArrayStack<number>(10);

for (let i = 0; i < 7; i++) {
  stack.push(i);
  console.log(stack.toString())
}

stack.pop()
console.log(stack.toString())

console.log(stack.peek())