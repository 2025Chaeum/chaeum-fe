'use client';

import { useEffect, useState } from 'react';
// import { useRouter } from "next/navigation";

interface Product {
  name: string;
  code: string;
  price: number | null;
  discount: number | null;
  category: string;
  subcategory: string;
}

export default function ProductEditPage({ params }: { params?: { product_id?: string } }) {
  const [formData, setFormData] = useState<Product>({
    name: '',
    code: '',
    price: null,
    discount: null,
    category: '',
    subcategory: '',
  });

  useEffect(() => {
    // fetch(`https://api.example.com/products/${params?.product_id}`)
    //   .then((res) => res.json())
    //   .then((data) => setFormData(data));
    const data: Product = {
      name: '모던 4인용 패브릭 소파',
      code: 'FURN0001',
      price: 890000,
      discount: 10,
      category: '가구',
      subcategory: '소파',
    };
    setFormData(data);
  }, [params?.product_id]);

  return (
    <div>
      <h1>상품 수정</h1>
      <form>
        <input name="name" value={formData.name} onChange={() => {}} placeholder="상품명" />
        <input name="code" value={formData.code} onChange={() => {}} placeholder="상품코드" />
        <input
          name="price"
          value={formData.price ?? ''}
          onChange={(e) =>
            setFormData({ ...formData, price: e.target.value ? Number(e.target.value) : null })
          }
          placeholder="가격"
        />
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
}
