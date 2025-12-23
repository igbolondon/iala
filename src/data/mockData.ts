import type { Event, NewsPost, GalleryItem, Resource } from "../types";

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Igbo Cultural Festival 2025",
    description:
      "Join us for our annual celebration of Igbo culture featuring traditional music, dance, food, and attire. A family-friendly event showcasing the richness of our heritage.",
    date: new Date("2025-03-15"),
    time: "10:00 AM - 6:00 PM",
    location: "Western Fair District, London, ON",
    image: "src/assets/TempTexture.png",
    attendees: 45,
    maxAttendees: 200,
    category: "cultural",
  },
  {
    id: "2",
    title: "Youth Leadership Workshop",
    description:
      "Empowering the next generation of Igbo leaders through mentorship, career guidance, and cultural identity workshops.",
    date: new Date("2025-02-28"),
    time: "2:00 PM - 5:00 PM",
    location: "London Public Library Central Branch",
    image: "src/assets/TempTexture.png",
    attendees: 22,
    maxAttendees: 50,
    category: "educational",
  },
  {
    id: "3",
    title: "Monthly Community Meeting",
    description:
      "Regular community meeting to discuss upcoming events, community issues, and organizational matters.",
    date: new Date("2025-02-15"),
    time: "7:00 PM - 9:00 PM",
    location: "Byron Community Centre",
    image: "src/assets/TempTexture.png",
    attendees: 35,
    category: "social",
  },
  {
    id: "4",
    title: "Scholarship Fundraiser Gala",
    description:
      "Annual fundraising event to support educational scholarships for Igbo students in Canadian universities.",
    date: new Date("2025-04-12"),
    time: "6:00 PM - 11:00 PM",
    location: "Delta Armouries Hotel, London",
    image: "src/assets/TempTexture.png",
    attendees: 12,
    maxAttendees: 150,
    category: "fundraising",
  },
  {
    id: "5",
    title: "New Year Celebration",
    description:
      "Welcome 2025 with traditional Igbo ceremonies, music, and fellowship. Bringing families together to celebrate new beginnings.",
    date: new Date("2024-12-31"),
    time: "8:00 PM - 1:00 AM",
    location: "IALA Community Hall",
    image: "src/assets/TempTexture.png",
    attendees: 89,
    maxAttendees: 120,
    category: "cultural",
  },
];

export const mockNews: NewsPost[] = [
  {
    id: "1",
    title: "IALA Celebrates 15 Years of Community Service",
    excerpt:
      "Reflecting on our journey and the milestones achieved in building a strong Igbo community in London and surrounding areas.",
    content:
      "The Igbo Association of London and Area proudly marks its 15th anniversary this year...",
    date: new Date("2025-01-15"),
    author: "Dr. Emeka Okafor",
    image: "src/assets/TempTexture.png",
    category: "announcement",
  },
  {
    id: "2",
    title: "Scholarship Program Awards $50,000 to Local Students",
    excerpt:
      "Ten exceptional students receive financial support for their post-secondary education through our annual scholarship program.",
    content:
      "We are proud to announce that our scholarship program has awarded...",
    date: new Date("2025-01-10"),
    author: "Mrs. Ngozi Okonkwo",
    image: "src/assets/TempTexture.png",
    category: "community",
  },
  {
    id: "3",
    title: "Traditional Marriage Ceremony Workshop",
    excerpt:
      "Learn about Igbo marriage customs and traditions in our upcoming educational workshop series.",
    content:
      "Join us for an enlightening workshop on traditional Igbo marriage ceremonies...",
    date: new Date("2025-01-05"),
    author: "Chief Ikechukwu Eze",
    image: "src/assets/TempTexture.png",
    category: "cultural",
  },
  {
    id: "4",
    title: "Community Garden Project Launches",
    excerpt:
      "IALA partners with the City of London to establish a community garden featuring traditional Igbo vegetables.",
    content:
      "We are excited to announce the launch of our community garden project...",
    date: new Date("2024-12-28"),
    author: "Mrs. Ada Onwuegbuzie",
    image: "src/assets/TempTexture.png",
    category: "community",
  },
];

export const mockGallery: GalleryItem[] = [
  {
    id: "1",
    title: "Cultural Picnic Festival 2024 Highlights",
    type: "image",
    url: "src/assets/picnic-2024a.JPG",
    date: new Date("2024-07-20"),
    event: "Igbo Cultural Picnic Festival 2024",
  },
  {
    id: "2",
    title: "Traditional Dance Performance",
    type: "image",
    url: "src/assets/Children-dance.jpg",
    date: new Date("2024-07-20"),
    event: "Igbo Cultural Picnic Festival 2024",
  },
  {
    id: "3",
    title: "Community Elders Gathering",
    type: "image",
    url: "src/assets/Elders-picnic.jpg",
    date: new Date("2024-07-15"),
    event: "Annual Community Picnic Meeting",
  },
  {
    id: "4",
    title: "Honours Achievement Awards",
    type: "image",
    url: "src/assets/PresentationMPP.jpg",
    date: new Date("2024-05-10"),
    event: "Appreciation to Peggy Satler, MPP London West 2024",
  },
  {
    id: "5",
    title: "Traditional Breaking of Kolanut Ceremony",
    type: "image",
    url: "src/assets/kolanut-breaking.jpg",
    date: new Date("2024-08-22"),
    event: "Cultural Education Series by Jude Nwagu",
  },
  {
    id: "6",
    title: "Christmas party 2024",
    type: "image",
    url: "src/assets/Xmasparty-24.jpg",
    date: new Date("2024-12-25"),
    event: "Santa presenting gifts to children",
  },
  {
    id: "7",
    title: "Christmas party 2024",
    type: "image",
    url: "src/assets/Christmas-party-24.jpg",
    date: new Date("2024-12-25"),
    event: "Adults at the end of year event",
  },
];

export const mockResources: Resource[] = [
  {
    id: "1",
    title: "IALA Constitution and Bylaws",
    description:
      "Official governing document outlining the association's structure, rules, and procedures.",
    fileUrl: "#",
    fileSize: "2.4 MB",
    fileType: "PDF",
    category: "bylaws",
    dateAdded: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "Membership Application Form",
    description:
      "Complete this form to join the Igbo Association of London and Area.",
    fileUrl: "#",
    fileSize: "156 KB",
    fileType: "PDF",
    category: "forms",
    dateAdded: new Date("2024-02-01"),
  },
  {
    id: "3",
    title: "January 2025 Meeting Minutes",
    description:
      "Minutes from the January monthly community meeting covering key decisions and announcements.",
    fileUrl: "#",
    fileSize: "89 KB",
    fileType: "PDF",
    category: "minutes",
    dateAdded: new Date("2025-01-20"),
  },
  {
    id: "4",
    title: "Cultural Festival Planning Guide",
    description:
      "Comprehensive guide for organizing cultural events and festivals within our community.",
    fileUrl: "#",
    fileSize: "1.8 MB",
    fileType: "PDF",
    category: "bylaws",
    dateAdded: new Date("2024-12-05"),
  },
  {
    id: "5",
    title: "IALA Newsletter - Winter 2024",
    description:
      "Latest quarterly newsletter featuring community updates, member spotlights, and upcoming events.",
    fileUrl: "#",
    fileSize: "3.2 MB",
    fileType: "PDF",
    category: "newsletters",
    dateAdded: new Date("2024-12-15"),
  },
];
