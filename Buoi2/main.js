function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

const products = [
  new Product(1, 'iPhone 15 Pro', 35000000, 10, 'Electronics', true),
  new Product(2, 'Samsung Galaxy S24', 32000000, 5, 'Electronics', true),
  new Product(3, 'Laptop Dell XPS', 45000000, 3, 'Electronics', true),
  new Product(4, 'Wireless Headphones', 8000000, 15, 'Accessories', true),
  new Product(5, 'Phone Screen Protector', 500000, 0, 'Accessories', true),
  new Product(6, 'USB-C Cable', 200000, 20, 'Accessories', false),
];

console.log('Câu 1 & 2');
console.log(products);


//Câu 3
const productNamePrice = products.map(product => ({
  name: product.name,
  price: product.price
}));

console.log('Câu 3');
console.log(productNamePrice);


//Câu 4
const productsInStock = products.filter(product => product.quantity > 0);

console.log('Câu 4');
console.log(productsInStock);


//Câu 5
const hasExpensiveProduct = products.find(product => product.price > 30000000);

console.log('Câu 5');
console.log(
  hasExpensiveProduct
    ? 'Có: ' + hasExpensiveProduct.name
    : 'Không'
);


//Câu 6
const allAccessoriesAvailable = products
  .filter(product => product.category === 'Accessories')
  .every(product => product.isAvailable);

console.log('Câu 6');
console.log(allAccessoriesAvailable ? 'Có' : 'Không');


//Câu 7
const totalInventoryValue = products.reduce((total, product) => {
  return total + (product.price * product.quantity);
}, 0);

console.log('Câu 7');
console.log(`Tổng giá trị: ${totalInventoryValue.toLocaleString('vi-VN')} VND`);


//Câu 8
console.log('Câu 8');
for (const product of products) {
  const status = product.isAvailable ? 'Đang bán' : 'Ngừng bán';
  console.log(`${product.name} - ${product.category} - ${status}`);
}

// Câu 9
console.log('Câu 9');
const firstProduct = products[0];
for (const key in firstProduct) {
  console.log(`${key}: ${firstProduct[key]}`);
}


//Câu 10
const availableInStockProducts = products
  .filter(product => product.isAvailable && product.quantity > 0)
  .map(product => product.name);

console.log('Câu 10');
console.log(availableInStockProducts);
