import Footer from "@/component/Footer";
import Navigation from "@/component/Navbar";
import dynamic from "next/dynamic";
import { Metadata } from "next";

const CharacterModule = dynamic(() => import("@/modules/characters"));

export const metadata: Metadata = {
  title: "Mostrans Test - Characters Page",
  description:
    "This is a test website for Mostrans frontend developers. This website was built with Nextjs14, bootstrap 4, recoil, and RestAPI",
};

export default function Home() {
  return (
    <>
      <Navigation />
      <CharacterModule />
      <Footer />
    </>
  );
}
