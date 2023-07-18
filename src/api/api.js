import axios from "axios";

const instance = axios.create({
  baseURL: "/api/",
});

export const productsAPI = {
  getProducts(value) {
    return instance
      .get("all")
      .then((response) => response.data)
      .then((data) => {
        return data.filter((product) => {
          return (
            value &&
            product &&
            product &&
            product.title &&
            product.title.toLowerCase().includes(value.toLowerCase())
          );
        });
      });
  },
};
