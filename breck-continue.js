const products = [
    { name: 'samsung s7', price: 12000 },
    { name: 'hp laptop', price: 42000 },
    { name: 'apple smart watch', price: 1900 },
    { name: 'bosundara paper', price: 80 },
    { name: 'lg smart phone', price: 10000 },
    { name: 'analog phone', price: 120 }
]
// for (const product of products) {
//     if (product.price < 2000) {
//         break;
//     }
//     console.log(product);
// }

for (const product of products) {
    if (product.price < 90) {
        continue;
    }
    console.log(product);
}