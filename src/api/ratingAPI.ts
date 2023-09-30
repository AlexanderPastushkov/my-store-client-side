import { $authHost, $host } from "./api";

export const createRating = async (rate: number, productID: number) => {
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
export const getRatingForProduct = async (id: number) => {
  const { data } = await $host.get(`api/rating/${id}`);
  console.log(data);
  return data;
};
