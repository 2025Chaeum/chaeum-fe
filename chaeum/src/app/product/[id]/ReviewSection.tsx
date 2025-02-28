import ReviewSummary from "./review/ReviewSummary";
import ReviewItem from "./review/ReviewItem";
import Pagination from "@/components/Pagination";
import { Review } from "@/types/product-detail";
import { useState } from "react";

interface ReviewSectionProps {
  reviewRating: number;
  reviewList: Review[];
}

export default function ReviewSection({ reviewRating, reviewList }: ReviewSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;
  const reviewCount = reviewList.length;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewList.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <div className="container mx-auto mt-10 p-6">
      <div className="flex">
        <ReviewSummary reviewRating={reviewRating} reviewCount={reviewCount} />
      </div>

      <div>
        {currentReviews.map((review, index) => (
          <ReviewItem key={index} review={review} />
        ))}
      </div>

      <Pagination
        totalItems={reviewList.length}
        itemsPerPage={reviewsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
