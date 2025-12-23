import React, { useState } from "react";
import { Image, Video, Calendar, X } from "lucide-react";
import Hero from "../components/Hero";
import { mockGallery } from "../data/mockData";
import type { GalleryItem } from "../types";

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = mockGallery.filter(
    (item) => filter === "all" || item.type === filter
  );

  const Modal: React.FC<{ item: GalleryItem; onClose: () => void }> = ({
    item,
    onClose,
  }) => (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div
        className="max-w-4xl max-h-[90vh] w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="relative">
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-96 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {item.title}
            </h3>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{item.date.toLocaleDateString()}</span>
              </div>
              {item.event && <span>• {item.event}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Hero
        title="Community Gallery"
        subtitle="Moments That Define Us"
        description="Explore photos and videos capturing the spirit of our community events and cultural celebrations"
        image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
        height="md"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg shadow-md p-1 inline-flex">
              <button
                onClick={() => setFilter("all")}
                className={`px-6 py-2 rounded-md font-medium ${
                  filter === "all"
                    ? "bg-[#007A33] text-white"
                    : "text-gray-700"
                }`}
              >
                All Media
              </button>

              <button
                onClick={() => setFilter("image")}
                className={`px-6 py-2 rounded-md font-medium flex items-center space-x-2 ${
                  filter === "image"
                    ? "bg-[#007A33] text-white"
                    : "text-gray-700"
                }`}
              >
                <Image className="h-4 w-4" />
                <span>Photos</span>
              </button>

              <button
                onClick={() => setFilter("video")}
                className={`px-6 py-2 rounded-md font-medium flex items-center space-x-2 ${
                  filter === "video"
                    ? "bg-[#007A33] text-white"
                    : "text-gray-700"
                }`}
              >
                <Video className="h-4 w-4" />
                <span>Videos</span>
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 duration-100"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-square">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <Video className="h-12 w-12 text-white" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{item.date.toLocaleDateString()}</span>
                    {item.type === "image" ? (
                      <Image className="h-4 w-4" />
                    ) : (
                      <Video className="h-4 w-4" />
                    )}
                  </div>
                  {item.event && (
                    <p className="text-xs text-gray-500 mt-1">
                      {item.event}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Image className="h-24 w-24 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No media found
              </h3>
              <p className="text-gray-500">
                Check back soon for more photos and videos
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default Gallery;
