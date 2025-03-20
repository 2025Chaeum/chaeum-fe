export interface CartProduct {
  productId: number;
  name: string;
  photo: string;
  count: number;
  price: number;
  sale: number;
  finalPrice: number;
}

export interface CartResponse {
  status: string;
  message: string;
  responseDto: {
    productList: CartProduct[];
  };
}
