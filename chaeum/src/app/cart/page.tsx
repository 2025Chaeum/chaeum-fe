'use client';

import Button from './deleteButton';

export default function ShoppingCart() {
  return (
    <div>
      <h1 className="text-4xl font-medium mb-8 text-left">장바구니</h1>
      <Button color="black">전체삭제</Button>
      <Button color="deepGray">선택삭제</Button>
      <hr className="my-4 border-black" />
    </div>
  );
}
