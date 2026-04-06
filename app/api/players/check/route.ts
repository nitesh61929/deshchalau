import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase/server";

// GET /api/players/check?username=SitaNeta_07
export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get("username");
  if (!username) return NextResponse.json({ available: false });

  const supabase = createServerClient();
  const { data } = await supabase
    .from("players")
    .select("id")
    .eq("username", username)
    .single();

  return NextResponse.json({
    available: !data,
    returning: !!data,
  });
}
