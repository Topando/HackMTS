import type { Metadata } from "next";
import "./globals.css";
import "../app/(components)/NavBar/index.css"
import Head from 'next/head';
import DashBoardWrapper from "./dashBoardWrapper";
import LogoBar from "./(components)/NavBar/logo";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;600&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <DashBoardWrapper>{children}</DashBoardWrapper>
      </body>
    </html>
  );
}