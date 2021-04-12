import React, { useState, useEffect } from "react";
import SPPagination from "../common/pagination";

// const { Search } = Input;

export default function usePaginationAsync({
  apiService,
  pageSizeDefault = 10,
}) {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    page: 0,
    size: pageSizeDefault,
    total: 0,
  });
  const [filters, setFilters] = useState({
    page: 0,
    size: pageSizeDefault,
  });
  const [loading, setLoading] = useState(false);

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      page: newPage,
    });
  }

  function handleChangeRowsPerPage(newSize) {
    setFilters({
      ...filters,
      page: 0,
      size: newSize,
    });
  }

  function handleFiltersChange(newFilters) {
    setFilters({
      ...filters,
      ...newFilters,
      page: 0,
    });
  }

  async function fetchData() {
    setLoading(true);
    const res = await apiService(filters);
    setLoading(false);
    if (res) {
      const { content, pagination } = res;
      setData(content);
      setPagination({
        size: parseInt(pagination?.size),
        page: parseInt(pagination?.page),
        total: parseInt(pagination?.total),
      });
    }
    return res;
  }

  useEffect(() => {
    fetchData();
  }, [filters]);

  const Pagination = () => (
    <SPPagination
      page={pagination.page}
      total={pagination.total}
      size={pagination.size}
      onChangePage={handlePageChange}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
  return {
    ...pagination,
    data,
    onChange: handleFiltersChange,
    Pagination,
    loading,
    fetchData,
  };
}
