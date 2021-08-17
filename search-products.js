const products = [
    { name: 'samsung s7', price: 12000 },
    { name: 'hp laptop', price: 42000 },
    { name: 'apple smart watch', price: 12000 },
    { name: 'bosundara paper', price: 80 },
    { name: 'lg smart phone', price: 10000 },
    { name: 'analog phone', price: 120 }
]
function searchProducts(products, searchText) {
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) != -1) {
            matched.push(product.name);
        }
    }
    return matched;
}
const matched = searchProducts(products, 'laptop');
console.log(matched);