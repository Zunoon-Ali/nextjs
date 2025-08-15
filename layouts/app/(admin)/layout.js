import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import AdminNavbar from "./adminComponents/adminNavbar";
import AdminFooter from "./adminComponents/adminFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin Facebook - collaborate with others",
  description: "Admin Facebook is a community app",
};

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminNavbar />
      {children}
      <AdminFooter />
    </>
  );
}
