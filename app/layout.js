import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./component/navigation";
import Petir from "./component/petir";
import TopNav from "./component/Nvbar";
import Fotter from "./component/Fotter";
import NavBar from "./component/Nvbar";

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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <Navigation /> */}
        <NavBar />
        {/* <Petir /> */}
        <div className="container mx-auto px-4 relative flex inset-3 ">{children}</div>
        <Fotter />
      </body>
    </html>
  );
}
