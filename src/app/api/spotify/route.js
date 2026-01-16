import { getNowPlaying } from "@/app/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
    const response = await getNowPlaying();

    return NextResponse.json(response);
}
