'use client';
import Image from 'next/image';
import { ProductDetail } from '@/types/product-detail';
import Button from '@/components/Button';
import StarRating from '@/components/StarRating';
import QuantitySelector from '@/components/QuantitySelector';
import { useState } from 'react';

interface BasicInfoProps {
  product: ProductDetail;
}

export default function BasicInfo({ product }: BasicInfoProps) {
  const discountedPrice = Math.round(product.originalPrice * (1 - product.discountRate / 100));
  const [orderQuantity, setOrderQuantity] = useState(1);

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <Image
            src={product.mainImage}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-auto"
          />

          <div className="mt-6 px-10 py-4 border w-full flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-lg font-medium mr-3">리뷰평점</span>
              <StarRating rating={product.reviewRating} />
              <span className="ml-2">{product.reviewRating.toFixed(1)}</span>
            </div>

            <div className="flex items-center">
              <span className="text-lg font-medium">상품리뷰</span>
              <span className="ml-2 text-gray-500">
                ({product.reviewList.length.toLocaleString()})
              </span>
            </div>
          </div>
        </div>

        <div className="pl-8 h-full flex flex-col justify-between divide-y">
          <div className="pb-2 h-full flex-col items-center">
            <h1 className="text-3xl font-bold">{product.name}</h1>
          </div>

          <div className="pb-4 h-full flex items-center">
            <div>
              <p className="text-gray-400 line-through mt-2 text-xl mt-6">
                {product.originalPrice.toLocaleString()} 원
              </p>
              <p className="text-black text-3xl font-bold mt-1 mb-4">
                {discountedPrice.toLocaleString()} 원{' '}
                <span className="text-3xl text-mainRed">{product.discountRate}%</span>
              </p>
            </div>
          </div>

          <div className="py-4 h-full flex items-center">
            <p className="text-black-600 mr-6">상품 코드</p>
            <p className="text-gray-600">{product.productCode}</p>
          </div>

          <div className="py-4 border-t h-full flex items-center">
            <p className="text-black-600 mr-6">주문 수량</p>
            <QuantitySelector initialQuantity={orderQuantity} onChange={setOrderQuantity} />
          </div>

          <div className="py-4 border-t h-full flex justify-end items-end">
            <p className="text-xl font-bold mr-4">총 합계 금액 </p>
            <p className="text-mainRed text-3xl font-bold mr-2">
              {(discountedPrice * orderQuantity).toLocaleString()}
            </p>
            <p className="text-green text-xl font-bold">원</p>
          </div>

          <div className="pt-4 flex space-x-4 justify-end">
            <Button>장바구니</Button>
            <Button color="bg-mainRed">구매하기</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
