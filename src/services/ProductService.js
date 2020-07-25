// import products from "../products.json";
import { store } from "store";

export default class ProductService {
  static getProducts() {
    return store.getState().productsObj.products;
  }

  static getProductsByFilter({ name, category, manufacture, featured }) {
    let { products: results } = store.getState().productsObj;
    if (results.length > 0) {
      if (name && name.length) {
        const searchText = name.toLowerCase();
        results = results.filter((p) =>
          p.name.toLowerCase().includes(searchText)
        );
      }

      if (category) {
        results = results.filter((p) => p.category === category);
      }

      if (manufacture) {
        results = results.filter((p) => p.manufacture === manufacture);
      }

      if (featured) {
        results = results.filter((p) => p.featured === featured);
      }
    }
    return results;
  }

  static getManufactures() {
    const { products } = store.getState().productsObj;
    return [...new Set(products.map((p) => p.manufacture))];
  }
}
