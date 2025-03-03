'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import mockProducts from './mockProducts';
import ProductList from './ProductList';
import Pagination from '@/components/Pagination';

const ITEMS_PER_PAGE = 5;

export default function ProductListPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState(q);

  const totalItems = mockProducts.length;
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedProducts = mockProducts.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const goToRegister = () => {
    router.push('/admin/product/regist');
  };

  return (
    <div>
      <h1 className="text-4xl font-medium mb-4">상품 목록</h1>
      <div className="flex justify-between items-center mb-4">
        <input
          value={search}
          onChange={onSearchChange}
          type="text"
          placeholder="상품명 또는 상품코드 검색"
          className="border px-4 py-2 rounded w-1/3"
        />
        <button className="border px-4 py-2 rounded">검색</button>
        <button onClick={goToRegister} className="bg-black text-white px-4 py-2 rounded">
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
