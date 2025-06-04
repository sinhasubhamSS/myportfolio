import AboutSection from "@/components/AboutSection";
import AchievementSection from "@/components/AchievementSection";
import EmailSection from "@/components/EmailSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto  mt-18 px-12 py-4">
        <HeroSection />
        <AchievementSection/>
        <AboutSection/>
        <ProjectSection/>
        <EmailSection/>
        <FooterSection/>
      </div>
    </main>
  );
}
