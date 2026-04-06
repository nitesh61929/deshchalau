import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase/server";
import { generateUsernameSuggestion } from "@/lib/game/username";

// GET /api/players/suggestions — 5 DB-verified available usernames
export async function GET() {
  const supabase = createServerClient();
  const suggestions: string[] = [];
  let attempts = 0;

  while (suggestions.length < 5 && attempts < 30) {
    attempts++;
    const candidate = generateUsernameSuggestion();
    const { data } = await supabase
      .from("players")
      .select("id")
      .eq("username", candidate)
      .single();
    if (!data) suggestions.push(candidate);
  }

  return NextResponse.json({ suggestions });
}
