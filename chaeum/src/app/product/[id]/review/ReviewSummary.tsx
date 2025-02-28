import StarRating from "@/components/StarRating";

interface ReviewSummaryProps {
  reviewRating: number;
  reviewCount: number;
}

export default function ReviewSummary({ reviewRating, reviewCount }: ReviewSummaryProps) {
  const satisfactionRate = Math.round((reviewRating / 5) * 100);

  return (
    <div className="flex w-full border-b pb-10 items-center">
      <div className="flex flex-col items-center space-y-1 space-x-2 px-10">
        <div className="flex items-center space-x-2">
          <span className="text-mainRed text-3xl">★</span>
          <span className="text-3xl font-bold text-black">{reviewRating.toFixed(1)}</span>
        </div>

        <span className="text-lightBlack bg-lightGray px-3 py-1 rounded-lg text-sm">
          {reviewCount.toLocaleString()}개의 리뷰
        </span>
      </div>

      <div className="h-20 w-[1px] bg-gray-300 mx-6"></div>

      <div className="flex-1 flex flex-col px-6">
        <StarRating rating={reviewRating} />
        <p className="text-gray-600 text-medium font-bold">
          구매자의 <span className="text-mainRed font-bold">{satisfactionRate}%</span>가 이 상품에
          만족했어요!
        </p>
      </div>
    </div>
  );
}
