// Task 1
/*
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3
- операторы post-increment и pre-increment увеличивают переменную на 1 и сохраняют ее, но в момент присваивания ++а
дает увеличенное значение а, а а++ изначальное значение а. После каждого инкремента переменная увеличиается на один
(поэтому в конце обе = 3). В момент сложения с 2 ++а и а++ так же передают соответсвенно увеличенное и изначальное
значение.
*/

// Task 2

// var a = 2;
// var x = 1 + (a *= 2);
// х = 5 (1 + 2 * 2)

// Task 3

let a = -1, b = -4;

if (a >= 0 && b >= 0) console.log(a - b);
else if (a <= 0 && b <= 0) console.log(b * a);
else console.log(a + b);

// Task 4

a = 2;

switch (a) {
    case 0:
        for (let i = 0; i < 16; i++) console.log(i);
        break;
    case 1:
        for (let i = 1; i < 16; i++) console.log(i);
        break;
    case 2:
        for (let i = 2; i < 16; i++) console.log(i);
        break;
    case 3:
        for (let i = 3; i < 16; i++) console.log(i);
        break;
    case 4:
        for (let i = 4; i < 16; i++) console.log(i);
        break;
    case 5:
        for (let i = 5; i < 16; i++) console.log(i);
        break;
    case 6:
        for (let i = 6; i < 16; i++) console.log(i);
        break;
    case 7:
        for (let i = 7; i < 16; i++) console.log(i);
        break;
    case 8:
        for (let i = 8; i < 16; i++) console.log(i);
        break;
    case 9:
        for (let i = 9; i < 16; i++) console.log(i);
        break;
    case 10:
        for (let i = 10; i < 16; i++) console.log(i);
        break;
    case 11:
        for (let i = 11; i < 16; i++) console.log(i);
        break;
    case 12:
        for (let i = 12; i < 16; i++) console.log(i);
        break;
    case 13:
        for (let i = 13; i < 16; i++) console.log(i);
        break;
    case 14:
        for (let i = 14; i < 16; i++) console.log(i);
        break;
    default: break;
}

// Task 5

function addNums(n1, n2) {
    return n1 + n2;
}

function subNums(n1, n2) {
    return n1 - n2;
}

function mulNums(n1, n2) {
    return n1 * n2;
}

function divNums(n1, n2) {
    return n1 / n2;
}

// Task 6

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+': return addNums(arg1, arg2);
        case '-': return subNums(arg1, arg2);
        case '*': return mulNums(arg1, arg2);
        case '/': return divNums(arg1, arg2);
        default: return 'Error';
    }
}

// Task 7

// null не равен 0, но равен undefined в js, потому что оператор равенства приводит значение null к undefined, хотя
// в операциях сравнения (<, >, <=, >=) null будет приведет к 0

// Task 8

function recursivePow(val, pow) {
    if (pow == 0) return 1;
    else return val * recursivePow(val, pow - 1);
}
