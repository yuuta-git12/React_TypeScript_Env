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

// 引数の値を100円単位で切り上げる関数
const roundupPriceBy100 = (price: number): number =>  price + (100 - price%100)%100;


const calcu_test = () => {
    "use strict";

    console.log(roundupPriceBy100(22));
    console.log(roundupPriceBy100(1022));
    console.log(roundupPriceBy100(1001));
    console.log(roundupPriceBy100(11990));
    console.log(roundupPriceBy100(129999));
    console.log(roundupPriceBy100(128990));     
}

calcu_test();



