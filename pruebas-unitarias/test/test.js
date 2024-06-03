import { expect } from 'chai';

// Función para buscar un producto
function findProduct(products, name) {
  return products.find(product => product.name === name);
}

// Función para eliminar un producto
function deleteProduct(products, name) {
  const index = products.findIndex(product => product.name === name);
  if (index !== -1) {
    products.splice(index, 1);
  }
  return products;
}

// Función para agregar un producto
function addProduct(products, newProduct) {
  products.push(newProduct);
  return products;
}

// Función para registrar un producto (suponiendo que registrar es lo mismo que agregar)
function registerProduct(products, newProduct) {
  return addProduct(products, newProduct);
}

describe('Find Product Test', function() {
  it('should find the correct product', function() {
    const products = [
      { name: 'Vanilla Ice Cream', price: 2.5 },
      { name: 'Chocolate Ice Cream', price: 3.0 },
      { name: 'Strawberry Ice Cream', price: 3.0 }
    ];
    
    const product = findProduct(products, 'Chocolate Ice Cream');
    expect(product).to.not.be.undefined; // Verificar que el producto fue encontrado
    expect(product.name).to.equal('Chocolate Ice Cream'); // Verificar que el nombre del producto es correcto
  });
});

describe('Delete Product Test', function() {
  it('should delete the product', function() {
    let products = [
      { name: 'Vanilla Ice Cream', price: 2.5 },
      { name: 'Chocolate Ice Cream', price: 3.0 },
      { name: 'Strawberry Ice Cream', price: 3.0 }
    ];
    
    // Eliminar el producto
    products = deleteProduct(products, 'Chocolate Ice Cream');
    
    const product = findProduct(products, 'Chocolate Ice Cream');
    expect(product).to.be.undefined; // Verificar que el producto fue eliminado
    expect(products.length).to.equal(2); // Verificar que la lista de productos tiene 2 elementos
  });
});

describe('Add Product Test', function() {
  it('should add a new product', function() {
    let products = [
      { name: 'Vanilla Ice Cream', price: 2.5 },
      { name: 'Chocolate Ice Cream', price: 3.0 }
    ];
    
    const newProduct = { name: 'Strawberry Ice Cream', price: 3.0 };
    
    // Agregar el producto
    products = addProduct(products, newProduct);
    
    const product = findProduct(products, 'Strawberry Ice Cream');
    expect(product).to.not.be.undefined; // Verificar que el producto fue agregado
    expect(product.name).to.equal('Strawberry Ice Cream'); // Verificar que el nombre del producto es correcto
    expect(products.length).to.equal(3); // Verificar que la lista de productos tiene 3 elementos
  });
});

describe('Register Product Test', function() {
  it('should register a new product', function() {
    let products = [
      { name: 'Vanilla Ice Cream', price: 2.5 },
      { name: 'Chocolate Ice Cream', price: 3.0 }
    ];
    
    const newProduct = { name: 'Mint Ice Cream', price: 3.5 };
    
    // Registrar el producto
    products = registerProduct(products, newProduct);
    
    const product = findProduct(products, 'Mint Ice Cream');
    expect(product).to.not.be.undefined; // Verificar que el producto fue registrado
    expect(product.name).to.equal('Mint Ice Cream'); // Verificar que el nombre del producto es correcto
    expect(products.length).to.equal(3); // Verificar que la lista de productos tiene 3 elementos
  });
});
