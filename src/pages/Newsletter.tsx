import React, { useState } from "react";
import { Mail, CheckCircle, Send, Users } from "lucide-react";
import Hero from "../components/Hero";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const interestOptions = [
    "Cultural Events",
    "Educational Workshops",
    "Community News",
    "Volunteer Opportunities",
    "Youth Programs",
    "Senior Activities",
  ];

  const handleInterestChange = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", { email, interests });
    setIsSubscribed(true);
  };

  if (isSubscribed) {
    return (
      <div>
        <Hero
          title="Newsletter Signup"
          subtitle="Stay Informed"
          image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
          height="sm"
        />

        <section className="py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-lg shadow-md p-8">
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome to Our Newsletter!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for subscribing! You'll receive our monthly newsletter
                with community updates, event announcements, and cultural
                stories.
              </p>
              <p className="text-sm text-gray-500 mb-8">
                You can unsubscribe at any time by clicking the link in our
                emails.
              </p>
              <a
                href="/"
                className="bg-[#007A33] text-white px-8 py-3 rounded-md font-semibold inline-block"
              >
                Return to Home
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <Hero
        title="Newsletter Signup"
        subtitle="Stay Informed & Connected"
        description="Join our mailing list to receive monthly updates about community events, cultural programs, and important announcements"
        image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
        height="md"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Newsletter Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Subscribe?
              </h2>
              <div className="w-24 h-1 bg-[#007A33] mb-6"></div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#007A33] text-white p-2 rounded-full mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Monthly Updates
                    </h3>
                    <p className="text-gray-600">
                      Get the latest community news delivered to your inbox
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#007A33] text-white p-2 rounded-full mt-1">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Event Notifications
                    </h3>
                    <p className="text-gray-600">
                      Be the first to know about upcoming events and activities
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#007A33] text-white p-2 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Exclusive Content
                    </h3>
                    <p className="text-gray-600">
                      Access member spotlights, cultural stories, and community
                      achievements
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mt-8 shadow-md text-center">
                <h3 className="font-bold text-[#007A33] mb-2">
                  Newsletter Statistics
                </h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">850+</div>
                    <div className="text-sm text-gray-600">Subscribers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">95%</div>
                    <div className="text-sm text-gray-600">Open Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-center mb-6">
                <div className="bg-[#007A33] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Join Our Newsletter
                </h2>
                <p className="text-gray-600 mt-2">
                  Stay connected with our community
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#007A33] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What interests you? (Optional)
                  </label>
                  <div className="space-y-2">
                    {interestOptions.map((interest) => (
                      <label key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="h-4 w-4 text-[#007A33] focus:ring-[#007A33] border-gray-300 rounded mr-3"
                        />
                        <span className="text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-xs text-gray-600">
                    By subscribing, you agree to receive emails from IALA. We
                    respect your privacy and will never share your information
                    with third parties. You can unsubscribe at any time.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#007A33] text-white py-3 px-6 rounded-md font-semibold flex items-center justify-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Subscribe to Newsletter</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
