import React from "react";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import type { Event } from "../types";
import { format } from "date-fns";

interface EventCardProps {
  event: Event;
  onRSVP?: (eventId: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onRSVP }) => {
  const categoryColors = {
    cultural: "bg-purple-100 text-purple-800",
    social: "bg-blue-100 text-blue-800",
    educational: "bg-orange-100 text-orange-800",
    fundraising: "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 duration-100">
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              categoryColors[event.category]
            }`}
          >
            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
          </span>
          <div className="flex items-center space-x-1 text-gray-600">
            <Users className="h-4 w-4" />
            <span className="text-sm">{event.attendees}</span>
            {event.maxAttendees && (
              <span className="text-sm">/{event.maxAttendees}</span>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {event.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">
              {format(event.date, "MMMM d, yyyy")}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{event.location}</span>
          </div>
        </div>

        {/* <div className="flex space-x-3">
          <button
            onClick={() => onRSVP?.(event.id)}
            className="flex-1 bg-[#007A33] text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 hover:scale-105"
          >
            RSVP
          </button>
          <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-50 hover:scale-105">
            Learn More
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default EventCard;
