'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import mockProducts from './mockProducts';
import ProductList from './ProductList';
import Pagination from '@/components/Pagination';
import SearchIcon from 'public/icons/search.svg';

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
      <div className="flex justify-between border-b-2 border-black mb-12">
        <h1 className="text-4xl font-medium mb-6">상품 목록</h1>
        <div className="flex justify-between items-center mb-6 gap-10">
          <div className="flex items-center w-full justify-between border px-4 py-2 gap-4">
            <input
              value={search}
              onChange={onSearchChange}
              type="text"
              placeholder="상품명 또는 상품코드 검색"
              className="w-full focus:outline-none"
            />
            <SearchIcon width="27" height="27" fill="#8C8C8C" className="cursor-pointer" />
          </div>
          {/* <button className="border px-4 py-2">검색</button> */}
          <button onClick={goToRegister} className="bg-black text-white w-60 px-7 py-3">
            상품 등록하기
          </button>
        </div>
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
