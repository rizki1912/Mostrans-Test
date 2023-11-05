import Navigation from "@/component/Navbar";
import Footer from "@/component/Footer";
// import CharacterModule from "@/modules/characters";
import dynamic from "next/dynamic";

const CharacterModule = dynamic(() => import("@/modules/characters"));

export default function Home() {
  return (
    <>
      <Navigation />
      <CharacterModule />
      <Footer />
    </>
  );
}
