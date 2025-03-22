'use client';

import { useState } from 'react';
import Image from 'next/image';
import QuantitySelector from '@/components/QuantitySelector';
import { CartProduct } from '@/types/cart';

interface CartItemProps extends CartProduct {
  isSelected: boolean;
  onSelect: (productId: number) => void;
}

export default function CartItem({
  productId,
  name,
  photo,
  count,
  price,
  sale,
  isSelected,
  onSelect,
}: CartItemProps) {
  const [quantity, setQuantity] = useState(count);

  const discountedPrice = Math.floor((price * (100 - sale)) / 100);

  const totalFinalPrice = discountedPrice * quantity;

  return (
    <div className="grid grid-cols-12 items-center border-b p-4">
      <input
        type="checkbox"
        className="col-span-1 mx-auto w-5 h-5 appearance-none border-2 border-gray-400 checked:bg-black checked:border-black checked:text-white flex items-center justify-center relative
    before:content-['✔'] before:absolute before:text-white before:text-lg before:hidden checked:before:block"
        checked={isSelected}
        onChange={() => onSelect(productId)}
      />

      <div className="col-span-5 flex items-center">
        <Image src={photo} alt={name} width={100} height={100} className="mr-4" />
        <p className="text-lg font-medium">{name}</p>
      </div>

      <div className="col-span-2 flex justify-center">
        <QuantitySelector
          initialQuantity={quantity}
          onChange={(newQuantity) => setQuantity(newQuantity)}
        />
      </div>

      <div className="col-span-2 text-center">
        {sale > 0 && (
          <p className="text-sm line-through text-gray-400">{price.toLocaleString()}원</p>
        )}
        <p className="text-lg font-semibold">{discountedPrice.toLocaleString()} 원</p>
      </div>

      <div className="col-span-2 text-lg text-center font-bold">
        {totalFinalPrice.toLocaleString()} 원
      </div>
    </div>
  );
}
