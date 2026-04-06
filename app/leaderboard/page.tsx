"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ScoreEntry {
  username: string;
  score: number;
  legacy_title: string;
  created_at: string;
}

export default function LeaderboardPage() {
  const [tab, setTab] = useState<"alltime" | "weekly">("alltime");
  const [scores, setScores] = useState<ScoreEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/leaderboard?type=${tab}&limit=50`)
      .then((r) => r.json())
      .then((data) => {
        setScores(data.scores ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [tab]);

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2">🏆 Leaderboard</h1>
      <p className="text-zinc-400 text-center mb-6">शीर्ष प्रधानमन्त्रीहरू</p>

      {/* Tabs */}
      <div className="flex gap-2 justify-center mb-6">
        {(["alltime", "weekly"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-2 rounded-full font-semibold transition-all ${
              tab === t
                ? "bg-green-600 text-white"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
            }`}
          >
            {t === "alltime" ? "🌏 All-time" : "📅 This Week"}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center text-zinc-400 py-12">Loading...</div>
      ) : scores.length === 0 ? (
        <div className="text-center text-zinc-500 py-12">
          No scores yet. Be the first!
        </div>
      ) : (
        <div className="space-y-2">
          {scores.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
              className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3"
            >
              <span className="text-2xl w-8 text-center">
                {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i + 1}.`}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-mono font-bold truncate">{entry.username}</p>
                <p className="text-zinc-400 text-sm truncate">
                  {entry.legacy_title}
                </p>
              </div>
              <span className="text-green-400 font-bold text-lg">
                {entry.score}
              </span>
            </motion.div>
          ))}
        </div>
      )}
    </main>
  );
}
