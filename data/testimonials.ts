export type Testimonial = {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  avatar?: string;
  category: "student" | "colleague" | "mentor" | "client";
  link?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Rajesh Kumar",
    role: "Senior Research Scientist",
    organization: "Indian Institute of Technology",
    content: "Satyam's work on sovereign technology frameworks demonstrates exceptional vision. His ability to bridge theoretical concepts with practical implementation sets a new standard for technological independence.",
    category: "mentor",
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "Full Stack Developer",
    organization: "Tech Innovations Lab",
    content: "Working alongside Satyam on distributed systems projects was incredibly enlightening. His approach to problem-solving and commitment to clean, efficient code is exemplary.",
    category: "colleague",
  },
  {
    id: "t3",
    name: "Alex Chen",
    role: "Graduate Student",
    organization: "Computer Science Department",
    content: "As a teaching assistant, Satyam had an incredible ability to break down complex concepts into understandable components. His passion for teaching inspired many of us to pursue advanced computing.",
    category: "student",
  },
  {
    id: "t4",
    name: "Meera Patel",
    role: "Technology Director",
    organization: "Digital India Initiative",
    content: "The sovereign-tech framework developed by Satyam has become a cornerstone in our approach to technological self-reliance. His contributions to India's tech ecosystem are truly remarkable.",
    category: "client",
  },
  {
    id: "t5",
    name: "Prof. Sarah Williams",
    role: "Department Head",
    organization: "Institute of Advanced Computing",
    content: "Satyam's research in distributed systems and his commitment to open-source development have significantly influenced our curriculum. He represents the next generation of technology leaders.",
    category: "mentor",
  }
] as const;
