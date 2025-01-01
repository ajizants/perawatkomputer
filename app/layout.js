import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import Petir from "./components/petir";
import TopNav from "./components/Nvbar";
import Fotter from "./components/Fotter";
import NavBar from "./components/Nvbar";
import Jumbotron from "./components/jumbotron";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aji Santoso",
  description: "Perawat Komputer dan Videografi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900`}>
        <Jumbotron />
        <NavBar />
        <div className="min-h-screen container mx-auto bg-white dark:bg-gray-900">{children}</div>
        <Fotter />
      </body>
    </html>
  );
}
