import mongoose from "mongoose";

// Connecting to the database
try {
  mongoose.connect(process.env.MONGODB_URI ?? "MONGODB_URI is not defined");
  mongoose.Promise = global.Promise;
  console.log("Database connection established");
} catch (error) {
  console.error("Error connecting to the database:", error);
}

// Creating a schema
const chatSchema = new mongoose.Schema(
  {
    email: String,
    messages: Array,
  },
  { timestamps: true }
);

// Creating a model
const Chat = mongoose.models.Chat || mongoose.model("Chat", chatSchema);

export default Chat;
