import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};
$authHost.interceptors.request.use(authInterceptor);

export const productsAPI = {
  getFilteredItems(value) {
    if (value)
      return $host
        .get("/api/product")
        .then((response) => response.data)
        .then((data) => {
          console.log(data);
          return data.rows.filter((product) => {
            return (
              product &&
              product.name &&
              product.name.toLowerCase().includes(value.toLowerCase())
            );
          });
        });
  }, //will try to fix soon
  getAllItems() {
    return $host.get("/api/product").then((response) => response.data);
  },
};

export { $host, $authHost };
