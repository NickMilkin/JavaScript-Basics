// Task 1

function numToObj(num) {
    objNum.init(num);
    return objNum;
}

const objNum = {

    ['единицы']: 0,
    ['десятки']: 0,
    ['сотни']: 0,

    init(num){
        this.сотни = Math.floor(num / 100);
        num %= 100;
        this.десятки = Math.floor(num / 10);
        num %= 10;
        this.единицы = num;
    }
}

let userNum = parseInt(prompt());
if (userNum > 999) {console.log('плохое число', objNum)};

console.log(numToObj(userNum));

// Task 2

const item1 = {
    name: 'cup',
    price: 20,
    quantity: 2
}

const item2 = {
    name: 'plate',
    price: 40,
    quantity: 4
}

const basket = {
    contents: [],

    addToBasket(item) {
        this.contents.push(item);
    },

    calculateTotal() {
        let total = 0
        for (let i = 0; i < this.contents.length; i++) {
            total += this.contents[i].price * this.contents[i].quantity;
        }
        return total;
    }
}

basket.addToBasket(item1);
basket.addToBasket(item2);
console.log(basket.calculateTotal())
