import { $authHost, $host } from "./api.js";

export const createComment = async (title, description, productID) => {
  const { data } = await $authHost.post("api/reviews", {
    title,
    description,
    productID,
  });

  return data;
};
export const getComments = async () => {
  const { data } = await $host.get("api/reviews");
  console.log(data);
  return data;
};
export const getCommentsForProduct = async (id) => {
  const { data } = await $host.get(`api/reviews/${id}`);
  console.log(data);
  return data;
};
