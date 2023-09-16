export type ProductsType = {
  id: number;
  name: string;
  price: number;
  count: number;
  priceTotal: number;
  brandId: number;
  typeId: number;
  info: Array<string>;
  rating: number;
  img: string;
};

export type BrandsType = {
  id: number;
  name: string;
};
