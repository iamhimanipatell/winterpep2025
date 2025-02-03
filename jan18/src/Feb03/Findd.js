


const items = [
    { name: "Bike", price: 10000000000 },
    { name: "TV", price: 30000000000000 }
];

items.forEach((item) => {
    console.log(`Item: ${item.name}, Price: ${item.price}`);
});

const discountItem = items.find((item)=>item.price<100000000000)
console.log(discountItem);

console.log(`==========================================`)

console.log(`==========================================`)

console.log(`==========================================`)


const house = [
    { furniture: "Sofa", price: 50000 },
    { furniture: "Bed", price: 30000 },
    { furniture: "Dining Table", price: 28000 }
];

house.forEach((item) => {
    console.log(`${item.furniture} = ${item.price}`);
});

