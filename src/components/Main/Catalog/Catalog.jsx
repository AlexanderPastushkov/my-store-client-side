import Product from "./Product/Product";
import React, { useEffect, useState } from "react";
import s from "./Catalog.module.css";
import Paginator from "../../Common/Paginator/Paginator";

export default function Catalog({ onAdd }) {
  // const [backendData, setBackendData] = useState([]);
  // useEffect(() => {
  //   fetch("/api/all")
  //     .then((response) => response.json())
  //     .then((data) => setBackendData(data));
  // }, []);

  const [pageState, setPageState] = useState({
    isLoading: false,
    data: [],
    total: 0,
    page: 1,
    pageSize: 5,
  });

  useEffect(() => {
    const fetchData = async () => {
      setPageState((old) => ({ ...old, isLoading: true }));
      const response = await fetch(
        `/api/clothes?page=${pageState.page}&limit=${pageState.pageSize}`
      );
      const json = await response.json();
      console.log(json);
      setPageState((old) => ({
        ...old,
        isLoading: false,
        data: json.data,
        total: json.total,
      }));
    };
    fetchData();
  }, [pageState.page, pageState.pageSize]);

  const onPageChanged = (pageNumber) => {
    const fetchData = async () => {
      setPageState((old) => ({ ...old, isLoading: true }));
      const response = await fetch(
        `/api/clothes?page=${pageNumber}&limit=${pageState.pageSize}`
      );
      const json = await response.json();
      console.log(json);
      setPageState((old) => ({
        ...old,
        isLoading: false,
        data: json.data,
        total: json.total,
      }));
    };
    fetchData();
  };
  return (
    <div className={s.products}>
      <Paginator
        pageSize={pageState.pageSize}
        currentPage={pageState.page}
        isLoading={pageState.isLoading}
        onPageChanged={onPageChanged}
        totalItemsCount={pageState.total}
      />
      {pageState.data.map((product) => {
        return (
          <div>
            <Product key={product.id} onAdd={onAdd} product={product} />
          </div>
        );
      })}
    </div>
  );
}
