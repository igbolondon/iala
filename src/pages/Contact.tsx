import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import Hero from "../components/Hero";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `${formData.subject}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AInquiry: ${formData.inquiryType}%0D%0AMessage: ${formData.message}`;
    
    window.location.href = `mailto:igbolondon.canada@gmail.com?subject=${subject}&body=${body}`;

    console.log("Form submitted:", formData);

    setIsSubmitted(true);

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="Get in Touch"
        description="Reach out to us for membership inquiries, event information, or any questions about our community"
        image="/Ken-26.jpeg"
        height="md"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <div className="w-24 h-1 bg-[#007A33] mb-6"></div>

              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#007A33] text-white p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">president@igbolondon.ca</p>
                    <p className="text-gray-600">igbolondon.canada@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#007A33] text-white p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">
                      (226) 456-1604 or (226) 504-1598
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#007A33] text-white p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Registered Office Location
                    </h3>
                    <p className="text-gray-600">
                      1476 Evans Blvd, London, Ontario, N6M 0A8, Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#007A33] text-white p-3 rounded-full">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Office Hours
                    </h3>
                    <p className="text-gray-600">By appointment only</p>
                  </div>
                </div>
              </div>

              {/* Meeting Schedule */}
              <div className="bg-green-50 p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-[#007A33] mb-2">
                  Monthly Community Meetings
                </h3>
                <p className="text-gray-700 mb-2">
                  Last Saturday of every month
                </p>
                <p className="text-gray-600 text-sm">
                  Boyle Community Centre, 530 Charlotte Street, London, ON
                  4:00 PM – 8:00 PM
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />

                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="membership">Membership</option>
                      <option value="events">Events</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />

                  <textarea
                    name="message"
                    rows={6}
                    required
                    placeholder="Please provide details about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md resize-vertical"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#007A33] text-white py-3 px-6 rounded-md font-semibold flex items-center justify-center space-x-2 hover:scale-105"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Newsletter */}
          {/* <div className="mt-16 bg-[#007A33] rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Stay Connected
            </h2>
            <p className="text-green-100 mb-6">
              Subscribe to our newsletter for the latest community news and
              updates
            </p>
            <div className="max-w-md mx-auto flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
              />
              <button className="bg-white text-[#007A33] px-6 py-2 rounded-md font-semibold hover:scale-105">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
