import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase/server";

// POST /api/players — create new player
export async function POST(req: NextRequest) {
  const { username, lang } = await req.json();

  if (!username || username.length < 3 || username.length > 30) {
    return NextResponse.json({ error: "invalid_username" }, { status: 400 });
  }

  const supabase = createServerClient();

  // Check existing
  const { data: existing } = await supabase
    .from("players")
    .select("id, username")
    .eq("username", username)
    .single();

  if (existing) {
    // Returning player — return their data
    return NextResponse.json({ player: existing, returning: true });
  }

  // New player
  const { data, error } = await supabase
    .from("players")
    .insert({ username, lang: lang ?? "np" })
    .select()
    .single();

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ error: "username_taken" }, { status: 409 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ player: data, returning: false }, { status: 201 });
}
