import { fetchMockProductById } from "@/api/mock-product";
import BasicInfo from "./BasicInfo";

interface ProductPageProps {
  params: { id: number };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await fetchMockProductById(params.id);

  return (
    <div className="container mx-auto px-[200px] py-[100px]">
      <BasicInfo product={product} />
    </div>
  );
}
