import { PageTitle } from "@/shared/Constant";
import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import TopLoader from "nextjs-toploader";
import ApplicationProviders from "@/shared/Component/ApplicationProviders";

const LatoConfig = Lato({
  weight: ["300", "400", "700"],
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: PageTitle.Main,
  description: `D'Gift`,
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
      <body className={LatoConfig.className}>
        <TopLoader showSpinner color="#C6A548" />
        <ApplicationProviders>{children}</ApplicationProviders>
      </body>
    </html>
  );
}
