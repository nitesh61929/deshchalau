"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePlayerStore } from "@/lib/stores/playerStore";
import { getClientSuggestions } from "@/lib/game/username";

interface UsernameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

type CheckStatus = "idle" | "checking" | "available" | "taken" | "returning";

export function UsernameModal({
  isOpen,
  onClose,
  onConfirm,
}: UsernameModalProps) {
  const { setPlayer, lang } = usePlayerStore();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>("");
  const [customInput, setCustomInput] = useState<string>("");
  const [checkStatus, setCheckStatus] = useState<CheckStatus>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isNepali = lang === "np";

  useEffect(() => {
    if (isOpen) {
      loadSuggestions();
    }
  }, [isOpen]);

  async function loadSuggestions() {
    try {
      // Try DB-verified suggestions first
      const res = await fetch("/api/players/suggestions");
      const data = await res.json();
      setSuggestions(data.suggestions ?? getClientSuggestions());
    } catch {
      setSuggestions(getClientSuggestions());
    }
  }

  const activeUsername = customInput.trim() || selected;

  // Debounced check
  useEffect(() => {
    if (!customInput.trim()) {
      setCheckStatus("idle");
      return;
    }
    setCheckStatus("checking");
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(
          `/api/players/check?username=${encodeURIComponent(customInput.trim())}`,
        );
        const data = await res.json();
        setCheckStatus(
          data.returning ? "returning" : data.available ? "available" : "taken",
        );
      } catch {
        setCheckStatus("idle");
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [customInput]);

  async function handleStart() {
    if (!activeUsername) return;
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/players", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: activeUsername, lang }),
      });
      const data = await res.json();

      if (res.status === 409) {
        setError(
          isNepali ? "यो username लिइसकिएको छ!" : "Username already taken!",
        );
        return;
      }
      if (!res.ok) {
        setError(
          isNepali
            ? "केही गलत भयो। फेरि प्रयास गर्नुस्।"
            : "Something went wrong. Try again.",
        );
        return;
      }

      setPlayer(data.player.id, data.player.username);
      onConfirm();
    } catch {
      setError(isNepali ? "Network error!" : "Network error!");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 w-full max-w-md shadow-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            <h2 className="text-2xl font-bold text-white mb-1">
              {isNepali ? "👤 तपाईंको नाम छान्नुस्" : "👤 Choose Your Name"}
            </h2>
            <p className="text-zinc-400 text-sm mb-5">
              {isNepali
                ? "यो नाम सधैंको लागि हो — सोचेर छान्नुस्!"
                : "This name is permanent — choose wisely!"}
            </p>

            {/* Suggestions */}
            <p className="text-zinc-400 text-xs uppercase tracking-wider mb-2">
              {isNepali ? "सुझाव" : "Suggestions"}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setSelected(s);
                    setCustomInput("");
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-mono transition-all ${
                    selected === s && !customInput
                      ? "bg-green-600 text-white"
                      : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                  }`}
                >
                  {s}
                </button>
              ))}
              <button
                onClick={loadSuggestions}
                className="px-3 py-1.5 rounded-lg text-sm bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              >
                🔄
              </button>
            </div>

            {/* Custom input */}
            <p className="text-zinc-400 text-xs uppercase tracking-wider mb-2">
              {isNepali ? "वा आफ्नो टाइप गर्नुस्" : "Or type your own"}
            </p>
            <div className="relative mb-1">
              <input
                type="text"
                value={customInput}
                onChange={(e) => {
                  setCustomInput(e.target.value);
                  setSelected("");
                }}
                placeholder={
                  isNepali ? "आफ्नो username..." : "Your username..."
                }
                maxLength={30}
                className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-green-500 transition-colors"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm">
                {checkStatus === "checking" && (
                  <span className="text-zinc-400">⏳</span>
                )}
                {checkStatus === "available" && (
                  <span className="text-green-400">✅</span>
                )}
                {checkStatus === "taken" && (
                  <span className="text-red-400">❌</span>
                )}
                {checkStatus === "returning" && (
                  <span className="text-blue-400">👋</span>
                )}
              </div>
            </div>

            {/* Status message */}
            <div className="h-5 mb-4 text-sm">
              {checkStatus === "available" && (
                <span className="text-green-400">
                  {isNepali ? "उपलब्ध छ ✅" : "Available ✅"}
                </span>
              )}
              {checkStatus === "taken" && (
                <span className="text-red-400">
                  {isNepali ? "लिइसकिएको छ ❌" : "Already taken ❌"}
                </span>
              )}
              {checkStatus === "returning" && (
                <span className="text-blue-400">
                  {isNepali
                    ? `स्वागत छ, ${customInput}! 👋`
                    : `Welcome back, ${customInput}! 👋`}
                </span>
              )}
              {error && <span className="text-red-400">{error}</span>}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-zinc-800 text-zinc-400 hover:bg-zinc-700 transition-colors"
              >
                {isNepali ? "रद्द गर्नुस्" : "Cancel"}
              </button>
              <button
                onClick={handleStart}
                disabled={
                  !activeUsername || checkStatus === "taken" || isSubmitting
                }
                className="flex-1 py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting
                  ? isNepali
                    ? "लोड हुँदैछ..."
                    : "Loading..."
                  : isNepali
                    ? "▶ खेल सुरु गर्नुस्"
                    : "▶ Start Playing"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
