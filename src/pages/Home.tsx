import React from "react";
import { Calendar, Users, Heart, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import NewsCard from "../components/NewsCard";
import { mockEvents, mockNews } from "../data/mockData";

const Home: React.FC = () => {
  const stats = [
    { icon: Users, label: "Active Members", value: "500+" },
    { icon: Calendar, label: "Events This Year", value: "24" },
    { icon: Heart, label: "Families Served", value: "200+" },
    { icon: Award, label: "Years of Service", value: "15" },
  ];

  const upcomingEvents = mockEvents.slice(0, 3);
  const recentNews = mockNews.slice(0, 3);

  const goToLink = (link: string | undefined) => {
    if (link) {
       window.open(link, '_blank');
    }
  };

  return (
    <div>
      <Hero
        title="Igbo Association of London and Area"
        subtitle="Omenala Igbo - Our Heritage, Our Pride"
        description="Building bridges, preserving culture, and strengthening our community in London, Ontario and surrounding areas since 2017"
        height="xl"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            to="/events"
            className="bg-green-500 border-2 border-green-500 text-white px-6 py-3 rounded-md font-semibold text-center hover:bg-green-600 hover:border-green-600 hover:scale-105"
          >
            Explore Events
          </Link>
          <Link
            to="/about"
            className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold text-center hover:bg-gray-500 hover:scale-105"
          >
                Learn More
           </Link>
        </div>
      </Hero>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-[#007A33] mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Igbo Association of London and Area (IALA) is dedicated to
              fostering unity, promoting Igbo culture, and supporting the
              social, educational, and economic advancement of our community
              members while contributing positively to the broader Canadian
              society.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#007A33] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Cultural Preservation
                </h3>
                <p className="text-gray-600">
                  Maintaining and sharing our rich Igbo heritage with future
                  generations
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#007A33] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Community Building
                </h3>
                <p className="text-gray-600">
                  Creating strong bonds and support networks within our
                  community
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#007A33] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  Promoting educational and professional advancement of our
                  members
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#005724]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="text-white">
                <stat.icon className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Upcoming Events
              </h2>
              <div className="w-24 h-1 bg-[#007A33]"></div>
            </div>

            <Link
              to="/events"
              className="flex items-center space-x-1 text-[#007A33] font-semibold hover:text-green-700"
            >
              <span>View All Events</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onRSVP={(id) => console.log("RSVP for:", id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Latest News
              </h2>
              <div className="w-24 h-1 bg-[#007A33]"></div>
            </div>

            <Link
              to="/news"
              className="flex items-center space-x-1 text-[#007A33] font-semibold hover:text-green-700"
            >
              <span>View All News</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((post) => (
              <NewsCard
                key={post.id}
                post={post}
                onClick={() => goToLink(post.link)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#005724] relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Become part of a vibrant community that celebrates Igbo culture
            while building a better future together
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#007A33] px-8 py-3 rounded-md font-semibold hover:bg-gray-200 hover:scale-105"
            >
              Become a Member
            </Link>
            <Link
              to="/donate"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-500 hover:scale-105"
            >
              Support Our Cause
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
