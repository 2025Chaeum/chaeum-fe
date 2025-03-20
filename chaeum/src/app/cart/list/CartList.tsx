'use client';

import { useEffect, useState } from 'react';
import { fetchMockCart } from '@/api/mock-cart';
import CartItem from './CartItem';
import { CartResponse } from '@/types/cart';

export default function CartList() {
  const [cart, setCart] = useState<CartResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState<{ [key: number]: boolean }>({});
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    async function loadCart() {
      const data = await fetchMockCart();
      setCart(data);

      const initialSelection: { [key: number]: boolean } = {};
      data.responseDto.productList.forEach((item) => {
        initialSelection[item.productId] = false;
      });
      setSelectedItems(initialSelection);

      setLoading(false);
    }
    loadCart();
  }, []);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);

    const updatedSelection: { [key: number]: boolean } = {};
    cart?.responseDto.productList.forEach((item) => {
      updatedSelection[item.productId] = newSelectAll;
    });

    setSelectedItems(updatedSelection);
  };

  const handleItemSelect = (productId: number) => {
    const updatedSelection = {
      ...selectedItems,
      [productId]: !selectedItems[productId],
    };

    setSelectedItems(updatedSelection);

    const allSelected = Object.values(updatedSelection).every((selected) => selected);
    setSelectAll(allSelected);
  };

  if (loading) {
    return <p>로딩 중...</p>;
  }

  return (
    <div className=" mx-auto">
      <div className="grid grid-cols-12 p-4 text-black bg-lightGray text-sm font-medium">
        <div className="col-span-1 flex items-center justify-center">
          <input
            type="checkbox"
            className="col-span-1 mx-auto w-5 h-5 appearance-none border-2 border-gray-400 checked:bg-black checked:border-black checked:text-white flex items-center justify-center relative
    before:content-['✔'] before:absolute before:text-white before:text-lg before:hidden checked:before:block"
            checked={selectAll}
            onChange={handleSelectAll}
          />
        </div>
        <span className="col-span-5 text-center">상품명</span>
        <span className="col-span-2 text-center">수량</span>
        <span className="col-span-2 text-center">판매가</span>
        <span className="col-span-2 text-center">최종 구매가</span>
      </div>

      {cart?.responseDto.productList.map((item) => (
        <CartItem
          key={item.productId}
          {...item}
          isSelected={selectedItems[item.productId]}
          onSelect={handleItemSelect}
        />
      ))}
    </div>
  );
}
