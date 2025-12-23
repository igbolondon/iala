import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import type { NewsPost } from "../types";
import { format } from "date-fns";

interface NewsCardProps {
  post: NewsPost;
  onClick?: (postId: string) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ post, onClick }) => {
  const categoryColors = {
    announcement: "bg-red-100 text-red-800",
    community: "bg-blue-100 text-blue-800",
    cultural: "bg-purple-100 text-purple-800",
    event: "bg-green-100 text-green-800",
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 duration-100"
      onClick={() => onClick?.(post.id)}
    >
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              categoryColors[post.category]
            }`}
          >
            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </span>
          <div className="flex items-center space-x-1 text-gray-500">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{format(post.date, "MMM d, yyyy")}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 text-[#007A33]">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-500">
            <User className="h-4 w-4" />
            <span className="text-sm">By {post.author}</span>
          </div>
          <div className="flex items-center space-x-1 text-[#007A33] cursor-pointer">
            <span className="text-sm font-medium">Read more</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
