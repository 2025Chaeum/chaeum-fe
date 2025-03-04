'use client';
import React from 'react';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

export default function StarRating({ rating, maxStars = 5 }: StarRatingProps) {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: maxStars }).map((_, index) => {
        const fillPercentage = Math.min(Math.max(rating - index, 0), 1); // ⭐ 0 ~ 1 사이 값으로 조정

        return (
          <span key={index} className="relative text-2xl">
            <span className="text-gray-300">★</span>
            <span
              className="absolute left-0 top-0 overflow-hidden text-mainRed"
              style={{ width: `${fillPercentage * 100}%` }}
            >
              ★
            </span>
          </span>
        );
      })}
    </div>
  );
}
