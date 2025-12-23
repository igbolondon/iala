import React, { useState } from "react";
import { Calendar, Search, Filter } from "lucide-react";
import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import { mockEvents } from "../data/mockData";
import type { Event } from "../types";

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewType, setViewType] = useState<"upcoming" | "past" | "all">(
    "upcoming"
  );

  const categories = [
    "all",
    "cultural",
    "social",
    "educational",
    "fundraising",
  ];

  const currentDate = new Date();

  const filteredEvents = mockEvents.filter((event: Event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;
    const matchesViewType =
      viewType === "all" ||
      (viewType === "upcoming" && event.date >= currentDate) ||
      (viewType === "past" && event.date < currentDate);

    return matchesSearch && matchesCategory && matchesViewType;
  });

  const handleRSVP = (eventId: string) => {
    alert(`RSVP functionality would be implemented here for event: ${eventId}`);
  };

  return (
    <div>
      <Hero
        title="Community Events"
        subtitle="Join Us in Celebrating Our Culture"
        description="Discover upcoming events, cultural festivals, educational workshops, and community gatherings"
        image="src/assets/3W8A0764.JPG"
        height="md"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search events..."
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

              {/* View Type */}
              <div className="flex rounded-md overflow-hidden border border-gray-300">
                <button
                  onClick={() => setViewType("upcoming")}
                  className={`flex-1 py-2 px-4 text-sm font-medium ${
                    viewType === "upcoming"
                      ? "bg-[#007A33] text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setViewType("past")}
                  className={`flex-1 py-2 px-4 text-sm font-medium border-l border-gray-300 ${
                    viewType === "past"
                      ? "bg-[#007A33] text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  Past
                </button>
                <button
                  onClick={() => setViewType("all")}
                  className={`flex-1 py-2 px-4 text-sm font-medium border-l border-gray-300 ${
                    viewType === "all"
                      ? "bg-[#007A33] text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  All
                </button>
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id}>
                <EventCard event={event} onRSVP={handleRSVP} />
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="h-24 w-24 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No events found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or check back later
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
