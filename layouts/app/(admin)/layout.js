import { Geist, Geist_Mono } from "next/font/google";
import AdminNavbar from "./adminComponents/AdminNavbar";
import AdminFooter from "./adminComponents/AdminFooter";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <AdminNavbar />
        <main className="min-h-screen">{children}</main>
        <AdminFooter />
      </body>
    </html>
  );
}
