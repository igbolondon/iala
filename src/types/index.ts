export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  image?: string;
  attendees: number;
  maxAttendees?: number;
  category: "cultural" | "social" | "educational" | "fundraising";
  link?: string;
}

export interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: Date;
  author: string;
  image?: string;
  category: "announcement" | "community" | "cultural" | "event";
  link?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  type: "image" | "video";
  url: string;
  thumbnail?: string;
  date: Date;
  event?: string;
  link?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  fileSize: string;
  fileType: string;
  category: "bylaws" | "forms" | "minutes" | "newsletters";
  dateAdded: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "member" | "admin";
  membershipStatus: "active" | "inactive" | "pending";
}
