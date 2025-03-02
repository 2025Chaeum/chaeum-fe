"use client";

import { useState } from "react";
import mockProducts from "./mockProducts";
import ProductList from "./ProductList";
import Pagination from "@/components/Pagination";

const ITEMS_PER_PAGE = 5;

export default function ProductPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = mockProducts.length;
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedProducts = mockProducts.slice(
    startIdx,
    startIdx + ITEMS_PER_PAGE
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">상품 목록</h1>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="상품명 또는 상품코드 검색"
          className="border px-4 py-2 rounded w-1/3"
        />
        <button className="bg-black text-white px-4 py-2 rounded">
          상품 등록하기
        </button>
      </div>
      <ProductList products={displayedProducts} />
      <Pagination
        totalItems={totalItems}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
