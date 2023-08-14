import Product from "./Product/Product";
import React, { useEffect, useState } from "react";
import s from "./Catalog.module.css";
import Paginator from "../../Common/Paginator/Paginator";

export default function Catalog({ onAdd }) {
  const [pageState, setPageState] = useState({
    isLoading: false,
    data: [],
    total: 0,
    page: 1,
    pageSize: 4,
  });

  useEffect(() => {
    const fetchData = async () => {
      setPageState((old) => ({ ...old, isLoading: true }));
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
    };
    fetchData();
  }, [pageState.page, pageState.pageSize]);

  const onPageChanged = (pageNumber) => {
    setPageState((old) => ({
      ...old,
      page: pageNumber,
    }));
  };
  console.log(pageState.data);
  return (
    <div>
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
