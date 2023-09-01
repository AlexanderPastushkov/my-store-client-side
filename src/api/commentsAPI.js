import { $authHost, $host } from "./api.js";

export const createComment = async (title) => {
  const { data } = await $host.post("api/comments", {
    title,
  });
  localStorage.setItem("comment", data.title);
  return data.title;
};
export const getComments = async () => {
  const { data } = await $host.get("api/comments");
  console.log(data);
  return data;
};
