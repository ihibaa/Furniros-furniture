"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is your return policy?",
    answer: "Our return policy allows you to return products within 30 days of purchase for a full refund.",
  },
  {
    question: "How do I track my order?",
    answer: "You can track your order by logging into your account and visiting the 'Order History' section.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping to most countries. Shipping costs and delivery times vary by location.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact our customer support team via email at support@example.com or by calling +1-800-123-4567.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, PayPal, and other popular payment methods.",
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mt-[80] mb-8">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 focus:outline-none"
              >
                <h2 className="text-lg font-semibold text-gray-800">{faq.question}</h2>
                <span className="text-gray-600">
                  {activeIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </span>
              </button>

              {activeIndex === index && (
                <div className="p-6 pt-0 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;