import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SecureSight Dashboard",
  description: "Monitoring dashboard for CCTV incidents",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " before:900 text-white"}>
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}







