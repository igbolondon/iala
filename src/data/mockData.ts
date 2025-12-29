import type { Event, NewsPost, GalleryItem, Resource } from "../types";

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Igbo Cultural Picnic 2025",
    description:
      "Join us for our annual celebration of Igbo culture featuring traditional music, dance, food, and attire. A family-friendly event showcasing the richness of our heritage.",
    date: new Date("2025-07-27"),
    time: "9:00 AM - 10:00 PM",
    location: "Spring Bank Park, Area F, London, ON",
    image: "src/assets/Picnic-2025.jpeg",
    attendees: 45,
    maxAttendees: 200,
    category: "cultural",
  },
  {
    id: "2",
    title: "2025 Safety Workshop for Children and Youth ",
    description:
      "Building safer communities for children and youth; protecting youth from drugs, violence, and mental health struggles.",
    date: new Date("2025-06-22"),
    time: "10:00 AM - 4:00 PM",
    location: "Youth for Christ (YFC), 254 Adelaide Street South, London, ON, N5Z3L1",
    image: "src/assets/Dave-1.jpeg",
    attendees: 75,
    maxAttendees: 120,
    category: "educational",
  },
  {
    id: "2",
    title: "Youth Leadership and Safety Workshop",
    description:
      "Empowering the next generation of Igbo leaders through mentorship, career guidance, and cultural identity workshops.",
    date: new Date("2025-06-22"),
    time: "10:00 AM - 4:00 PM",
    location: "Youth for Christ (YFC), 254 Adelaide Street South, London, ON, N5Z3L1",
    image: "src/assets/Ken-24.jpeg",
    attendees: 22,
    maxAttendees: 50,
    category: "educational",
  },
  {
    id: "3",
    title: "Monthly Community Meeting",
    description:
      "Regular community meeting to discuss upcoming events, community issues, and organizational matters.",
    date: new Date("2025-11-30"),
    time: "4:00 PM - 8:00 PM",
    location: "Boyle Community Centre, 530 Charlotte Street, London, ON",
    image: "src/assets/Ken-30.jpeg",
    attendees: 50,
    category: "social",
  },
  {
    id: "4",
    title: "Preserving Igbo Nutritional Food Heritage",
    description:
      "The representative from the Ministry of Tourism, Culture and Gaming-Jo-Ann Hutchison (Regional Development Adviser) visited IALA Seniors).",
    date: new Date("2025-10-26"),
    time: "4:00 PM - 8:00 PM",
    location: "Boyle Community Centre, 530 Charlotte Street, London, ON",
    image: "src/assets/Seniors-Jo-Ann.jpg",
    attendees: 12,
    maxAttendees: 150,
    category: "IALA Seniors Project",
  },
  {
    id: "5",
    title: "Anti-Hate Security and Prevention Training",
    description:
      "Education and training for volunteers and community members of our organization on how to prevent and/or respond to hate-motivated incidents.",
    date: new Date("2025-08-31"),
    time: "4:00 PM - 8:00 PM",
    location: "Boyle Community Centre, 530 Charlotte Street, London, ON",
    image: "src/assets/Vimbayi-1.jpeg",
    attendees: 89,
    maxAttendees: 120,
    category: "Security",
  },
];

export const mockNews: NewsPost[] = [
  {
    id: "1",
    title: "IALA Train Members on Standard First Aid CPR+AED",
    excerpt:
      "As part of security initiatives, 12 members were trained to obtain the Standard First Aid CPR + AED.",
    content:
      "The Igbo Association of London and Area proudly marks its 15th anniversary this year...",
    date: new Date("2025-09-29"),
    author: "Dr. Kingsley Anukam",
    image: "src/assets/First-aid.jpg",
    category: "announcement",
  },
  {
    id: "2",
    title: "IALA secures funding from Canada Summer Job for two post-secondary students",
    excerpt:
      "Two exceptional students receive financial support for their post-secondary 2025 summer job through the CSJ program.",
    content:
      "We are proud to announce that our scholarship program has awarded...",
    date: new Date("2025-04-11"),
    author: "Dr. Kingsley Anukam",
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
    link: "https://www.youtube.com/watch?v=GbmhBK0WaRs",
  },
  {
    id: "4",
    title: "IALA partners with AfroBiome Foods Incorporated",
    excerpt:
      "IALA partners with AfroBiome Foods Incorporated to implement the Local Foods Infrastructure Program.",
    content:
      "We are excited to announce the launch of our community garden project...",
    date: new Date("2024-12-28"),
    author: "Dr. Kingsley Anukam",
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
