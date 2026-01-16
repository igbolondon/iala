import React, { useState } from "react";
import { FileText, SquareArrowOutUpRight, Search, Filter, Calendar } from "lucide-react";
import Hero from "../components/Hero";
import { mockResources } from "../data/mockData";
import type { Resource } from "../types";

const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "bylaws", "forms", "minutes", "newsletters"];

  const filteredResources = mockResources.filter((resource: Resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || resource.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categoryColors = {
    bylaws: "bg-purple-100 text-purple-800",
    forms: "bg-blue-100 text-blue-800",
    minutes: "bg-green-100 text-green-800",
    newsletters: "bg-orange-100 text-orange-800",
  };

  // const handleDownload = (resource: Resource) => {
  //   alert(`Download would start for: ${resource.title}`);
  // };

  const handleOpen = () => {
    window.open("https://docs.google.com/forms/d/1MtRIGWZjsU5hUzB1sWsw0ssM0o9vdIqmgsG3ErYrqlY/preview", "_blank")
  }

  return (
    <div>
      <Hero
        title="Resources & Downloads"
        subtitle="Important Documents & Information"
        description="Access bylaws, meeting minutes, forms, newsletters, and other essential community resources"
        image="/3men.jpg"
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
                  placeholder="Search resources..."
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
                        : category.charAt(0).toUpperCase() +
                          category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Resources List */}
          <div className="space-y-4">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-lg shadow-md"
              >
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <FileText className="h-8 w-8 text-[#007A33]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">
                          {resource.title}
                        </h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            categoryColors[resource.category]
                          }`}
                        >
                          {resource.category.charAt(0).toUpperCase() +
                            resource.category.slice(1)}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>
                            Added {resource.dateAdded.toLocaleDateString()}
                          </span>
                        </div>
                        <span>•</span>
                        <span>{resource.fileType}</span>
                        <span>•</span>
                        <span>{resource.fileSize}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleOpen()}
                    className="bg-[#007A33] text-white px-6 py-3 rounded-md font-medium flex items-center space-x-2 hover:scale-105"
                  >
                    <SquareArrowOutUpRight  className="h-5 w-5" />
                    <span>Open</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-24 w-24 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No resources found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Member Resources Notice */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <FileText className="h-16 w-16 text-[#007A33] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Member-Only Resources
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Some documents are exclusively available to registered IALA
              members. Please log in to access additional resources including
              detailed meeting minutes, financial reports, and member
              directories.
            </p>
            <button className="bg-[#007A33] text-white px-6 py-3 rounded-md font-semibold hover:scale-105">
              Member Login
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Resources;
