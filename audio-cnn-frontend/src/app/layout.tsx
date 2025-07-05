import "../styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "Audio CNN Visualizer",
  description: "An interactive web application that visualizes how Convolutional Neural Networks classify audio using the ESC-50 dataset. Upload audio files to see real-time predictions and explore the internal feature maps of each layer.",
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
