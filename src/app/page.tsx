import CustomWebsiteService from "@/components/home/CustomWebsiteService";
import FAQSection from "@/components/home/FAQSection";
import HeroSlider from "@/components/home/HeroSlider";
import OurServices from "@/components/home/OurServices";
import PrestigiousClients from "@/components/home/PrestigiousClients";
import ShortAbout from "@/components/home/ShortAbout";
import StatisticsSection from "@/components/home/StatisticsSection";
import TechStack from "@/components/home/TechStack";
import WhyHireUs from "@/components/home/WhyHireUs";
import WorkingProcessSection from "@/components/home/WorkingProcessSection";

export default function Home() {
  return (
    <div className="bg-linear-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <HeroSlider></HeroSlider>
        <ShortAbout></ShortAbout>
        <StatisticsSection></StatisticsSection>
        <OurServices></OurServices>
        <CustomWebsiteService></CustomWebsiteService>
        <WhyHireUs></WhyHireUs>
        <WorkingProcessSection></WorkingProcessSection>
        <TechStack></TechStack>
        
        <PrestigiousClients></PrestigiousClients>
        <FAQSection></FAQSection>
      </div>
    </div>
  );
}
