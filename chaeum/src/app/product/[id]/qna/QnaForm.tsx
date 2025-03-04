'use client';

import Image from 'next/image';
import { useQna } from '@/context/QnaContext';
import Button from '@/components/Button';

export default function QnaForm() {
  const { productName, productImage } = useQna();

  return (
    <div className="container mx-auto py-[100px]">
      <h2 className="text-3xl font-bold mb-6 border-b pb-4">상품문의</h2>

      <div className="flex items-center pb-6 pl-10">
        <Image
          src={productImage}
          alt={productName}
          width={96}
          height={96}
          className="w-24 h-24 object-cover mr-4 border"
        />
        <span className="text-lg font-semibold">{productName}</span>
      </div>

      <form>
        <div className="flex border-t border-gray-300 ">
          <div className="w-1/4 bg-lightGray p-7 flex items-center font-semibold">
            제목 <span className="text-red-500 ml-1">*</span>
          </div>
          <input
            type="text"
            placeholder="50자 이하 작성"
            className="w-3/4 p-4 border-gray-300 focus:ring-0 focus:outline-none"
          />
        </div>

        <div className="flex border-t border-b border-gray-200">
          <div className="w-1/4 bg-lightGray p-7 flex items-center font-semibold">
            내용 <span className="text-red-500 ml-1">*</span>
          </div>
          <textarea
            placeholder="상품에 대한 문의를 적어주세요."
            className="w-3/4 p-4 border-gray-300 focus:ring-0 focus:outline-none h-24 resize-none"
          />
        </div>

        <div className="flex border-b border-gray-300">
          <div className="w-1/4 bg-lightGray p-7 flex items-center font-semibold">
            이메일 <span className="text-red-500 ml-1">*</span>
          </div>
          <input
            type="email"
            placeholder="답변 등록시 안내 받을 이메일을 적어주세요."
            className="w-3/4 p-4 border-gray-300 focus:ring-0 focus:outline-none"
          />
        </div>

        <div className="pt-8 flex justify-center">
          <Button>등록하기</Button>
        </div>
      </form>
    </div>
  );
}
