import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase/server";

// GET /api/leaderboard?type=alltime|weekly&limit=50
export async function GET(req: NextRequest) {
  const type = req.nextUrl.searchParams.get("type") ?? "alltime";
  const limit = Math.min(
    Number(req.nextUrl.searchParams.get("limit") ?? 50),
    100,
  );

  const supabase = createServerClient();
  let query = supabase
    .from("scores")
    .select("username, score, legacy_title, lang, created_at, week")
    .order("score", { ascending: false })
    .limit(limit);

  if (type === "weekly") {
    const now = new Date();
    const week = `${now.getFullYear()}-W${String(getWeekNumber(now)).padStart(2, "0")}`;
    query = query.eq("week", week);
  }

  const { data, error } = await query;

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ scores: data });
}

function getWeekNumber(d: Date): number {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}
