import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

import RegisterSWClient from "./register-sw-client";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Emerging Leaders - Admin",
  description: "Admin dashboard for Emerging Leaders",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.className}`}>
        <RegisterSWClient /> {/* Client code runs here */}
        {children}
        {/* <Toaster
          position="top-right"
          closeButton
          toastOptions={{
            classNames: {
              toast:
                "bg-white border border-l-2 border-l-error border-gray-200 shadow-lg rounded-2xl flex items-center justify-between gap-4 p-4 mt-14 mr-5",
              title: "text-gray-900 font-semibold",
              description: "text-red-600 text-sm",
              actionButton:
                "bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition",
              cancelButton:
                "bg-gray-100 text-gray-600 px-3 py-1 rounded-lg hover:bg-gray-200",
              closeButton:
                "ml-auto self-center text-gray-400 hover:text-gray-600 transition",
            },
          }}
        /> */}
        <Toaster
          position="top-right"
          closeButton
          toastOptions={{
            classNames: {}, // remove global styling
          }}
        />
      </body>
    </html>
  );
}
