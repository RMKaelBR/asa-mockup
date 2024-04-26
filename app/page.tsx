import NavBar from "@/app/ui/navbar/navbar";
import HeroSection from "./ui/homepage/1_HeroSection";
import OverviewSection from "./ui/homepage/2_OverviewSection";
import CoverageSection from "./ui/homepage/10_CoverageSection";
import AwardsSection from "./ui/homepage/3_AwardsSection";
import PresidentSection from "./ui/homepage/4_PresidentsSection";
import ChairmanSection from "./ui/homepage/5_ChairmansSection";
import CommunitySection from "./ui/homepage/6_CommunitySection";
import WhatsNewSection from "./ui/homepage/7_WhatsNewSection";
import IstoryaSection from "./ui/homepage/8_IstoryaSection";
import PartnersSection from "./ui/homepage/9_PartnersSection";
import FooterSection from "./ui/homepage/11_FooterSection";
import CopyrightSection from "./ui/homepage/12_CopyrightSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <nav className="flex justify-evenly z-50">
        <NavBar /></nav>
      <section className="hero-section min-w-full min-h-screen flex justify-center">
        <HeroSection /></section>
      <section className="overview-section min-w-full min-h-screen bg-blue-100 flex justify-center">
        <OverviewSection /></section>
      <section className="awards-section w-full flex justify-center bg-blue-400 text-white py-12">
        <AwardsSection /></section>
      <section className="president-message-section w-full flex justify-center pt-16 pb-20">
        <PresidentSection /></section>
      <section className="chairman-message-section flex justify-center bg-orange-100 pt-16 pb-20">
        <ChairmanSection /></section>
      <section className="community-service-section flex justify-center bg-blue-100 w-full py-16">
        <CommunitySection /></section>
      <section className="whats-new-section flex">
        <WhatsNewSection /></section>
      <section className="istorya-section flex flex-col w-full items-center">
        <IstoryaSection /></section>
      <section className="partners-section flex flex-col w-full items-center shadow-xl z-20">
        <PartnersSection /></section>
      <section className="w-full flex justify-center coverage-section coverage-bg-styling z-10">
        <CoverageSection /></section>
      <footer className="footer-section w-full bg-gray-800 text-white">
        <FooterSection /></footer>
      <section className="copyright-section w-full flex justify-center bg-orange-400 py-2 font-bold">
        <CopyrightSection /></section>
    </main>
  );
}
