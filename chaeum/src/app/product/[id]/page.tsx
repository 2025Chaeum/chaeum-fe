import { fetchMockProductById } from "@/api/mock-product";
import BasicInfo from "./BasicInfo";
import Content from "./Content";
import { ProductDetail } from "@/types/product-detail";

interface ProductPageProps {
  params: { id: number };
}

export default async function page({ params }: ProductPageProps) {
  const product: ProductDetail = await fetchMockProductById(params.id);
  console.log(product);

  return (
    <div className="container mx-auto px-[200px] py-[100px]">
      <BasicInfo product={product} />
      <Content
        detailImage={product.detailImages}
        inquiries={product.inquiries}
        reviewRating={product.reviewRating}
        reviewList={product.reviewList}
      />
    </div>
  );
}
