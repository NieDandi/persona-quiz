export interface QuizAnswers {
  [questionId: number]: "A" | "B";
}

export interface DimensionScores {
  E: number; I: number;
  S: number; N: number;
  T: number; F: number;
  J: number; P: number;
}

export function calculateResult(answers: QuizAnswers): {
  type: string;
  scores: DimensionScores;
  percentages: { EI: number; SN: number; TF: number; JP: number };
} {
  const scores: DimensionScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  const dimensionMap: Record<string, [string, string]> = {
    EI: ["E", "I"],
    SN: ["S", "N"],
    TF: ["T", "F"],
    JP: ["J", "P"],
  };

  const { questions } = require("@/data/questions");

  for (const q of questions) {
    const answer = answers[q.id];
    if (!answer) continue;
    const [letterA, letterB] = dimensionMap[q.dimension];
    if (answer === "A") {
      scores[letterA as keyof DimensionScores]++;
    } else {
      scores[letterB as keyof DimensionScores]++;
    }
  }

  const type = [
    scores.E >= scores.I ? "E" : "I",
    scores.S >= scores.N ? "S" : "N",
    scores.T >= scores.F ? "T" : "F",
    scores.J >= scores.P ? "J" : "P",
  ].join("");

  const total = 15;
  const percentages = {
    EI: Math.round((scores.E / total) * 100),
    SN: Math.round((scores.S / total) * 100),
    TF: Math.round((scores.T / total) * 100),
    JP: Math.round((scores.J / total) * 100),
  };

  return { type, scores, percentages };
}
