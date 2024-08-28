const message: string = "Hello,world!";

console.log(message);

const greeting: string = "Hello,";
const target: string = "world!";
console.log(greeting + target);
console.log(greeting + greeting);

// 好まれない書き方
const firts_name: number = 123, family_name: string = "Yamada";
console.log(firts_name + family_name);

// letは再代入が可能 constは定数なので再代入が不可能
let middle_name: string;
const third_name: string = "tiger";
middle_name  = "doragon";
console.log(middle_name + third_name);
middle_name = "ryu";
// third_name = "tora";
