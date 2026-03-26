export interface Question {
  id: number;
  text: string;
  dimension: "EI" | "SN" | "TF" | "JP";
  optionA: string;
  optionB: string;
}

export const questions: Question[] = [
  // E vs I (15 questions)
  { id: 1, text: "At a party, you tend to:", dimension: "EI", optionA: "Talk to many people, including strangers", optionB: "Talk mostly to people you already know" },
  { id: 2, text: "After a long week, you prefer to:", dimension: "EI", optionA: "Go out with friends to recharge", optionB: "Stay home alone or with one close person" },
  { id: 3, text: "When working on a project, you prefer:", dimension: "EI", optionA: "Brainstorming in a group", optionB: "Thinking through ideas on your own first" },
  { id: 4, text: "In social situations, you are more likely to:", dimension: "EI", optionA: "Initiate conversations", optionB: "Wait for others to approach you" },
  { id: 5, text: "You feel more energized when:", dimension: "EI", optionA: "Surrounded by people and activity", optionB: "In a quiet, peaceful environment" },
  { id: 6, text: "When making new friends, you:", dimension: "EI", optionA: "Easily open up and share about yourself", optionB: "Take time to gradually reveal personal details" },
  { id: 7, text: "In a meeting, you prefer to:", dimension: "EI", optionA: "Share your thoughts as they come", optionB: "Listen first and speak after careful thought" },
  { id: 8, text: "Your ideal weekend involves:", dimension: "EI", optionA: "Social activities and going out", optionB: "Quiet hobbies and personal time" },
  { id: 9, text: "When facing a problem, you first:", dimension: "EI", optionA: "Discuss it with others", optionB: "Reflect on it internally" },
  { id: 10, text: "You tend to have:", dimension: "EI", optionA: "A wide circle of acquaintances", optionB: "A small group of close friends" },
  { id: 11, text: "When learning something new, you prefer:", dimension: "EI", optionA: "Group discussions and interactive sessions", optionB: "Reading and studying independently" },
  { id: 12, text: "Others would describe you as:", dimension: "EI", optionA: "Outgoing and expressive", optionB: "Reserved and thoughtful" },
  { id: 13, text: "Phone calls from friends are:", dimension: "EI", optionA: "Welcome and enjoyable anytime", optionB: "Sometimes draining — you prefer texts" },
  { id: 14, text: "In a new environment, you:", dimension: "EI", optionA: "Quickly adapt and explore", optionB: "Observe carefully before engaging" },
  { id: 15, text: "Your communication style is more:", dimension: "EI", optionA: "Thinking out loud", optionB: "Thinking before speaking" },

  // S vs N (15 questions)
  { id: 16, text: "You pay more attention to:", dimension: "SN", optionA: "Details and facts", optionB: "Patterns and possibilities" },
  { id: 17, text: "When reading, you prefer:", dimension: "SN", optionA: "Realistic, practical content", optionB: "Imaginative, theoretical content" },
  { id: 18, text: "You trust more in:", dimension: "SN", optionA: "Direct experience and observation", optionB: "Intuition and gut feelings" },
  { id: 19, text: "When describing an event, you focus on:", dimension: "SN", optionA: "What actually happened", optionB: "What it means or symbolizes" },
  { id: 20, text: "You are more interested in:", dimension: "SN", optionA: "What is real and current", optionB: "What is possible and future" },
  { id: 21, text: "You prefer instructions that are:", dimension: "SN", optionA: "Step-by-step and detailed", optionB: "General guidelines with room for interpretation" },
  { id: 22, text: "In conversation, you prefer discussing:", dimension: "SN", optionA: "Concrete facts and events", optionB: "Abstract ideas and theories" },
  { id: 23, text: "When solving problems, you rely on:", dimension: "SN", optionA: "Proven methods and past experience", optionB: "New approaches and creative thinking" },
  { id: 24, text: "You would rather be known as:", dimension: "SN", optionA: "Practical and realistic", optionB: "Innovative and imaginative" },
  { id: 25, text: "When planning a trip, you focus on:", dimension: "SN", optionA: "Specific itinerary and logistics", optionB: "The overall experience and vibe" },
  { id: 26, text: "You find it easier to remember:", dimension: "SN", optionA: "Specific details and data", optionB: "General impressions and concepts" },
  { id: 27, text: "In school, you preferred:", dimension: "SN", optionA: "Hands-on labs and practical exercises", optionB: "Theory and conceptual discussions" },
  { id: 28, text: "You are more drawn to:", dimension: "SN", optionA: "Things that are tried and true", optionB: "Things that are novel and untested" },
  { id: 29, text: "When given a task, you first think about:", dimension: "SN", optionA: "The specific steps needed", optionB: "The big picture and end goal" },
  { id: 30, text: "You consider yourself more:", dimension: "SN", optionA: "Down-to-earth", optionB: "Head-in-the-clouds" },

  // T vs F (15 questions)
  { id: 31, text: "When making decisions, you prioritize:", dimension: "TF", optionA: "Logic and objectivity", optionB: "People's feelings and values" },
  { id: 32, text: "In a disagreement, you value:", dimension: "TF", optionA: "Being right and fair", optionB: "Maintaining harmony and connection" },
  { id: 33, text: "You are more impressed by:", dimension: "TF", optionA: "A logical, well-reasoned argument", optionB: "A heartfelt, passionate appeal" },
  { id: 34, text: "When a friend makes a mistake, you:", dimension: "TF", optionA: "Point it out directly and helpfully", optionB: "Consider their feelings before saying anything" },
  { id: 35, text: "You find it more important to be:", dimension: "TF", optionA: "Truthful, even if it hurts", optionB: "Tactful, even if it bends the truth" },
  { id: 36, text: "When evaluating a plan, you focus on:", dimension: "TF", optionA: "Whether it makes logical sense", optionB: "How it affects the people involved" },
  { id: 37, text: "You are better at:", dimension: "TF", optionA: "Analyzing data and finding flaws", optionB: "Understanding emotions and motivations" },
  { id: 38, text: "Others might see you as:", dimension: "TF", optionA: "Too blunt or critical sometimes", optionB: "Too soft or accommodating sometimes" },
  { id: 39, text: "In a team, you naturally take the role of:", dimension: "TF", optionA: "The one who identifies problems", optionB: "The one who keeps everyone motivated" },
  { id: 40, text: "When watching a movie, you are more engaged by:", dimension: "TF", optionA: "A clever plot with twists", optionB: "Deep emotional character development" },
  { id: 41, text: "Justice means:", dimension: "TF", optionA: "Treating everyone by the same standard", optionB: "Considering each person's unique situation" },
  { id: 42, text: "When giving feedback, you focus on:", dimension: "TF", optionA: "What needs to be improved objectively", optionB: "Encouraging strengths first" },
  { id: 43, text: "You would rather work with someone who is:", dimension: "TF", optionA: "Competent and efficient", optionB: "Kind and cooperative" },
  { id: 44, text: "You are more bothered by:", dimension: "TF", optionA: "Illogical or irrational behavior", optionB: "Insensitive or uncaring behavior" },
  { id: 45, text: "Your decisions are guided more by:", dimension: "TF", optionA: "Your head", optionB: "Your heart" },

  // J vs P (15 questions)
  { id: 46, text: "You prefer to:", dimension: "JP", optionA: "Have things decided and settled", optionB: "Keep your options open" },
  { id: 47, text: "Your workspace is usually:", dimension: "JP", optionA: "Neat and organized", optionB: "A bit cluttered but you know where things are" },
  { id: 48, text: "When it comes to deadlines:", dimension: "JP", optionA: "You finish well in advance", optionB: "You work best under last-minute pressure" },
  { id: 49, text: "Your daily routine is:", dimension: "JP", optionA: "Fairly structured and consistent", optionB: "Flexible and changes day to day" },
  { id: 50, text: "When making plans with friends:", dimension: "JP", optionA: "You like to plan ahead in detail", optionB: "You prefer to be spontaneous" },
  { id: 51, text: "You feel more comfortable when:", dimension: "JP", optionA: "Things are planned and predictable", optionB: "There is room for surprises" },
  { id: 52, text: "Starting a project, you:", dimension: "JP", optionA: "Create a plan before beginning", optionB: "Dive in and figure it out as you go" },
  { id: 53, text: "In your daily life, you:", dimension: "JP", optionA: "Follow to-do lists and schedules", optionB: "Go with the flow" },
  { id: 54, text: "When packing for a trip:", dimension: "JP", optionA: "You pack days ahead with a checklist", optionB: "You throw things together last minute" },
  { id: 55, text: "You prefer a work environment that is:", dimension: "JP", optionA: "Structured with clear expectations", optionB: "Flexible with room for improvisation" },
  { id: 56, text: "When shopping, you:", dimension: "JP", optionA: "Know what you need and stick to the list", optionB: "Browse and buy things that catch your eye" },
  { id: 57, text: "Unfinished tasks make you feel:", dimension: "JP", optionA: "Anxious — you want to complete them", optionB: "Fine — you will get to them eventually" },
  { id: 58, text: "Your approach to rules is:", dimension: "JP", optionA: "Rules exist for good reasons and should be followed", optionB: "Rules are guidelines that can be adapted" },
  { id: 59, text: "When unexpected changes occur:", dimension: "JP", optionA: "You feel stressed and want to re-plan", optionB: "You adapt easily and see new opportunities" },
  { id: 60, text: "You prefer a life that is:", dimension: "JP", optionA: "Well-organized and predictable", optionB: "Spontaneous and full of surprises" },
];
