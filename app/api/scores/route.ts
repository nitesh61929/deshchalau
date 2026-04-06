import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase/server";

// POST /api/scores — save score on game end
export async function POST(req: NextRequest) {
  const {
    player_id,
    username,
    score,
    legacy_title,
    lang,
    year_reached,
    game_over_reason,
  } = await req.json();

  if (!player_id || !username || score === undefined) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  const supabase = createServerClient();

  // Get current week string e.g. "2026-W14"
  const now = new Date();
  const week = `${now.getFullYear()}-W${String(getWeekNumber(now)).padStart(2, "0")}`;

  const [scoreResult, sessionResult] = await Promise.all([
    supabase
      .from("scores")
      .insert({
        player_id,
        username,
        score,
        legacy_title,
        lang,
        week,
      })
      .select()
      .single(),
    supabase
      .from("sessions")
      .insert({
        player_id,
        score,
        legacy_title,
        lang,
        year_reached: year_reached ?? 3,
        game_over_reason: game_over_reason ?? "completed",
      })
      .select()
      .single(),
  ]);

  if (scoreResult.error) {
    return NextResponse.json(
      { error: scoreResult.error.message },
      { status: 500 },
    );
  }

  return NextResponse.json({
    score: scoreResult.data,
    session: sessionResult.data,
  });
}

function getWeekNumber(d: Date): number {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}
