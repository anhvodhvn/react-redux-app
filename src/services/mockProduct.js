import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const products = [
  {
    id: "1",
    title: "IBM Thinkpad T60",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "anhvodhvn",
    length: "5:08",
    category: "Laptop"
  },
  {
    id: "2",
    title: "Sony Vaio",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "anhvodhvn",
    length: "3:10",
    category: "Laptop"
  },
  {
    id: "3",
    title: "Dell Lattitude",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    authorId: "anhvodhvn",
    length: "2:52",
    category: "Laptop"
  },
  {
    id: "4",
    title: "MacBook Pro",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    authorId: "anhvodhvn",
    length: "2:30",
    category: "Laptop"
  },
  {
    id: "5",
    title: "Desktop Core I7",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "anhvodhvn",
    length: "5:10",
    category: "Desktop"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (product) => {
  return replaceAll(product.title, ' ', '-');
};

class ProductApi {
  static getAllProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], products));
      }, delay);
    });
  }

  static saveProduct(product) {
    product = Object.assign({}, product); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minProductTitleLength = 1;
        if (product.title.length < minProductTitleLength) {
          reject(`Title must be at least ${minProductTitleLength} characters.`);
        }

        if (product.id) {
          const existingProductIndex = product.findIndex(a => a.id == product.id);
          products.splice(existingProductIndex, 1, product);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new products in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          product.id = generateId(product);
          product.watchHref = `http://www.pluralsight.com/products/${product.id}`;
          products.push(product);
        }

        resolve(product);
      }, delay);
    });
  }

  static deleteProduct(productId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfProductToDelete = products.findIndex(product => {
            product.id == productId;
        });
        products.splice(indexOfProductToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ProductApi;
