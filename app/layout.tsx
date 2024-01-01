import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tushar's Portfolio",
  description:
    "Hey, I am Tushar and this is my portfolio. Hope you like it . Don't forget to send a message from the website . Eager to hear from you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3242570291280498"
        ></script>
      </Head>
      <html lang="en">
        <body
          className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        >
          <Toaster />
          <StarsCanvas />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
