import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  

  static findProductsBelow(precioBase : number){
    const item = products.filter( x => x.price <  precioBase)
    return item
  }


}


class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];


  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }


  addProducts(...newProducts: Product[]) {
    this.products.push(...newProducts);
    // pista: push no suma muchos items (agrega de a uno)
  }
}


export { User, Product };
