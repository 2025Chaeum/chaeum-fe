'use client';

import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { Review, Inquiry } from '@/types/product-detail';
import Image from 'next/image';
import ReviewSection from './ReviewSection';
import QnASection from './QnASection';
import { useQna } from '@/context/QnaContext';
import Button from '@/components/Button';

interface ContentProps {
  id: number;
  name: string;
  mainImage: string;
  detailImage: string;
  inquiries?: Inquiry[];
  reviewRating?: number;
  reviewList?: Review[];
}

export default function Content({
  id,
  name,
  mainImage,
  detailImage,
  inquiries = [],
  reviewRating = 0,
  reviewList = [],
}: ContentProps) {
  const { setProduct } = useQna();
  const router = useRouter();
  const infoRef = useRef<HTMLElement | null>(null);
  const reviewRef = useRef<HTMLElement | null>(null);
  const qaRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="container p-6 mt-10">
      <nav className="flex border-b w-full">
        <a
          className="flex-1 p-4 text-center cursor-pointer border border-black"
          role="button"
          onClick={() => scrollToSection(infoRef)}
        >
          상품정보
        </a>
        <a
          className="flex-1 p-4 text-center cursor-pointer border border-black border-l-0"
          role="button"
          onClick={() => scrollToSection(reviewRef)}
        >
          상품리뷰 <span className="text-mainRed ml-2">({reviewList.length})</span>
        </a>
        <a
          className="flex-1 p-4 text-center cursor-pointer border border-black border-l-0"
          role="button"
          onClick={() => scrollToSection(qaRef)}
        >
          상품Q&A <span className="text-mainRed ml-2">({inquiries.length})</span>
        </a>
      </nav>

      <section ref={infoRef} className="mt-20">
        <h2 className="text-2xl pb-4 border-b border-black">상품정보</h2>
        <article className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Image
            src={detailImage}
            alt="상품 상세 이미지"
            width={500}
            height={500}
            className="w-full rounded-md"
            priority
          />
        </article>
      </section>

      <section ref={reviewRef} className="mt-20">
        <h2 className="text-2xl pb-4 border-b border-black">상품리뷰</h2>
        <ReviewSection reviewRating={reviewRating} reviewList={reviewList} />
      </section>

      <section ref={qaRef} className="mt-20">
        <div className="flex justify-between items-center pb-2 border-b border-black">
          <h2 className="text-2xl">상품 Q&A</h2>
          <Button
            onClick={() => {
              setProduct(name, mainImage);
              router.push(`/product/${id}/qna`);
            }}
          >
            상품 문의하기
          </Button>
        </div>
        <QnASection inquiries={inquiries} />
      </section>
    </div>
  );
}
