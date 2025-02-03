let number = [1, 2, 3, 4];

number.forEach((item, index) => {
    number[index] = index * 2;  // Corrected usage of index
});

console.log(number);

let prices = [30, 40, 555, 1];
let filtered_prices = prices.filter((price) => price > 100);

console.log(filtered_prices);  // Corrected variable name
