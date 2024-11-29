import type { Metadata } from "next";
import "./globals.css";
import "../app/(components)/NavBar/NavBar.css"
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
      <body
        
      >
        <DashBoardWrapper>{children}</DashBoardWrapper>
      </body>
    </html>
  );
}
