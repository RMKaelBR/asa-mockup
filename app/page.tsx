import NavBar from "@/app/ui/navbar/navbar";
import HeroSection from "./ui/homepage/hero-section";
import OverviewSection from "./ui/homepage/overview-section";
import CoverageSection from "./ui/homepage/coverage-section";
import AwardsSection from "./ui/homepage/awards-section";
import PresidentSection from "./ui/homepage/president-section";
import ChairmanSection from "./ui/homepage/chairman-section";
import CommunitySection from "./ui/homepage/community-section";
import WhatsNewSection from "./ui/homepage/whatsnew-section";
import IstoryaSection from "./ui/homepage/istorya-section";
import PartnersSection from "./ui/homepage/partners-section";
import FooterSection from "./ui/homepage/footer-section";
import CopyrightSection from "./ui/homepage/copyright-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <NavBar />
        <button className="sign-in-button rounded-full py-2 px-10 bg-orange-400">SIGN IN</button>
      </nav>
      <section className="hero-section">
        <HeroSection />
      </section>
      <section className="overview-section">
        <OverviewSection />
      </section>
      <section className="awards-section w-full flex justify-center">
        <AwardsSection />
      </section>
      <section className="president-message-section w-full felx justify-center">
        <PresidentSection />
      </section>
      <section className="chairman-message-section">
        <ChairmanSection />
      </section>
      <section className="community-service-section">
        <CommunitySection />
      </section>
      <section className="whats-new-section flex">
        <WhatsNewSection />
      </section>
      <section className="istorya-section flex flex-col w-full items-center">
        <IstoryaSection />
      </section>
      <section className="partners-section flex-col items-center">
        <PartnersSection />
      </section>
      <section className="coverage-section">
        <CoverageSection />
      </section>
      <footer className="">
        <FooterSection />
      </footer>
      <section className="copyright-section">
        <CopyrightSection />
      </section>
    </main>
  );
}
