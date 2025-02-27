import { ProductDetail } from "@/types/product-detail";

export async function fetchMockProductById(id: number): Promise<ProductDetail> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: "온드 4인 패브릭 소파 와이드형",
        originalPrice: 1527000,
        discountRate: 31,
        productCode: "P200039354",
        reviewRating: 4.89,
        reviewList: [
          {
            userName: "김철수",
            date: "2024-02-26",
            rating: 5,
            content: "너무 편하고 고급스럽습니다!",
            reviewImage: "/images/test-sofa.png",
          },
          {
            userName: "이영희",
            date: "2024-02-25",
            rating: 4,
            content: "가격 대비 만족합니다.",
          },
        ],
        mainImage: "/images/test-sofa.png",
        detailImages: "/images/test-sofa.png",
        inquiries: [
          {
            inquiryId: 1,
            isAnswered: true,
            title: "배송 문의",
            content: "서울 지역은 몇일 걸리나요?",
            answer: "서울은 2~3일 내 배송됩니다.",
            userName: "박민수",
            date: "2024-02-20",
          },
          {
            inquiryId: 2,
            isAnswered: false,
            title: "소재 문의",
            content: "쿠션이 분리되나요?",
            userName: "정수빈",
            date: "2024-02-18",
          },
        ],
      });
    }, 500); // 0.5초 후 응답 (로딩 시뮬레이션)
  });
}
