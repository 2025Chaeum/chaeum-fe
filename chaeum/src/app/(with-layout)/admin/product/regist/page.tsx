'use client';

import { useState } from 'react';

interface Product {
  name: string;
  code: string;
  price: number | null;
  discount: number | null;
  category: string;
  subcategory: string;
}

export default function ProductRegisterPage() {
  const [formData, setFormData] = useState<Product>({
    name: '',
    code: '',
    price: null,
    discount: null,
    category: '',
    subcategory: '',
  });

  return (
    <div>
      <h1>상품 등록</h1>
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
        <button type="submit">등록하기</button>
      </form>
    </div>
  );
}
