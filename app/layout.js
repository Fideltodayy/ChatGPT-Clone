import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fidibot | CHatGPT clone",
  description:
    "Fidibot will help you with your tasks and  answer most if not all of your queries. You can use fidibot as a chatGPT alternative.",
  image: "openai.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
