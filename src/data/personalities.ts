export interface PersonalityType {
  code: string;
  name: string;
  alias: string;
  group: "analyst" | "diplomat" | "sentinel" | "explorer";
  groupName: string;
  emoji: string;
  shortDesc: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  careers: string[];
  compatibleTypes: string[];
  famousPeople: string[];
  faqs: { question: string; answer: string }[];
}

export const GROUP_COLORS: Record<string, string> = {
  analyst: "#88619a",
  diplomat: "#33a474",
  sentinel: "#4298b4",
  explorer: "#e4ae3a",
};

export const GROUP_NAMES: Record<string, string> = {
  analyst: "Analysts",
  diplomat: "Diplomats",
  sentinel: "Sentinels",
  explorer: "Explorers",
};

export const personalities: PersonalityType[] = [
  {
    code: "INTJ",
    name: "Architect",
    alias: "建筑师",
    group: "analyst",
    groupName: "Analysts",
    emoji: "🏛️",
    shortDesc: "Imaginative and strategic thinkers, with a plan for everything.",
    description:
      "INTJs are analytical problem-solvers, eager to improve systems and processes with their innovative ideas. They have a talent for seeing possibilities for improvement, whether at work, at home, or in themselves. INTJs are the most independent of all the 16 personality types and value autonomy and self-sufficiency above all.",
    strengths: ["Strategic thinking", "Independent", "Determined", "Innovative", "Knowledgeable"],
    weaknesses: ["Overly critical", "Dismissive of emotions", "Perfectionistic", "Socially reserved"],
    careers: ["Scientist", "Software Architect", "Investment Banker", "Professor", "Judge"],
    compatibleTypes: ["ENFP", "ENTP"],
    famousPeople: ["Elon Musk", "Christopher Nolan", "Michelle Obama"],
    faqs: [
      {
        question: "What does INTJ stand for?",
        answer:
          "INTJ stands for Introverted, Intuitive, Thinking, and Judging. These four letters describe a person who is energized by time alone, focuses on ideas and concepts, makes decisions based on logic, and prefers structure and planning.",
      },
      {
        question: "How rare is the INTJ personality type?",
        answer:
          "INTJ is one of the rarest personality types, making up about 2-4% of the general population. It is even rarer among women, with only about 1% of women typing as INTJ.",
      },
      {
        question: "What careers are best for INTJs?",
        answer:
          "INTJs excel in careers that require strategic thinking and independence, such as software architecture, scientific research, investment banking, engineering, and law. They thrive in roles where they can work autonomously and solve complex problems.",
      },
    ],
  },
  {
    code: "INTP",
    name: "Logician",
    alias: "逻辑学家",
    group: "analyst",
    groupName: "Analysts",
    emoji: "🔬",
    shortDesc: "Innovative inventors with an unquenchable thirst for knowledge.",
    description:
      "INTPs are philosophical innovators, fascinated by logical analysis, systems, and design. They are preoccupied with theory, and search for the universal law behind everything they see. They want to understand the unifying themes of life, in all their complexity.",
    strengths: ["Analytical", "Original", "Open-minded", "Curious", "Objective"],
    weaknesses: ["Absent-minded", "Insensitive", "Prone to self-doubt", "Difficulty with rules"],
    careers: ["Software Developer", "Mathematician", "Philosopher", "Data Analyst", "Forensic Scientist"],
    compatibleTypes: ["ENTJ", "ESTJ"],
    famousPeople: ["Albert Einstein", "Bill Gates", "Marie Curie"],
    faqs: [
      {
        question: "What does INTP stand for?",
        answer:
          "INTP stands for Introverted, Intuitive, Thinking, and Perceiving. INTPs are quiet, analytical individuals who prefer exploring ideas internally, focus on abstract concepts, make decisions based on logic, and maintain a flexible, adaptable lifestyle.",
      },
      {
        question: "How rare is the INTP personality type?",
        answer:
          "INTPs make up approximately 3-5% of the population. They are more common among men than women, with about 5% of men and 2% of women identifying as INTP.",
      },
      {
        question: "What careers are best for INTPs?",
        answer:
          "INTPs thrive in careers that involve abstract thinking and problem-solving such as software development, mathematics, data science, philosophy, and research. They prefer work environments with minimal bureaucracy and maximum intellectual freedom.",
      },
    ],
  },
  {
    code: "ENTJ",
    name: "Commander",
    alias: "指挥官",
    group: "analyst",
    groupName: "Analysts",
    emoji: "👑",
    shortDesc: "Bold, imaginative and strong-willed leaders, always finding a way.",
    description:
      "ENTJs are decisive people who love momentum and accomplishment. They gather information to construct their creative visions but rarely hesitate for long before acting on them. They are natural leaders who are able to identify inefficiencies and envision new solutions.",
    strengths: ["Efficient", "Energetic", "Self-confident", "Strong-willed", "Strategic"],
    weaknesses: ["Stubborn", "Intolerant", "Impatient", "Emotionally distant"],
    careers: ["CEO", "Entrepreneur", "Lawyer", "Management Consultant", "University Professor"],
    compatibleTypes: ["INFP", "INTP"],
    famousPeople: ["Steve Jobs", "Margaret Thatcher", "Napoleon Bonaparte"],
    faqs: [
      {
        question: "What does ENTJ stand for?",
        answer:
          "ENTJ stands for Extraverted, Intuitive, Thinking, and Judging. ENTJs are outgoing leaders who focus on the big picture, make decisions through logic, and prefer organized, structured environments.",
      },
      {
        question: "How rare is the ENTJ personality type?",
        answer:
          "ENTJs make up about 2-5% of the population. They are one of the rarer types and are more commonly found among men than women.",
      },
      {
        question: "What careers are best for ENTJs?",
        answer:
          "ENTJs excel as executives, entrepreneurs, lawyers, and management consultants. They are natural leaders who thrive in high-pressure environments where they can direct teams and drive strategic initiatives.",
      },
    ],
  },
  {
    code: "ENTP",
    name: "Debater",
    alias: "辩论家",
    group: "analyst",
    groupName: "Analysts",
    emoji: "⚡",
    shortDesc: "Smart and curious thinkers who cannot resist an intellectual challenge.",
    description:
      "ENTPs are inspired innovators, motivated to find new solutions to intellectually challenging problems. They are curious and clever, and seek to comprehend the people, systems, and principles that surround them.",
    strengths: ["Knowledgeable", "Quick thinker", "Charismatic", "Energetic", "Original"],
    weaknesses: ["Argumentative", "Insensitive", "Intolerant of routine", "Unfocused"],
    careers: ["Entrepreneur", "Lawyer", "Creative Director", "Venture Capitalist", "Journalist"],
    compatibleTypes: ["INFJ", "INTJ"],
    famousPeople: ["Mark Twain", "Thomas Edison", "Robert Downey Jr."],
    faqs: [
      {
        question: "What does ENTP stand for?",
        answer:
          "ENTP stands for Extraverted, Intuitive, Thinking, and Perceiving. ENTPs are energetic debaters who thrive on intellectual discussion, love exploring new ideas, and prefer keeping their options open.",
      },
      {
        question: "How rare is the ENTP personality type?",
        answer:
          "ENTPs make up approximately 3-5% of the general population. They are slightly more common among men than women.",
      },
      {
        question: "What careers are best for ENTPs?",
        answer:
          "ENTPs excel in careers that reward innovation and debate, such as entrepreneurship, law, journalism, creative direction, and venture capital. They need variety and intellectual stimulation to stay engaged.",
      },
    ],
  },
  {
    code: "INFJ",
    name: "Advocate",
    alias: "提倡者",
    group: "diplomat",
    groupName: "Diplomats",
    emoji: "🌟",
    shortDesc: "Quiet and mystical, yet very inspiring and tireless idealists.",
    description:
      "INFJs are creative nurturers with a strong sense of personal integrity and a drive to help others realize their potential. Creative and dedicated, they have a talent for helping others with original solutions to their personal challenges.",
    strengths: ["Insightful", "Principled", "Compassionate", "Idealistic", "Decisive"],
    weaknesses: ["Overly private", "Perfectionist", "Prone to burnout", "Sensitive to criticism"],
    careers: ["Counselor", "Psychologist", "Writer", "Human Resources Manager", "Social Worker"],
    compatibleTypes: ["ENTP", "ENFP"],
    famousPeople: ["Martin Luther King Jr.", "Mother Teresa", "Nelson Mandela"],
    faqs: [
      {
        question: "What does INFJ stand for?",
        answer:
          "INFJ stands for Introverted, Intuitive, Feeling, and Judging. INFJs are quiet visionaries who focus on the deeper meaning behind events, make decisions based on values, and prefer an organized approach to life.",
      },
      {
        question: "How rare is the INFJ personality type?",
        answer:
          "INFJ is widely considered the rarest personality type, making up only about 1-3% of the population. This rarity contributes to INFJs often feeling misunderstood.",
      },
      {
        question: "What careers are best for INFJs?",
        answer:
          "INFJs thrive in careers that allow them to help others grow, such as counseling, psychology, writing, social work, and human resources. They need meaningful work aligned with their values.",
      },
    ],
  },
  {
    code: "INFP",
    name: "Mediator",
    alias: "调停者",
    group: "diplomat",
    groupName: "Diplomats",
    emoji: "🦋",
    shortDesc: "Poetic, kind and altruistic people, always eager to help a good cause.",
    description:
      "INFPs are imaginative idealists, guided by their own core values and beliefs. To a Healer, possibilities are paramount; the reality of the moment is only of passing concern. They see potential for a better future, and pursue truth and meaning with their own flair.",
    strengths: ["Empathetic", "Creative", "Passionate", "Open-minded", "Idealistic"],
    weaknesses: ["Overly idealistic", "Self-isolating", "Emotionally vulnerable", "Unfocused"],
    careers: ["Writer", "Artist", "Counselor", "UX Designer", "Librarian"],
    compatibleTypes: ["ENTJ", "ENFJ"],
    famousPeople: ["William Shakespeare", "J.R.R. Tolkien", "Princess Diana"],
    faqs: [
      {
        question: "What does INFP stand for?",
        answer:
          "INFP stands for Introverted, Intuitive, Feeling, and Perceiving. INFPs are reflective dreamers who are guided by strong inner values, focus on possibilities, and prefer a flexible lifestyle.",
      },
      {
        question: "How rare is the INFP personality type?",
        answer:
          "INFPs make up about 4-5% of the general population. They are more common among women than men and are often found in creative and helping professions.",
      },
      {
        question: "What careers are best for INFPs?",
        answer:
          "INFPs excel as writers, artists, counselors, UX designers, and librarians. They need work that aligns with their personal values and allows creative self-expression.",
      },
    ],
  },
  {
    code: "ENFJ",
    name: "Protagonist",
    alias: "主人公",
    group: "diplomat",
    groupName: "Diplomats",
    emoji: "🎭",
    shortDesc: "Charismatic and inspiring leaders, able to mesmerize their listeners.",
    description:
      "ENFJs are idealist organizers, driven to implement their vision of what is best for humanity. They often act as catalysts for human growth because of their ability to see potential in other people and their charisma in persuading others to their ideas.",
    strengths: ["Charismatic", "Empathetic", "Reliable", "Natural leader", "Altruistic"],
    weaknesses: ["Overly idealistic", "Too selfless", "Sensitive", "Indecisive under stress"],
    careers: ["Teacher", "HR Director", "Life Coach", "Public Relations Manager", "Politician"],
    compatibleTypes: ["INFP", "ISFP"],
    famousPeople: ["Barack Obama", "Oprah Winfrey", "Malala Yousafzai"],
    faqs: [
      {
        question: "What does ENFJ stand for?",
        answer:
          "ENFJ stands for Extraverted, Intuitive, Feeling, and Judging. ENFJs are warm, empathetic leaders who focus on people's potential, make decisions based on values, and prefer organized plans.",
      },
      {
        question: "How rare is the ENFJ personality type?",
        answer:
          "ENFJs make up about 2-5% of the population. They are natural-born leaders who are relatively uncommon but highly influential in their communities.",
      },
      {
        question: "What careers are best for ENFJs?",
        answer:
          "ENFJs thrive as teachers, HR directors, life coaches, public relations managers, and in politics. They excel in roles where they can inspire and develop others.",
      },
    ],
  },
  {
    code: "ENFP",
    name: "Campaigner",
    alias: "竞选者",
    group: "diplomat",
    groupName: "Diplomats",
    emoji: "🌈",
    shortDesc: "Enthusiastic, creative and sociable free spirits who always find a reason to smile.",
    description:
      "ENFPs are people-centered creators with a focus on possibilities and a contagious enthusiasm for new ideas, people and activities. Energetic, warm, and passionate, ENFPs love to help other people explore their creative potential.",
    strengths: ["Curious", "Enthusiastic", "Excellent communicator", "Warm", "Creative"],
    weaknesses: ["Unfocused", "Disorganized", "Overly optimistic", "People-pleasing"],
    careers: ["Journalist", "Actor", "Marketing Manager", "Counselor", "Entrepreneur"],
    compatibleTypes: ["INTJ", "INFJ"],
    famousPeople: ["Robin Williams", "Robert Downey Jr.", "Walt Disney"],
    faqs: [
      {
        question: "What does ENFP stand for?",
        answer:
          "ENFP stands for Extraverted, Intuitive, Feeling, and Perceiving. ENFPs are enthusiastic, creative individuals who draw energy from social interaction, focus on future possibilities, and prefer spontaneity over rigid plans.",
      },
      {
        question: "How rare is the ENFP personality type?",
        answer:
          "ENFPs make up about 5-7% of the general population, making them one of the more common intuitive types. They are slightly more common among women than men.",
      },
      {
        question: "What careers are best for ENFPs?",
        answer:
          "ENFPs excel in careers that combine creativity with human interaction, such as journalism, acting, marketing, counseling, and entrepreneurship. They need variety and the freedom to explore new ideas.",
      },
    ],
  },
  {
    code: "ISTJ",
    name: "Logistician",
    alias: "物流师",
    group: "sentinel",
    groupName: "Sentinels",
    emoji: "📋",
    shortDesc: "Practical and fact-minded individuals, whose reliability cannot be doubted.",
    description:
      "ISTJs are responsible organizers, driven to create and enforce order within systems and institutions. They are neat and orderly, inside and out, and tend to have a procedure for everything they do.",
    strengths: ["Honest", "Responsible", "Calm", "Practical", "Methodical"],
    weaknesses: ["Stubborn", "Insensitive", "Judgmental", "Resistant to change"],
    careers: ["Accountant", "Auditor", "Military Officer", "Supply Chain Manager", "Systems Administrator"],
    compatibleTypes: ["ESFP", "ESTP"],
    famousPeople: ["George Washington", "Angela Merkel", "Warren Buffett"],
    faqs: [
      {
        question: "What does ISTJ stand for?",
        answer:
          "ISTJ stands for Introverted, Sensing, Thinking, and Judging. ISTJs are dependable, detail-oriented individuals who value tradition, focus on concrete facts, and prefer structured, organized environments.",
      },
      {
        question: "How rare is the ISTJ personality type?",
        answer:
          "ISTJs are one of the most common types, making up about 11-14% of the population. They form the backbone of many organizations and institutions.",
      },
      {
        question: "What careers are best for ISTJs?",
        answer:
          "ISTJs excel in careers that require attention to detail and reliability, such as accounting, auditing, military service, supply chain management, and systems administration.",
      },
    ],
  },
  {
    code: "ISFJ",
    name: "Defender",
    alias: "守卫者",
    group: "sentinel",
    groupName: "Sentinels",
    emoji: "🛡️",
    shortDesc: "Very dedicated and warm protectors, always ready to defend their loved ones.",
    description:
      "ISFJs are industrious caretakers, loyal to traditions and organizations. They are practical, compassionate, and caring, and are motivated to provide for others and protect them from the perils of life.",
    strengths: ["Supportive", "Reliable", "Patient", "Observant", "Loyal"],
    weaknesses: ["Overly humble", "Resistant to change", "Repressing feelings", "Overloaded"],
    careers: ["Nurse", "Elementary Teacher", "Social Worker", "Office Manager", "Bookkeeper"],
    compatibleTypes: ["ESFP", "ESTP"],
    famousPeople: ["Queen Elizabeth II", "Beyoncé", "Vin Diesel"],
    faqs: [
      {
        question: "What does ISFJ stand for?",
        answer:
          "ISFJ stands for Introverted, Sensing, Feeling, and Judging. ISFJs are warm, caring individuals who focus on practical details, make decisions based on personal values, and prefer a stable, organized life.",
      },
      {
        question: "How rare is the ISFJ personality type?",
        answer:
          "ISFJs are the most common personality type, making up approximately 9-14% of the population. They are especially common among women.",
      },
      {
        question: "What careers are best for ISFJs?",
        answer:
          "ISFJs thrive as nurses, teachers, social workers, office managers, and bookkeepers. They excel in roles where they can support and care for others in a structured environment.",
      },
    ],
  },
  {
    code: "ESTJ",
    name: "Executive",
    alias: "总经理",
    group: "sentinel",
    groupName: "Sentinels",
    emoji: "💼",
    shortDesc: "Excellent administrators, unsurpassed at managing things or people.",
    description:
      "ESTJs are hardworking traditionalists, eager to take charge in organizing projects and people. Orderly, rule-abiding, and conscientious, ESTJs like to get things done, and tend to go about projects in a systematic, methodical way.",
    strengths: ["Organized", "Dedicated", "Strong-willed", "Direct", "Loyal"],
    weaknesses: ["Inflexible", "Uncomfortable with unconventional situations", "Judgmental", "Difficulty relaxing"],
    careers: ["Business Manager", "Judge", "Financial Officer", "School Principal", "Police Officer"],
    compatibleTypes: ["INTP", "ISFP"],
    famousPeople: ["Sonia Sotomayor", "John D. Rockefeller", "Judge Judy"],
    faqs: [
      {
        question: "What does ESTJ stand for?",
        answer:
          "ESTJ stands for Extraverted, Sensing, Thinking, and Judging. ESTJs are outgoing, practical leaders who focus on facts, make logical decisions, and value order and tradition.",
      },
      {
        question: "How rare is the ESTJ personality type?",
        answer:
          "ESTJs make up about 8-12% of the population. They are one of the more common types and are often found in leadership and management positions.",
      },
      {
        question: "What careers are best for ESTJs?",
        answer:
          "ESTJs excel as business managers, judges, financial officers, school principals, and police officers. They thrive in positions of authority where clear rules and procedures exist.",
      },
    ],
  },
  {
    code: "ESFJ",
    name: "Consul",
    alias: "执政官",
    group: "sentinel",
    groupName: "Sentinels",
    emoji: "🤝",
    shortDesc: "Extraordinarily caring, social and popular people, always eager to help.",
    description:
      "ESFJs are conscientious helpers, sensitive to the needs of others and energetically dedicated to their responsibilities. They are highly attuned to their emotional environment and attentive to both the feelings of others and the perception others have of them.",
    strengths: ["Caring", "Loyal", "Sociable", "Practical", "Strong sense of duty"],
    weaknesses: ["Needy", "Sensitive to criticism", "Reluctant to improvise", "Selfless to a fault"],
    careers: ["Healthcare Worker", "Event Planner", "HR Specialist", "Receptionist", "Social Worker"],
    compatibleTypes: ["ISFP", "ISTP"],
    famousPeople: ["Taylor Swift", "Jennifer Garner", "Bill Clinton"],
    faqs: [
      {
        question: "What does ESFJ stand for?",
        answer:
          "ESFJ stands for Extraverted, Sensing, Feeling, and Judging. ESFJs are sociable, caring people who focus on concrete details, prioritize harmony in relationships, and prefer organized, predictable settings.",
      },
      {
        question: "How rare is the ESFJ personality type?",
        answer:
          "ESFJs are one of the most common types, making up about 9-13% of the population. They are especially prevalent among women.",
      },
      {
        question: "What careers are best for ESFJs?",
        answer:
          "ESFJs excel in healthcare, event planning, HR, reception, and social work. They thrive in people-oriented roles where they can create harmony and support others.",
      },
    ],
  },
  {
    code: "ISTP",
    name: "Virtuoso",
    alias: "鉴赏家",
    group: "explorer",
    groupName: "Explorers",
    emoji: "🔧",
    shortDesc: "Bold and practical experimenters, masters of all kinds of tools.",
    description:
      "ISTPs are observant artisans with an understanding of mechanics and an interest in troubleshooting. They approach their environments with a flexible logic, looking for practical solutions to the problems at hand.",
    strengths: ["Optimistic", "Creative", "Practical", "Spontaneous", "Rational"],
    weaknesses: ["Stubborn", "Insensitive", "Private", "Easily bored", "Risk-prone"],
    careers: ["Mechanic", "Engineer", "Pilot", "Forensic Scientist", "Software Developer"],
    compatibleTypes: ["ESFJ", "ESTJ"],
    famousPeople: ["Bruce Lee", "Clint Eastwood", "Michael Jordan"],
    faqs: [
      {
        question: "What does ISTP stand for?",
        answer:
          "ISTP stands for Introverted, Sensing, Thinking, and Perceiving. ISTPs are quiet, hands-on problem-solvers who focus on how things work, make decisions based on logic, and prefer spontaneous action over rigid plans.",
      },
      {
        question: "How rare is the ISTP personality type?",
        answer:
          "ISTPs make up about 4-6% of the population. They are more common among men and are known for their mechanical aptitude and calm problem-solving.",
      },
      {
        question: "What careers are best for ISTPs?",
        answer:
          "ISTPs thrive as mechanics, engineers, pilots, forensic scientists, and software developers. They need hands-on work with tangible results and the freedom to solve problems their own way.",
      },
    ],
  },
  {
    code: "ISFP",
    name: "Adventurer",
    alias: "探险家",
    group: "explorer",
    groupName: "Explorers",
    emoji: "🎨",
    shortDesc: "Flexible and charming artists, always ready to explore and experience something new.",
    description:
      "ISFPs are gentle caretakers who live in the present moment and enjoy their surroundings with cheerful, low-key enthusiasm. They are flexible and spontaneous, and like to go with the flow to enjoy what life has to offer.",
    strengths: ["Charming", "Sensitive", "Imaginative", "Passionate", "Artistic"],
    weaknesses: ["Fiercely independent", "Unpredictable", "Easily stressed", "Overly competitive"],
    careers: ["Graphic Designer", "Photographer", "Chef", "Veterinarian", "Fashion Designer"],
    compatibleTypes: ["ENFJ", "ESFJ"],
    famousPeople: ["Bob Dylan", "Frida Kahlo", "David Bowie"],
    faqs: [
      {
        question: "What does ISFP stand for?",
        answer:
          "ISFP stands for Introverted, Sensing, Feeling, and Perceiving. ISFPs are quiet, artistic souls who focus on the present moment, make decisions based on personal values, and prefer a flexible, spontaneous lifestyle.",
      },
      {
        question: "How rare is the ISFP personality type?",
        answer:
          "ISFPs make up about 5-9% of the population. They are often found in artistic and hands-on creative fields.",
      },
      {
        question: "What careers are best for ISFPs?",
        answer:
          "ISFPs excel as graphic designers, photographers, chefs, veterinarians, and fashion designers. They need creative freedom and work that engages their senses.",
      },
    ],
  },
  {
    code: "ESTP",
    name: "Entrepreneur",
    alias: "企业家",
    group: "explorer",
    groupName: "Explorers",
    emoji: "🏄",
    shortDesc: "Smart, energetic and very perceptive people who truly enjoy living on the edge.",
    description:
      "ESTPs are energetic thrillseekers who are at their best when putting out fires, whether literal or metaphorical. They bring a sense of dynamic energy to their interactions with others and the world around them.",
    strengths: ["Bold", "Rational", "Practical", "Perceptive", "Sociable"],
    weaknesses: ["Impatient", "Risk-prone", "Unstructured", "Defiant", "Insensitive"],
    careers: ["Sales Manager", "Paramedic", "Entrepreneur", "Detective", "Sports Coach"],
    compatibleTypes: ["ISFJ", "ISTJ"],
    famousPeople: ["Ernest Hemingway", "Madonna", "Donald Trump"],
    faqs: [
      {
        question: "What does ESTP stand for?",
        answer:
          "ESTP stands for Extraverted, Sensing, Thinking, and Perceiving. ESTPs are action-oriented realists who focus on the present, make quick logical decisions, and prefer to keep their options open for new experiences.",
      },
      {
        question: "How rare is the ESTP personality type?",
        answer:
          "ESTPs make up about 4-5% of the population. They are known for being energetic, adaptable, and drawn to excitement.",
      },
      {
        question: "What careers are best for ESTPs?",
        answer:
          "ESTPs thrive in sales, emergency services, entrepreneurship, detective work, and sports coaching. They need fast-paced environments with immediate, tangible results.",
      },
    ],
  },
  {
    code: "ESFP",
    name: "Entertainer",
    alias: "表演者",
    group: "explorer",
    groupName: "Explorers",
    emoji: "🎉",
    shortDesc: "Spontaneous, energetic and enthusiastic entertainers — life is never boring around them.",
    description:
      "ESFPs are vivacious entertainers who charm and engage those around them. They are spontaneous, energetic, and fun-loving, and take pleasure in the things around them: food, clothes, nature, animals, and especially people.",
    strengths: ["Bold", "Original", "Aesthetic sense", "Practical", "Excellent people skills"],
    weaknesses: ["Sensitive", "Easily bored", "Poor long-term planner", "Unfocused"],
    careers: ["Event Planner", "Tour Guide", "Actor", "Flight Attendant", "Fitness Trainer"],
    compatibleTypes: ["ISTJ", "ISFJ"],
    famousPeople: ["Marilyn Monroe", "Adele", "Jamie Oliver"],
    faqs: [
      {
        question: "What does ESFP stand for?",
        answer:
          "ESFP stands for Extraverted, Sensing, Feeling, and Perceiving. ESFPs are outgoing, fun-loving people who focus on present experiences, make decisions based on personal values, and prefer a spontaneous, flexible lifestyle.",
      },
      {
        question: "How rare is the ESFP personality type?",
        answer:
          "ESFPs make up about 4-9% of the population. They are one of the more common types among extraverts and are known for their vibrant, energetic personalities.",
      },
      {
        question: "What careers are best for ESFPs?",
        answer:
          "ESFPs excel as event planners, tour guides, actors, flight attendants, and fitness trainers. They thrive in social, dynamic roles where they can interact with people and stay active.",
      },
    ],
  },
];

export function getPersonalityByCode(code: string): PersonalityType | undefined {
  return personalities.find((p) => p.code.toLowerCase() === code.toLowerCase());
}
