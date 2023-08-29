

const array = [1, 3, 4]
console.log(1, 2, ...[1, 3, 4]) // 1, 3, 4

function sum(a, b, ...array: number[]) {
  let sume = 0;
array.forEach((item) => {
  sume = sume+item;
})
return sume;
};

console.log(sum(1, 2, 3, 654, 76, 23))


const arrayOne = [1, 4, 6, 7]
const arrayTwo = [14, 6, 9, 3]
const arrayThree = [9, 9, 10]

function getName(name: string): void {
  console.log(name)
}

getName('123')