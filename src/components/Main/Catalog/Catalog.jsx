import Product from "./Product/Product";
import React, { useEffect, useState } from "react";
import s from "./Catalog.module.css";
import Paginator from "../../Common/Paginator/Paginator";
import { NavLink } from "react-router-dom";

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
    pageSize: 10,
  });

  useEffect(() => {
    const fetchData = async () => {
      setPageState((old) => ({ ...old, isLoading: true }));
      const response = await fetch(
        `/api/clothes?page=${pageState.page}&limit=${pageState.pageSize}`
      );
      const json = await response.json();

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
    setPageState((old) => ({
      ...old,
      page: pageNumber,
    }));
  };

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
