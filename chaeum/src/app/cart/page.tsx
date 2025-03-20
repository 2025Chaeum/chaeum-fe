'use client';

import DeleteButton from './deleteButton';
import CartList from './list/CartList';
import Button from '@/components/Button';

export default function ShoppingCart() {
  return (
    <div>
      <h1 className="text-4xl font-medium mb-8 text-left">장바구니</h1>
      <DeleteButton color="black">전체삭제</DeleteButton>
      <DeleteButton color="deepGray">선택삭제</DeleteButton>
      <hr className="my-4 border-black" />
      <CartList />
      <div className="pt-4 flex space-x-4 justify-center">
        <Button>선택상품 주문</Button>
        <Button color="bg-mainRed">전체상품 주문</Button>
      </div>
    </div>
  );
}
