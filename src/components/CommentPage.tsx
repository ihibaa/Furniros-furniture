"use client";

import React, { useState } from "react";

interface Comment {
  id: number;
  name: string;
  content: string;
  date: string;
}

interface CommentPageProps {
  postId: string; 
  className?: string; 
}

const CommentPage: React.FC<CommentPageProps> = ({ postId, className }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleAddComment = () => {
    if (name.trim() && content.trim()) {
      const newComment: Comment = {
        id: comments.length + 1,
        name,
        content,
        date: new Date().toLocaleString(),
      };

      setComments([newComment, ...comments]);
      setName("");
      setContent("");
    }
  };

  return (
    <div className={`max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md ${className}`}>
      <h1 className="text-2xl font-bold mb-4">Comments for Post: {postId}</h1>

      {/* Comment Form */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring focus:ring-brown"
        />
        <textarea
          placeholder="Your Comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-brown"
        ></textarea>
        <button
          onClick={handleAddComment}
          className="mt-3 bg-brown text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition"
        >
          Add Comment
        </button>
      </div>

      {/* Comments List */}
      <div>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="mb-4 p-4 bg-white rounded-md shadow-md"
            >
              <h3 className="font-bold">{comment.name}</h3>
              <p className="text-gray-700 mt-2">{comment.content}</p>
              <span className="text-sm text-gray-500 mt-1 block">
                {comment.date}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentPage;
