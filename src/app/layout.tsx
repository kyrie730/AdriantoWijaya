import { PageTitle } from "@/shared/Constant";
import "./globals.css";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import TopLoader from "nextjs-toploader";
import ApplicationProviders from "@/shared/Component/ApplicationProviders";

const FontConfig = League_Spartan({
  weight: ["300", "400", "700"],
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  variable: "--league-spartan",
});

export const metadata: Metadata = {
  title: PageTitle.Main,
  description: `I'm Adrianto Wijaya, people usually calls me Awe or Adri, but I prefer to be called as Awe on work environment. I'm currently a Fullstack Programmer at Bina Nusantara IT Division and I'm really interested on Frontend and Fullstack Development.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={FontConfig.className}>
        <TopLoader showSpinner color="#e25768" />
        <ApplicationProviders>{children}</ApplicationProviders>
      </body>
    </html>
  );
}
