import React from "react";
import { Users, Target, Heart, Globe, Award, BookOpen } from "lucide-react";
import Hero from "../components/Hero";

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Cultural Heritage & Preservation",
      description:
        "Maintaining and celebrating our rich Igbo heritage while adapting to our Canadian home.",
    },
    {
      icon: Users,
      title: "Community Family Unity & Trust",
      description:
        "Building strong connections among Igbo families and individuals in London and surrounding areas.",
    },
    {
      icon: Target,
      title: "Industry with Excellence",
      description:
        "Promoting educational and professional advancement while upholding the highest standards.",
    },
    {
      icon: Globe,
      title: "Team work & Integration",
      description:
        "Contributing positively to Canadian society while preserving our unique cultural identity.",
    },
  ];

  const leadership = [
    {
      name: "Mr. Kenneth Emetuche",
      position: "President",
      image: "/Kenneth.jpg",
      alt: "IALA president",
      bio: "Background in Banking and Finance but developed great passion for community advocacy with 15+ years of service.",
    },
    {
      name: "Mr. Nwakanma Ninduwezuor Ehiobu a.k.a Wakie",
      position: "Vice President",
      image: "/wakie1.jpeg",
      alt: "VP",
      bio: "One of the pioneer members of the Ibo Association in London and Area, passionate about preserving Igbo culture while building a strong community.",
    },
    {
      name: "Kingsley Anukam",
      position: "Research & Proposal Development Director / Financial Secretary",
      image: "/KAnukam.jpg",
      alt: "RPD",
      bio: "Image maker of IALA and grant writer for the Igbo Association.",
    },
    {
      name: "Mr. Ikechukwu Ugwuede",
      position: "Secretary",
      image: "/Ikechukwu.jpg",
      alt: "Secretary",
      bio: "Holds a B.Sc. in Biochemistry from Memorial University and is passionate about youth and community relations.",
    },
    {
      name: "Ngozi Kanu",
      position: "Treasurer",
      image: "/Ngozi-kanu.jpg",
      alt: "Treasurer",
      bio: "Project management professional with vast experience in community relations.",
    },
    {
      name: "Mr. Raymond Okeke",
      position: "Public Relations Officer",
      image: "/Raymond.jpg",
      alt: "PRO",
      bio: "Registered Practical Nurse and transportation business owner passionate about community integration.",
    },
    {
      name: "Mr. Uche Nwankwo",
      position: "Social Events & Entertainment Officer",
      image: "/Uche-Nwankwo.jpg",
      alt: "Social Director",
      bio: "Registered Practical Nurse with strong passion for community engagement.",
    },
  ];

  return (
    <div>
      <Hero
        title="About IALA"
        subtitle="Our Story, Mission & Vision"
        description="Learn about our history, leadership, and commitment to building a vibrant Igbo community in London, Ontario"
        image="/Ken-29.jpeg"
        height="md"
      />

      {/* History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our History</h2>
            <div className="w-24 h-1 bg-[#007A33] mb-6" />
            <p className="mb-4">
              The Igbo Association of London and Area was founded in 2017 to unify
              and support the growing Igbo community in London, Ontario.
            </p>
            <p className="mb-4">
              From informal gatherings, we have grown into a structured
              organization serving over 500 members.
            </p>
            <p>
              Our initiatives include cultural festivals, scholarships, and
              community support programs.
            </p>
          </div>
          <img
            src="/bannerdesign.png"
            alt="IALA Gathering"
            className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 duration-100   "
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#005724]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:scale-105 duration-100">
            <Target className="h-12 w-12 text-[#007A33] mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p>
              To foster unity, promote Igbo culture, support member development,
              and contribute positively to Canadian society.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:scale-105 duration-100">
            <Globe className="h-12 w-12 text-[#007A33] mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p>
              To be the leading Igbo cultural organization in Southwestern
              Ontario.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {values.map((value) => (
            <div key={value.title}>
              <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-10 w-10 text-[#007A33]" />
              </div>
              <h3 className="font-bold mb-2">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadership.map((leader) => (
            <div key={leader.name} className="bg-white rounded-lg shadow-md hover:scale-105 duration-100 overflow-hidden">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl">{leader.name}</h3>
                <p className="text-[#007A33] font-semibold mb-2">
                  {leader.position}
                </p>
                <p className="text-sm">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-[#005724] text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <Award className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">$150,000+</h3>
            <p>Community Grants Received</p>
          </div>
          <div>
            <BookOpen className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">150+</h3>
            <p>Educational Programs</p>
          </div>
          <div>
            <Users className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">15</h3>
            <p>Years of Service</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
