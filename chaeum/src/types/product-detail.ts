export interface Review {
  userName: string;
  date: string;
  reviewImage?: string;
  rating: number;
  content: string;
}

export interface Inquiry {
  inquiryId: number;
  isAnswered: boolean;
  title: string;
  content: string;
  answer?: string;
  userName: string;
  date: string;
}

export interface ProductDetail {
  id: number;
  name: string;
  originalPrice: number;
  discountRate: number;
  productCode: string;
  reviewRating: number;
  reviewList: Review[];
  mainImage: string;
  detailImages: string;
  inquiries: Inquiry[];
}
