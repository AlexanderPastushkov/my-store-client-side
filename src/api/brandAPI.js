import { $host } from "./api";

export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};
