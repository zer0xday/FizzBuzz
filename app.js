var arr = [];
for(let i = 1; i <= 100; i++) {
    arr.push(i);
};

const getNumber = (array, number, string) => {
    for(let i = number - 1; i < array.length; i+=number) {
        array.splice(i, 1, string);
    }
    return array;
};

const threes = getNumber(arr, 3, 'fizz');
const fives = getNumber(arr, 5, 'buzz');
const both = getNumber(arr, 3*5, 'fizzbuzz');

console.log(both.join(' '));
