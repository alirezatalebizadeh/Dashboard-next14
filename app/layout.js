import { Inter } from "next/font/google";
import "./ui/globals.css";
import "./ui/css-reset.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard Next14 Tutorial",
  description: "This is practice for Next14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg text-white">{children}</body>
    </html>
  );
}
