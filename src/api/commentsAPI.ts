import { $authHost, $host } from "./api";

export const createComment = async (
  title: string,
  description: string,
  productID: number
) => {
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
export const getCommentsForProduct = async (id: number) => {
  const { data } = await $host.get(`api/reviews/${id}`);
  console.log(data);
  return data;
};
