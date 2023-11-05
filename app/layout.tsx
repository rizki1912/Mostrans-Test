import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { openGraphImage } from "./image-metadata";
import BootstrapClient from "@/component/BootstrapClient";
import Provider from "@/component/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mostrans Test",
  description:
    "This is a test website for Mostrans frontend developers. This website was built with Nextjs14, bootstrap 4, recoil, and RestAPI",
  openGraph: {
    ...openGraphImage,
    title: "Mostrans Test",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children} <BootstrapClient />
        </Provider>
      </body>
    </html>
  );
}
