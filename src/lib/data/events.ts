export type Event = {
  id: string;
  title: string;
  description: string;
  logo: string;
  titleimg:string,
  image: string;
  date: string;
  time: string;
  venue: string;
  registerLink: string;
  category: "technical" | "cultural" | "quiz";
  coordinators: Array<{
    name: string;
    phone: string;
    email: string;
  }>;
};

export const eventsData: Event[] = [
  {
    id: "coding-event",
    title: "Coding Challenge",
    description: "Battle it out in the ultimate coding showdown. Solve mind-bending problems and prove your programming prowess.",
    logo: "/pfp/coding.png",
    titleimg:"/images/elevan.jpg",
    image: "/titles/coding event.png",
    date: "March 15, 2026",
    time: "10:00 AM - 2:00 PM",
    venue: "Computer Lab 1",
    registerLink: "https://forms.google.com/your-form-url",
    category: "technical",
    coordinators: [
      {
        name: "John Doe",
        phone: "9037152399",
        email: "john@epitome.com",
      },
      {
        name: "Sarah Johnson",
        phone: "9876543200",
        email: "sarah@epitome.com",
      },
    ],
  },
  {
    id: "cultural-event",
    title: "Cultural Fest",
    description: "Showcase your talents in dance, music, and drama. Light up the stage with your performance.",
     logo: "/pfp/cultural.png",
    titleimg:"/images/upsidedown.jpg",
    image: "/titles/cultural logo.png",
    date: "March 15, 2026",
    time: "3:00 PM - 6:00 PM",
    venue: "Main Auditorium",
    registerLink: "https://forms.google.com/your-form-url",
    category: "cultural",
    coordinators: [
      {
        name: "Jane Smith",
        phone: "9876543211",
        email: "jane@epitome.com",
      },
      {
        name: "Alex Kumar",
        phone: "9876543222",
        email: "alex@epitome.com",
      },
    ],
  },
  {
    id: "quiz-event",
    title: "Quiz Competition",
    description: "Test your general knowledge and quick thinking. Fast-paced questions across various topics.",
      logo: "/pfp/quiz.png",
    titleimg:"/pfp/elevan.jpg",
    image: "/titles/Quiz Event.png",
    date: "March 16, 2026",
    time: "11:00 AM - 1:00 PM",
    venue: "Seminar Hall",
    registerLink: "https://forms.google.com/your-form-url",
    category: "quiz",
    coordinators: [
      {
        name: "Mike Wilson",
        phone: "9876543212",
        email: "mike@epitome.com",
      },
      {
        name: "Priya Sharma",
        phone: "9876543233",
        email: "priya@epitome.com",
      },
    ],
  },
  {
    id: "coding-event-2",
    title: "Coding Challenge",
    description: "Battle it out in the ultimate coding showdown. Solve mind-bending problems and prove your programming prowess.",
    logo: "/pfp/coding.png",
    titleimg:"/images/elevan.jpg",
    image: "/titles/coding event.png",
    date: "March 15, 2026",
    time: "10:00 AM - 2:00 PM",
    venue: "Computer Lab 1",
    registerLink: "https://forms.google.com/your-form-url",
    category: "technical",
    coordinators: [
      {
        name: "John Doe",
        phone: "9876543210",
        email: "john@epitome.com",
      },
      {
        name: "Sarah Johnson",
        phone: "9876543200",
        email: "sarah@epitome.com",
      },
    ],
  },
  {
    id: "cultural-event-2",
    title: "Cultural Fest",
    description: "Showcase your talents in dance, music, and drama. Light up the stage with your performance.",
     logo: "/pfp/cultural.png",
    titleimg:"/images/upsidedown.jpg",
    image: "/titles/cultural logo.png",
    date: "March 15, 2026",
    time: "3:00 PM - 6:00 PM",
    venue: "Main Auditorium",
    registerLink: "https://forms.google.com/your-form-url",
    category: "cultural",
    coordinators: [
      {
        name: "Jane Smith",
        phone: "9876543211",
        email: "jane@epitome.com",
      },
      {
        name: "Alex Kumar",
        phone: "9876543222",
        email: "alex@epitome.com",
      },
    ],
  },
  {
    id: "quiz-event-2",
    title: "Quiz Competition",
    description: "Test your general knowledge and quick thinking. Fast-paced questions across various topics.",
      logo: "/pfp/quiz.png",
    titleimg:"/pfp/elevan.jpg",
    image: "/titles/Quiz Event.png",
    date: "March 16, 2026",
    time: "11:00 AM - 1:00 PM",
    venue: "Seminar Hall",
    registerLink: "https://forms.google.com/your-form-url",
    category: "quiz",
    coordinators: [
      {
        name: "Mike Wilson",
        phone: "9876543212",
        email: "mike@epitome.com",
      },
      {
        name: "Priya Sharma",
        phone: "9876543233",
        email: "priya@epitome.com",
      },
    ],
  },
  
];

export const EVENT_DATE = "March 10, 2026";
export const EVENT_VENUE = "St Aloysius Institute of Management and Information Technology";
