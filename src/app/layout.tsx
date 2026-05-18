import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Rajat Lohan | Full Stack Developer",
  description: "Modern Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-black text-white overflow-x-hidden">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}