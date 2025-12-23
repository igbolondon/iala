import React, { useState } from "react";
import { Search, Filter, Calendar } from "lucide-react";
import Hero from "../components/Hero";
import NewsCard from "../components/NewsCard";
import { mockNews } from "../data/mockData";
import type { NewsPost } from "../types";

const News: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "announcement", "community", "cultural", "event"];

  const filteredNews = mockNews.filter((post: NewsPost) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleNewsClick = (postId: string) => {
    console.log("View post:", postId);
  };

  return (
    <div>
      <Hero
        title="News & Updates"
        subtitle="Stay Connected with Our Community"
        description="Latest news, announcements, and stories from the Igbo Association of London and Area"
        image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
        height="md"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search news and announcements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md appearance-none bg-white"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "all"
                        ? "All Categories"
                        : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Featured Post */}
          {filteredNews.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Featured Story
              </h2>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  {filteredNews[0].image && (
                    <div className="md:w-1/2">
                      <img
                        src={filteredNews[0].image}
                        alt={filteredNews[0].title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {filteredNews[0].category.charAt(0).toUpperCase() +
                          filteredNews[0].category.slice(1)}
                      </span>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">
                          {filteredNews[0].date.toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {filteredNews[0].title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {filteredNews[0].excerpt}
                    </p>
                    <button
                      onClick={() => handleNewsClick(filteredNews[0].id)}
                      className="bg-[#007A33] text-white px-6 py-3 rounded-md font-semibold"
                    >
                      Read Full Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* News Grid */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All News & Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.slice(1).map((post) => (
              <div key={post.id}>
                <NewsCard post={post} onClick={handleNewsClick} />
              </div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-24 w-24 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No news found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;
