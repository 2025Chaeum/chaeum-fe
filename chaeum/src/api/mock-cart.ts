import { CartResponse } from '@/types/cart';

export async function fetchMockCart(): Promise<CartResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 'OK',
        message: 'success',
        responseDto: {
          productList: [
            {
              productId: 1,
              name: '미키마우스 1인 패브릭 소파',
              photo: '/images/test-sofa.png',
              count: 1,
              price: 1047800,
              sale: 0,
              finalPrice: 1047800,
            },
            {
              productId: 2,
              name: '미키마우스 쿠션',
              photo: '/images/test-sofa.png',
              count: 2,
              price: 5000,
              sale: 20,
              finalPrice: 8000,
            },
            {
              productId: 3,
              name: '디즈니 미키마우스 러그',
              photo: '/images/test-sofa.png',
              count: 1,
              price: 75000,
              sale: 10,
              finalPrice: 67500,
            },
            {
              productId: 4,
              name: '디즈니 미니마우스 담요',
              photo: '/images/test-sofa.png',
              count: 1,
              price: 45000,
              sale: 5,
              finalPrice: 42750,
            },
          ],
        },
      });
    }, 500);
  });
}
