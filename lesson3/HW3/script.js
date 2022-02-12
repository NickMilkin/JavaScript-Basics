// Task 1

let arr = Array(100);

arr.fill(true);
arr[0] = false;
arr[1] = false;

for (let i = 2; i <= Math.sqrt(100); i++) {
    for (let j = 2; i * j <= 100; j++) {
        arr[i * j] = false;
    }
}

let x = 0;

while (x < 100) {
    if (arr[x] === true) console.log(x);
    x++;
}

// Task 2

let item1 = ['cup', 20, 2];
let item2 = ['plate', 40, 3];
let basket = Array();

basket.push(item1, item2);

function countBasketPrice(basket) {
    let totalSum = 0;
    for (let i = 0; i < basket.length; i++) {
        totalSum += basket[i][1] * basket[i][2];
    }
    return totalSum;
}

// Task 3

for (let i = 0; i < 10; i++, console.log(i - 1)) {}

// Task 4

let t = 1;

while (t <= 20) {
    console.log('x'.repeat(t));
    t++;
}
