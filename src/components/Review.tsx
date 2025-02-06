"use client";
import React, { useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const initialReviews = [
  {
    id: 1,
    name: "Sarah J.",
    review: "Amazing quality furniture! The makeover transformed my living room. Highly recommend Furniro!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael T.",
    review: "Great customer service and stylish designs. Will buy again.",
    rating: 4,
  },
  {
    id: 3,
    name: "Laura P.",
    review: "Affordable and modern! My bedroom feels so cozy now.",
    rating: 5,
  },
];

const ReviewPage = () => {
  const [reviewList, setReviewList] = useState(initialReviews); 
  const [newReview, setNewReview] = useState({ name: "", review: "", rating: 0 });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setNewReview((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (newReview.name && newReview.review && newReview.rating > 0) {
      const newEntry = { id: reviewList.length + 1, ...newReview };
      setReviewList((prev) => [...prev, newEntry]);
      setNewReview({ name: "", review: "", rating: 0 });
      setIsFormVisible(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Customer Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviewList.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="shadow-xl rounded-2xl">
              <div className="p-4">
                <div className="mb-2 flex items-center">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <IoStarSharp key={index} className="text-yellow-500 w-5 h-5" />
                  ))}
                </div>
                <p className="text-lg font-semibold">{review.name}</p>
                <p className="text-gray-600 mt-2">{review.review}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="rounded-2xl px-6 py-2 text-lg bg-brown text-white hover:bg-white hover:text-brown transition"
        >
          {isFormVisible ? "Cancel" : "Write a Review"}
        </button>
      </div>

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="review">
              Review
            </label>
            <textarea
              name="review"
              value={newReview.review}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Review"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <IoStarSharp
                  key={index}
                  onClick={() => handleRatingChange(index + 1)}
                  className={`w-6 h-6 cursor-pointer ${
                    newReview.rating > index ? "text-yellow-500" : "text-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-brown font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit Review
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ReviewPage;
