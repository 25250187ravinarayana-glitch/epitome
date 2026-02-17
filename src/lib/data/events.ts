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
  category: "coding and debugging" | "cultural" | "quiz" | "gaming" | "surprise"|"web designing";
  teamSize: string; // Team size information
  rules: string[]; // Array of rule strings for bullet points
  coordinators: Array<{
    name: string;
    phone: string;
    email: string;
  }>;
  staffcoordinators: Array<{
    name: string;
    phone: string;
    email: string;
  }>;
};

const REGISTRATION_LINK = process.env.NEXT_PUBLIC_REGISTRATION_LINK || "https://forms.google.com/your-form-url";

export const eventsData: Event[] = [
  {
    id: "stranger-screens",
    title: "Stranger Screens",
    description:
      "Step into the world where creativity meets technology! The Web Designing event challenges you to transform ideas into visually stunning and user-friendly websites. Whether you're a beginner or a passionate designer, this is your chance to showcase your design thinking, layout skills and front-end creativity under exciting real-world challenges. Work as a team, think fast, design smart and let your website speak for you.",
    logo: "/pfp/Webpfp.png",
    titleimg: "/titles/webevent.png",
    image: "/images/web.png",
    date: "March 10, 2026",
    time: "",
    venue: "",
    registerLink: REGISTRATION_LINK,
    category: "web designing",
    teamSize: "2 members",
    rules: [
      "Participants must report on time for all rounds",
      "All participants must use Visual Studio Code (VS Code) as their code editor/IDE for this event",
      "Participants must have knowledge and only use HTML, CSS, and JavaScript",
      "The rounds and design tasks will be provided on the spot",
      "Electronic gadgets are not allowed",
      "Use of Claude code, codex are prohibited",
      "AI tools are allowed for this event, and more detailed guidelines regarding their usage will be shared during the event",
      "Judges' decisions are final and cannot be challenged",
      "Violation of any rule would lead to disqualification"
    ],
    coordinators: [
      {
        name: "Cherish John Pinto",
        phone: "7892120181",
        email: "",
      },
      {
        name: "Pratheeksha",
        phone: "9686039761",
        email: "",
      },
      {
        name: "Sathwik",
        phone: "8884852258",
        email: "",
      },
      {
        name: "Jasmine Sonia",
        phone: "7090061862",
        email: "",
      },
      
    ],
    staffcoordinators:[
      {
        name: "Dr. Srinivas B.L",
        phone: "",
        email: "",
      },
      {
        name: "Ms. Nausheeda B.S",
        phone: "",
        email: "",
      },
    ],
  },
  {
    id: "arcade-lab-1986",
    title: "The ARCADE LAB 1986",
    description:
      "Enter the ultimate arena where skill and strategy collide! The ARCADE LAB 1986 brings together competitive esports fans to battle it out in BGMI, FIFA and Mortal Kombat 11. Games Included: BGMI (Mobile), FIFA (Console), Mortal Kombat 11 (PC).",
    logo: "/pfp/gamingpfp.png",
    titleimg: "/titles/gamingevent.png",
    image: "/images/gaming.png",
    date: "March 10, 2026",
    time: "",
    venue: "",
    registerLink: REGISTRATION_LINK,
    category: "gaming",
    teamSize: "4 members",
    rules: [
      "Gaming tournament featuring three titles: BGMI, FIFA, and Mortal Kombat",
      "Includes one mobile game (BGMI), one PC game (FIFA), and one console game (Mortal Kombat)",
      "Total 24 teams allowed to participate",
      "Each team must have 4 members",
      "All teams will compete in all three games",
      "BGMI: full 4-member squad participates",
      "FIFA & Mortal Kombat: team must split into two pairs (2 players each)",
      "One pair will play FIFA and the other pair will play Mortal Kombat",
      "No custom controllers allowed (standard provided equipment only)",
      "Participants are requested to bring their own peripherals such as headsets, finger gloves, and any other accessories as per their choice.",
      "Participants must report on time",
      "Players must use their own devices for mobile games",
      "Detailed rules will be shared on the spot before registration",
      "No cheating or unfair play",
      "Organizers' decisions are final"
    ],
    coordinators: [
      
      {
        name: "Pokhraj Sarkar",
        phone: "7604027123",
        email: "",
      },
      {
        name: "Henston D Souza",
        phone: "8123265357",
        email: "",
      },
      {
        name: "Ansel Monteiro",
        phone: "8921636379",
        email: "",
      },
      {
        name: "Nihal Bekal",
        phone: "9380657500",
        email: "",
      },
    ],
    staffcoordinators:[{
        name: "Mr Brill Brenhill",
        phone: "",
        email: "",
      },],
  },
  {
    id: "eleven-bytes",
    title: "Eleven Bytes",
    description:
      "In the depths of a forgotten digital vault, fragments of logic lie scattered like hidden treasure. Eleven Bytes challenges participants to move beyond ordinary coding and navigate encrypted patterns, layered puzzles, and concealed reasoning. Every line holds a clue, every output carries meaning, and only precise thinking can unlock the path forward. This is not just problem-solving—it is a strategic hunt through logic, where clarity, accuracy, and composure lead to the ultimate prize: mastery over complexity.",
    logo: "/pfp/codingpfp.png",
    titleimg: "/titles/coding event.png",
    image: "/images/code.png",
    date: "March 10, 2026",
    time: "",
    venue: "",
    registerLink: REGISTRATION_LINK,
    category: "coding and debugging",
    teamSize: "2 members",
    rules: [
      "Participants must have knowledge of programming languages such as c, python and java",
      "Any form of malpractice will lead to immediate disqualification",
      "Usage of electronic devices are strictly prohibited when the event commences.",
      "Personal laptops are not required",
      "The judges’ decision will be final."
    ],
    coordinators: [
      {
        name: "Ravinarayana U",
        phone: "9037152399",
        email: "",
      },
      {
        name: "K S Panka",
        phone: "8550855771",
        email: "",
      },
      {
        name: "Merel Riha Dsouza",
        phone: "7259177448",
        email: "",
      },
    ],
    staffcoordinators:[
      {
        name: "Dr Santhosh B",
        phone: "",
        email: "",
      },
      {
        name:"Dr Jeevan L j Pinto",
        phone: "",
        email: "",
      }
    ],
  },
  {
    id: "upside-down-rhythms",
    title: "Upside Down Rhythms: Waves of Rhythm, Steps of Grace",
    description:
      "The Cultural Runway is a vibrant celebration that blends the elegance of a fashion showcase with the energy of dance. Each team represents an Indian state or cultural theme through authentic traditional attire and expressive performances. The event begins with participants walking the ramp, presenting the beauty and heritage of their cultural costumes. This is followed by a lively dance performance that reflects the music, spirit, and identity of their chosen tradition. Bringing together fashion, rhythm, and culture on one stage, The Cultural Runway celebrates India's unity in diversity in a colorful and captivating showcase.",
    logo: "/pfp/culturalpfp.png",
    titleimg: "/titles/cultural logo.png",
    image: "/images/dance.png",
    date: "March 10, 2026",
    time: "",
    venue: "",
    registerLink: REGISTRATION_LINK,
    category: "cultural",
    teamSize: "6-10 members",
    rules: [
      "A team can consist of minimum 6 and maximum 10 members",
      "Total time limit is 5 minutes (1 minute for stage preparation and 4 minutes for performance)",
      "Exceeding the time limit will lead to negative marking",
      "Audio should be submitted to the desk prior to the performance in a pen drive. A copy must be submitted 3 days prior to the event",
      "Props are allowed, but they must be safe and easy to handle",
      "Use of fire, water, fireworks, glass, sharp objects, or any hazardous materials is strictly prohibited",
      "Costumes should be decent and appropriate as per college guidelines",
      "Vulgar moves, inappropriate expressions, or offensive content are strictly prohibited",
      "Participants must maintain discipline on and off the stage",
      "All participants must report at least 30 minutes before the event"
    ],
    coordinators: [
      {
        name: "Parvathi Dinesh Poduval",
        phone: "9663176291",
        email: "",
      },
      {
        name: "Anwitha JK",
        phone: "9353613678",
        email: "",
      },
      {
        name: "Aikhya",
        phone: "9980191508",
        email: "",
      },
      {
        name: "Sampreetha",
        phone: "8861173965",
        email: "",
      },
      {
        name: "Yajna J Shetty",
        phone: "9901988021",
        email: "",
      },
      
    ],
    staffcoordinators:[
      {
        name: "Dr Rakesh Kumar B",
        phone: "9844198603",
        email: "",
      },
      {
        name: "Ms Annapoorna Shetty",
        phone: "",
        email: "",
      },],
  },
  {
    id: "cipher-void",
    title: "CIPHER VOID (IT Quiz)",
    description:
      "Step into the ultimate arena of intellect with the IT Quiz — a high-energy competition crafted to challenge your technical expertise, analytical skills, and presence of mind. Expect the unexpected as the quiz evolves with twists that test not just knowledge, but strategy and smart decision-making under pressure.",
    logo: "/pfp/quizpfp.png",
    titleimg: "/titles/Quiz Event.png",
    image: "/images/quiz.png",
    date: "March 10, 2026",
    time: "",
    venue: "",
    registerLink: REGISTRATION_LINK,
    category: "quiz",
    teamSize: "2 members",
    rules: [
      "The quiz will be conducted in 2 rounds",
      "The structure and rules of each round will be explained before it begins",
      "The decision of the Quiz Master and organizing committee will be final",
      "Participation is open to students as per the event eligibility criteria",
      "A valid College ID card is mandatory",
      "Teams must report at least 30 minutes before the scheduled start time",
      "Late reporting may lead to disqualification",
      "No substitution of team members is allowed once the event begins",
      "Use of mobile phones, smart watches, or any electronic devices is strictly prohibited unless permitted for a specific round",
      "Internet access is not allowed unless specified by the organizers",
      "Any form of malpractice or unfair means will result in immediate disqualification",
      "Correct answers will be awarded positive marks",
      "Negative marking may be applicable in certain rounds",
      "In case of a tie, a tie-breaker or sudden-death round will be conducted"
    ],
    coordinators: [
      
      {
        name: "MS AARLYN RIONA LOBO",
        phone: "7795928064",
        email: "",
      },
      {
        name: "MS SEDHULAXSHMI M S",
        phone: "9945162147",
        email: "",
      },
      {
        name: "MR CHARAN KUMAR",
        phone: "7676331186",
        email: "",
      },
    ],
    staffcoordinators:[{
        name: "MS VANITHA T",
        phone: "9964412532",
        email: "",
      },
      {
        name: "MS ANJU",
        phone: "",
        email: "",
      },],
  },
  {
    id: "the-final-gate",
    title: "The Final Gate",
    description:
      "A surprise mystery event ",
    logo: "/pfp/suprisepfp.png",
    titleimg: "/titles/surprise logo.png",
    image: "/images/surprise.png",
    date: "March 10, 2026",
    time: "",
    venue: "",
    registerLink: REGISTRATION_LINK,
    category: "surprise",
    teamSize: "2 members",
    rules: [
      "On-the-spot mystery challenges will be conducted across both rounds",
      "All tasks are time-bound and require quick thinking and teamwork",
      "Use of mobile phones or any electronic gadgets is strictly prohibited",
      "Any form of misconduct, cheating, or unfair play will lead to immediate disqualification",
      "Judges' decisions are final and binding"
    ],
    coordinators: [
      
      {
        name: "Bangera Shifali",
        phone: "9353159425",
        email: "",
      },
      {
        name: "Roshani Shetty",
        phone: "8147450676",
        email: "",
      },
      {
        name: "Sharanya K",
        phone: "8951460055",
        email: "",
      },
      {
        name: "Thabish Muhammad",
        phone: "7483478204",
        email: "",
      },
    ],
    staffcoordinators:[{
        name: "Ms Amita V",
        phone: "8762573988",
        email: "",
      },
      {
        name: "Ms Christina",
        phone: "",
        email: "",
      },
      {
        name: "Mr Bharath",
        phone: "",
        email: "",
      },],
  },
];



export const EVENT_DATE = "March 10, 2026";
export const EVENT_VENUE = "St Aloysius Institute of Management and Information Technology";
