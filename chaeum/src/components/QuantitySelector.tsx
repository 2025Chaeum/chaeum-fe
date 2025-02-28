"use client";

import { useState } from "react";

interface QuantitySelectorProps {
  initialQuantity?: number;
  onChange?: (quantity: number) => void;
}

export default function QuantitySelector({ initialQuantity = 1, onChange }: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChange?.(newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange?.(newQuantity);
    }
  };

  return (
    <div className="flex items-center space-x-3">
      <button onClick={handleDecrease} className="px-3 py-1 border hover:bg-gray-300">
        −
      </button>
      <span className="text-lg font-medium">{quantity}</span>
      <button onClick={handleIncrease} className="px-3 py-1 border hover:bg-gray-300">
        +
      </button>
    </div>
  );
}
