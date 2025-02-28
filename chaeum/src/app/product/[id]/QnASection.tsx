"use client";

import { useState } from "react";
import React from "react";
import Pagination from "@/components/Pagination";
import { Inquiry } from "@/types/product-detail";

interface QnASectionProps {
  inquiries: Inquiry[];
}

export default function QnASection({ inquiries }: QnASectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedInquiry, setSelectedInquiry] = useState<number | null>(null);

  const itemsPerPage = 5;
  const totalItems = inquiries.length;

  const displayedInquiries = inquiries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleInquiry = (id: number) => {
    setSelectedInquiry(selectedInquiry === id ? null : id);
  };

  const maskName = (name: string) => {
    if (name.length < 3) return name;
    return name[0] + "*" + name.slice(2);
  };

  return (
    <div className="container mx-auto">
      <table className="w-full border-collapse">
        <thead className="border-b border-gray-300 bg-gray-100">
          <tr className="text-center">
            <th className="p-4">NO</th>
            <th className="p-4">답변</th>
            <th className="p-4">문의 내용</th>
            <th className="p-4">작성자</th>
            <th className="p-4">작성일</th>
          </tr>
        </thead>
        <tbody>
          {displayedInquiries.map((inquiry, index) => (
            <React.Fragment key={inquiry.inquiryId}>
              <tr
                className="border-b border-gray-200 text-center cursor-pointer hover:bg-gray-100"
                onClick={() => toggleInquiry(inquiry.inquiryId)}
              >
                <td className="p-4 align-middle">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                <td className="p-4 align-middle">
                  {inquiry.isAnswered ? <span>답변 완료</span> : <span>답변 대기</span>}
                </td>
                <td className="p-4 align-middle">{inquiry.title}</td>
                <td className="p-4 align-middle">{maskName(inquiry.userName)}</td>
                <td className="p-4 align-middle">{inquiry.date}</td>
              </tr>

              {selectedInquiry === inquiry.inquiryId && inquiry.isAnswered && (
                <tr className="bg-gray-100">
                  <td colSpan={5} className="px-14 py-10">
                    <div className="flex flex-col space-y-5">
                      <div className="flex items-start space-x-5">
                        <span className="text-white bg-gray-500 w-7 h-7 flex items-center justify-center rounded-full">
                          Q
                        </span>
                        <p className="text-gray-700">{inquiry.content}</p>
                      </div>

                      <div className="flex items-start space-x-5">
                        <span className=" text-white bg-black w-7 h-7 flex items-center justify-center rounded-full">
                          A
                        </span>
                        <p className="text-gray-800">{inquiry.answer}</p>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
