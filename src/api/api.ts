import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};
$authHost.interceptors.request.use(authInterceptor);

export const productsAPI = {
  getFilteredItems(value: string) {
    if (value)
      return $host
        .get(`/api/product?name=${value}`)
        .then((response) => response.data)
        .then((data) => data);
  },
  getAllItems() {
    return $host.get("/api/product").then((response) => response.data);
  },
  getAllBrands() {
    return $host.get("/api/brand").then((response) => response.data);
  },
};

export { $host, $authHost };
