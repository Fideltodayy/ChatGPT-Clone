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
      <head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <link rel="icon" href={metadata.image} type="image/png" />
        {/* Add other head elements like stylesheets or scripts here */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
