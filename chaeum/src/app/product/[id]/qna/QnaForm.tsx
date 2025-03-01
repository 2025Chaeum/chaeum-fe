"use client";

import Image from "next/image";
import { useQna } from "@/context/QnaContext";

export default function QnaForm() {
  const { productName, productImage } = useQna();

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">상품문의</h2>
      <div className="flex items-center border-b pb-4">
        <Image
          src={productImage}
          alt={productName}
          width={96}
          height={96}
          className="w-24 h-24 object-cover mr-4"
        />
        <span className="text-lg">{productName}</span>
      </div>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block font-semibold mb-1">제목 *</label>
          <input type="text" placeholder="50자 이하 작성" className="w-full border p-2" />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">내용 *</label>
          <textarea
            placeholder="상품에 대한 문의를 적어주세요."
            className="w-full border p-2 h-24"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">이메일 *</label>
          <input
            type="email"
            placeholder="답변 등록시 안내 받을 이메일을 적어주세요."
            className="w-full border p-2"
          />
        </div>
        <button type="submit" className="w-full bg-black text-white py-2 mt-2">
          등록하기
        </button>
      </form>
    </div>
  );
}
