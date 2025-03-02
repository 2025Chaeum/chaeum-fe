interface Product {
  id: number;
  name: string;
  code: string;
  price: number;
  discount: number;
}

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">NO</th>
          <th className="border p-2">상품명</th>
          <th className="border p-2">상품코드</th>
          <th className="border p-2">가격</th>
          <th className="border p-2">할인율</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product.id} className="text-center">
            <td className="border p-2">{index + 1}</td>
            <td className="border p-2">{product.name}</td>
            <td className="border p-2">{product.code}</td>
            <td className="border p-2">{product.price.toLocaleString()}</td>
            <td className="border p-2">{product.discount}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
