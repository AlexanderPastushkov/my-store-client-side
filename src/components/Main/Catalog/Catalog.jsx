import Product from "./Product/Product";
import React, { useEffect, useState } from "react";
import s from "./Catalog.module.css";
import Paginator from "../../Common/Paginator/Paginator";
import { BrandBar } from "../BrandBar/BrandBar";
import { useParams } from "react-router-dom";

export default function Catalog({ onAdd }) {
  const [pageState, setPageState] = useState({
    isLoading: false,
    data: [],
    total: 0,
    page: 1,
    pageSize: 2,
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setPageState((old) => ({ ...old, isLoading: true }));
      if (id) {
        const response = await fetch(
          `/api/product?page=${pageState.page}&limit=${pageState.pageSize}&brandId=${id}`
        );
        const json = await response.json();
        setPageState((old) => ({
          ...old,
          isLoading: false,
          data: json.rows,
          total: json.count,
        }));
      } else {
        const response = await fetch(
          `/api/product?page=${pageState.page}&limit=${pageState.pageSize}`
        );
        const json = await response.json();
        setPageState((old) => ({
          ...old,
          isLoading: false,
          data: json.rows,
          total: json.count,
        }));
      }
    };
    fetchData();
  }, [pageState.page, pageState.pageSize, id]);

  const onPageChanged = (pageNumber) => {
    setPageState((old) => ({
      ...old,
      page: pageNumber,
    }));
  };

  return (
    <div>
      <div className={s.typesColumn}></div>
      <BrandBar />
      <div className={s.products}>
        {pageState.data.map((product) => {
          return (
            <div key={product.id}>
              <Product onAdd={onAdd} product={product} />
            </div>
          );
        })}
      </div>
      <Paginator
        pageSize={pageState.pageSize}
        currentPage={pageState.page}
        isLoading={pageState.isLoading}
        onPageChanged={onPageChanged}
        totalItemsCount={pageState.total}
      />
    </div>
  );
}
