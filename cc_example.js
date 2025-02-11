//Task 1
let products = [
    {name: "Laptop", price:1200, category:"Electronics"},
    {name: "Phone", price:800, category:"Electronics"},
    {name: "Desk Chair", price:150, category:"Furniture"},
];

// function getProductsByCategory (products_array,category_name );{
//     return products_array.filter(product =>product.category === category_name);

// }

// console.log (getProductsByCategory(products, "Electronics"));

//Task 2

function applyDiscount (products, discountrate) {
    return products.map(product =>({
        ...product,
        price: product.price - (product.price * discountRate)
    }
    ))
}
console.log(applyDiscount(products,.1));
console.log("*".repeat(20))
console.log(products)