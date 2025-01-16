function calculateDiscount(price, discount = 10) {
    let discountAmount = (discount / 100) * price;
    let finalPrice = price - discountAmount;
    return finalPrice;
}

console.log(calculateDiscount(300)); 
console.log(calculateDiscount(300, 20));  
