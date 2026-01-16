import React, { useState } from "react";
import {
  Heart,
  CreditCard,
  Shield,
  Users,
  Award,
  BookOpen,
} from "lucide-react";
import Hero from "../components/Hero";

const Donate: React.FC = () => {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">(
    "one-time"
  );
  const [amount, setAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");

  const predefinedAmounts = ["25", "50", "100", "250", "500"];

  const donationImpacts = [
    {
      icon: BookOpen,
      title: "Education Scholarships",
      description:
        "Your donations help fund scholarships for Igbo students pursuing higher education.",
      impact: "$500 can sponsor a student for one semester",
    },
    {
      icon: Users,
      title: "Community Events",
      description:
        "Support cultural festivals, workshops, and community gatherings that bring us together.",
      impact: "$100 helps sponsor a community workshop",
    },
    {
      icon: Heart,
      title: "Member Support",
      description:
        "Assist families in need and provide emergency support to community members.",
      impact: "$250 provides emergency assistance to a family",
    },
    {
      icon: Award,
      title: "Cultural Programs",
      description:
        "Fund language classes, cultural education, and preservation initiatives.",
      impact: "$150 supports monthly cultural education programs",
    },
  ];

  const handleDonate = () => {
    const finalAmount = amount === "custom" ? customAmount : amount;
    alert(
      `Stripe integration would process $${finalAmount} ${donationType} donation`
    );
  };

  return (
    <div>
      <Hero
        title="Support Our Community"
        subtitle="Make a Difference Today"
        description="Your generous donations help us preserve culture, support education, and strengthen our community bonds"
        image="/Ken-18.jpeg"
        height="md"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Make a Donation
              </h2>

              {/* Donation Type */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Donation Type
                </h3>
                <div className="flex rounded-md overflow-hidden border border-gray-300">
                  <button
                    onClick={() => setDonationType("one-time")}
                    className={`flex-1 py-3 px-4 font-medium ${
                      donationType === "one-time"
                        ? "bg-[#007A33] text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    onClick={() => setDonationType("monthly")}
                    className={`flex-1 py-3 px-4 font-medium border-l border-gray-300 ${
                      donationType === "monthly"
                        ? "bg-[#007A33] text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Select Amount (CAD)
                </h3>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {predefinedAmounts.map((presetAmount) => (
                    <button
                      key={presetAmount}
                      onClick={() => setAmount(presetAmount)}
                      className={`py-3 px-4 rounded-md font-semibold ${
                        amount === presetAmount
                          ? "bg-[#007A33] text-white"
                          : "border border-gray-300 text-gray-700"
                      }`}
                    >
                      ${presetAmount}
                    </button>
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setAmount("custom")}
                    className={`py-3 px-6 rounded-md font-semibold ${
                      amount === "custom"
                        ? "bg-[#007A33] text-white"
                        : "border border-gray-300 text-gray-700"
                    }`}
                  >
                    Custom
                  </button>
                  {amount === "custom" && (
                    <div className="flex-1">
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                          $
                        </span>
                        <input
                          type="number"
                          min="1"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          placeholder="Enter amount"
                          className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#007A33] focus:border-transparent"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-green-50 p-4 rounded-md mb-6">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-[#007A33]" />
                  <span className="text-sm text-green-800 font-medium">
                    Secure payment processing powered by Stripe
                  </span>
                </div>
                <p className="text-sm text-green-700 mt-1">
                  Your payment information is encrypted and secure. We never
                  store your card details.
                </p>
              </div>

              <button
                onClick={handleDonate}
                className="w-full bg-[#007A33] text-white py-4 px-6 rounded-md font-bold text-lg flex items-center justify-center space-x-2"
              >
                <CreditCard className="h-6 w-6" />
                <span>
                  Donate ${amount === "custom" ? customAmount || "0" : amount}
                  {donationType === "monthly" ? "/month" : ""}
                </span>
              </button>

              <p className="text-xs text-gray-600 text-center mt-4">
                IALA is a registered Canadian Non-Profit Organization. Tax receipts will be
                issued for donations over $20.
              </p>
            </div>

            {/* Donation Impact */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Your Impact
              </h2>
              <div className="w-24 h-1 bg-[#007A33] mb-8"></div>

              <div className="space-y-6">
                {donationImpacts.map((impact) => (
                  <div
                    key={impact.title}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <impact.icon className="h-6 w-6 text-[#007A33]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {impact.title}
                        </h3>
                        <p className="text-gray-600 mb-3 leading-relaxed">
                          {impact.description}
                        </p>
                        <p className="text-sm font-semibold text-[#007A33]">
                          {impact.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Statistics */}
              <div className="bg-gray-50 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  2024 Impact Report
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Scholarships Awarded:</span>
                    <span className="font-semibold text-gray-900">
                      2 students
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Events Organized:</span>
                    <span className="font-semibold text-gray-900">12 events</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Families Supported:</span>
                    <span className="font-semibold text-gray-900">145 families</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="text-gray-600 font-semibold">
                      Total Funds Raised:
                    </span>
                    <span className="font-bold text-[#007A33]">$15,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
