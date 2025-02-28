import StarRating from "@/components/StarRating";
import { Review } from "@/types/product-detail";
import Image from "next/image";

interface ReviewItemProps {
  review: Review;
}

export default function ReviewItem({ review }: ReviewItemProps) {
  const maskName = (name: string) => {
    if (name.length < 3) return name;
    return name[0] + "*" + name.slice(2);
  };

  return (
    <article className="grid grid-cols-[200px_1fr] border-b">
      <div className="bg-lightGray px-4 py-4 flex flex-col justify-between h-full">
        <div className="flex justify-between w-full">
          <strong className="font-bold">{maskName(review.userName)}</strong>
          <time className="text-gray-500 text-sm text-right">{review.date}</time>
        </div>
      </div>

      <div className="px-10 py-4">
        <StarRating rating={review.rating} />
        <p className="text-gray-800 mt-1">{review.content}</p>

        {review.reviewImage && (
          <div className="relative w-48 h-48 mt-4">
            <Image
              src={review.reviewImage}
              alt="리뷰 이미지"
              className="rounded-lg"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
      </div>
    </article>
  );
}
