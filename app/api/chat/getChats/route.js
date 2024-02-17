import Chat from "@/app/model/chat";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // console.log("Fetching chats...");
    const chats = await Chat.find().sort({ createdAt: -1 });
    // console.log("Retrieved Chats:", chats);
    return NextResponse.json(chats, { status: 200 });
  } catch (error) {
    console.error("Error fetching chats:", error);
    return NextResponse.error({ message: error.message }, { status: 500 });
  }
}
