const animals = ['Cat', 'Dog', 'Elephant'];

animals.forEach((animal) => {
    console.log(animal);
});


const wild = ['lion', 'Tiger', 'giraffe'];

wild.forEach((wildanimal) => {
    console.log(wildanimal);
} )


//name.foreach((newname for example i or x) => {console.log(newname)})
const items = [
    { name: "Bike", price: 10000000000 },
    { name: "TV", price: 30000000000000 }
];

items.forEach((item) => {
    console.log(`Item: ${item.name}, Price: ${item.price}`);
});



const names = items.map((item)=>console.log(item.name))
const raw_prices = [22.4555,77.899,34.666]