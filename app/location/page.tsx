import Footer from "@/component/Footer";
import Navigation from "@/component/Navbar";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const LocationModule = dynamic(() => import("@/modules/locations"));

export const metadata: Metadata = {
  title: "Mostrans Test - Locations Page",
  description:
    "This is a test website for Mostrans frontend developers. This website was built with Nextjs14, bootstrap 4, recoil, and RestAPI",
};

export default function Home() {
  return (
    <>
      <Navigation />
      <LocationModule />
      <Footer />
    </>
  );
}
