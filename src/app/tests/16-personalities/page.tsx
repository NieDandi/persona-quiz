"use client";

import { useState, useMemo } from "react";
import { questions } from "@/data/questions";
import { personalities, GROUP_COLORS } from "@/data/personalities";

interface Answers {
  [id: number]: "A" | "B";
}

export default function PersonalityTestPage() {
  const [answers, setAnswers] = useState<Answers>({});
  const [currentPage, setCurrentPage] = useState(0);
  const [result, setResult] = useState<string | null>(null);

  const questionsPerPage = 5;
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const pageQuestions = questions.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage);
  const progress = Math.round((Object.keys(answers).length / questions.length) * 100);

  const allCurrentAnswered = pageQuestions.every((q) => answers[q.id]);

  function handleAnswer(id: number, value: "A" | "B") {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function handleNext() {
    if (currentPage < totalPages - 1) {
      setCurrentPage((p) => p + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handlePrev() {
    if (currentPage > 0) {
      setCurrentPage((p) => p - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleSubmit() {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    const dimMap: Record<string, [string, string]> = { EI: ["E", "I"], SN: ["S", "N"], TF: ["T", "F"], JP: ["J", "P"] };

    for (const q of questions) {
      const ans = answers[q.id];
      if (!ans) continue;
      const [a, b] = dimMap[q.dimension];
      if (ans === "A") scores[a as keyof typeof scores]++;
      else scores[b as keyof typeof scores]++;
    }

    const type = [
      scores.E >= scores.I ? "E" : "I",
      scores.S >= scores.N ? "S" : "N",
      scores.T >= scores.F ? "T" : "F",
      scores.J >= scores.P ? "J" : "P",
    ].join("");

    setResult(type);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const resultData = useMemo(() => {
    if (!result) return null;
    return personalities.find((p) => p.code === result);
  }, [result]);

  if (resultData) {
    const color = GROUP_COLORS[resultData.group];
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    const dimMap: Record<string, [string, string]> = { EI: ["E", "I"], SN: ["S", "N"], TF: ["T", "F"], JP: ["J", "P"] };
    for (const q of questions) {
      const ans = answers[q.id];
      if (!ans) continue;
      const [a, b] = dimMap[q.dimension];
      if (ans === "A") scores[a as keyof typeof scores]++;
      else scores[b as keyof typeof scores]++;
    }

    const dims = [
      { left: "Extraverted", right: "Introverted", lKey: "E", rKey: "I", lVal: scores.E, rVal: scores.I },
      { left: "Sensing", right: "Intuitive", lKey: "S", rKey: "N", lVal: scores.S, rVal: scores.N },
      { left: "Thinking", right: "Feeling", lKey: "T", rKey: "F", lVal: scores.T, rVal: scores.F },
      { left: "Judging", right: "Perceiving", lKey: "J", rKey: "P", lVal: scores.J, rVal: scores.P },
    ];

    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">{resultData.emoji}</div>
          <h1 className="text-4xl font-extrabold mb-2" style={{ color }}>
            {resultData.code}
          </h1>
          <p className="text-2xl font-semibold mb-2">{resultData.name} — {resultData.alias}</p>
          <p className="text-slate-500 max-w-xl mx-auto">{resultData.shortDesc}</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-8">
          <h2 className="font-bold text-lg mb-4">Your Dimension Scores</h2>
          <div className="space-y-4">
            {dims.map((d) => {
              const total = d.lVal + d.rVal;
              const leftPct = Math.round((d.lVal / total) * 100);
              const rightPct = 100 - leftPct;
              const winner = d.lVal >= d.rVal ? "left" : "right";
              return (
                <div key={d.lKey}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={winner === "left" ? "font-bold" : "text-gray-400"}>
                      {d.left} ({d.lKey}) {leftPct}%
                    </span>
                    <span className={winner === "right" ? "font-bold" : "text-gray-400"}>
                      {rightPct}% ({d.rKey}) {d.right}
                    </span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden flex">
                    <div className="h-full rounded-full transition-all" style={{ width: `${leftPct}%`, backgroundColor: color }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-8">
          <h2 className="font-bold text-lg mb-3">About {resultData.code}</h2>
          <p className="text-slate-500 leading-relaxed">{resultData.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold mb-3">Strengths</h3>
            <ul className="space-y-1">
              {resultData.strengths.map((s) => (
                <li key={s} className="text-slate-500 flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold mb-3">Weaknesses</h3>
            <ul className="space-y-1">
              {resultData.weaknesses.map((w) => (
                <li key={w} className="text-slate-500 flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">!</span> {w}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center space-y-4">
          <a
            href={`/personality/${resultData.code.toLowerCase()}/`}
            className="inline-block font-bold text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            style={{ backgroundColor: color }}
          >
            Read Full {resultData.code} Profile →
          </a>
          <br />
          <button
            onClick={() => { setResult(null); setAnswers({}); setCurrentPage(0); }}
            className="text-sm text-slate-500 underline hover:text-indigo-600"
          >
            Retake the test
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold mb-2">16 Personalities Test</h1>
        <p className="text-slate-500">
          Answer all 60 questions honestly — there are no right or wrong answers.
        </p>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2 text-slate-500">
          <span>Progress</span>
          <span>{Object.keys(answers).length} / {questions.length}</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full gradient-bg rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {pageQuestions.map((q, i) => (
          <div key={q.id} className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="font-medium mb-4">
              <span className="text-indigo-500 mr-2">{q.id}.</span>
              {q.text}
            </p>
            <div className="grid gap-3">
              {(["A", "B"] as const).map((opt) => {
                const selected = answers[q.id] === opt;
                const text = opt === "A" ? q.optionA : q.optionB;
                return (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(q.id, opt)}
                    className={`text-left p-4 rounded-lg border-2 transition-all ${
                      selected
                        ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                        : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50"
                    }`}
                  >
                    {text}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="px-6 py-3 rounded-full border border-gray-300 font-medium disabled:opacity-30 hover:bg-gray-50 transition-colors"
        >
          ← Previous
        </button>
        <span className="text-sm text-slate-500">
          Page {currentPage + 1} / {totalPages}
        </span>
        {currentPage === totalPages - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={Object.keys(answers).length < questions.length}
            className="px-8 py-3 rounded-full gradient-bg text-white font-bold disabled:opacity-30 hover:opacity-90 transition-opacity"
          >
            See My Results
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={!allCurrentAnswered}
            className="px-6 py-3 rounded-full gradient-bg text-white font-medium disabled:opacity-30 hover:opacity-90 transition-opacity"
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}
