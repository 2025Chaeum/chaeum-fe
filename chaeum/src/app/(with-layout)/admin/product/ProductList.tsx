'use client';

import { Product } from '@/types/admin-product';
import { useRouter } from 'next/navigation';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const router = useRouter();

  const goToEditPage = (productCode: string) => {
    router.push(`/admin/product/${productCode}`);
  };

  return (
    <table className="w-full border-collapse mb-12">
      <thead>
        <tr className="bg-lightGray">
          <th className="p-6 font-semibold">NO</th>
          <th className="p-6 font-semibold">상품명</th>
          <th className="p-6 font-semibold">상품코드</th>
          <th className="p-6 font-semibold">가격</th>
          <th className="p-6 font-semibold">할인율</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product.id} className="text-center" onClick={() => goToEditPage(product.code)}>
            <td className="border-b p-6">{index + 1}</td>
            <td className="border-b p-6">{product.name}</td>
            <td className="border-b p-6">{product.code}</td>
            <td className="border-b p-6">{product.price.toLocaleString()}</td>
            <td className="border-b p-6">{product.discount}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
