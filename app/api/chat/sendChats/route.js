import Chat from "@/app/model/chat";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    // console.log("Received Chat Body:", body);
    await Chat.create(body);
    return NextResponse.json({ message: "Chat sent!" }, { status: 201 });
  } catch (error) {
    // console.error("Error sending chat:", error);
    return NextResponse.error({ message: error.message }, { status: 500 });
  }
}
