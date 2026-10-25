import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devon Barangan | Full-Stack Developer",
  description:
    "Full-stack engineer specializing in high-performance web applications, scalable cloud architecture, and intuitive user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-display antialiased" id="top">
        {children}
      </body>
    </html>
  );
}
