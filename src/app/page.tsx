import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Cornerstone from "@/components/sections/Cornerstone";
import Series from "@/components/sections/Series";
import LeadMagnet from "@/components/sections/LeadMagnet";
import Passage from "@/components/sections/Passage";
import Author from "@/components/sections/Author";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Cornerstone />
        <Series />
        <LeadMagnet />
        <Passage />
        <Author />
      </main>
      <Footer />
    </>
  );
}
