import { $authHost, $host } from "./api.js";

export const createRating = async (rate, productID) => {
  const { data } = await $authHost.post("api/rating", {
    rate,
    productID,
  });

  return data;
};
export const getRatings = async () => {
  const { data } = await $host.get("api/rating");
  console.log(data);
  return data;
};
export const getRatingForProduct = async (id) => {
  const { data } = await $host.get(`api/rating/${id}`);
  console.log(data);
  return data;
};
