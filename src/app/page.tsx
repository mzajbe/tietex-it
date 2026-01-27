import FAQSection from "@/components/home/FAQSection";
import HeroSection from "@/components/home/HeroSection";
import OurServices from "@/components/home/OurServices";
import PrestigiousClients from "@/components/home/PrestigiousClients";
import ShortAbout from "@/components/home/ShortAbout";
import StatisticsSection from "@/components/home/StatisticsSection";
import TechStack from "@/components/home/TechStack";
import WhyHireUs from "@/components/home/WhyHireUs";
import WorkingProcessSection from "@/components/home/WorkingProcessSection";

export default function Home() {
  const whatsappNumber = "01643817731";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="bg-linear-to-br from-slate-50 to-slate-100">
      {/* <HeroSlider></HeroSlider> */}
      <div className="-mt-20 md:-mt-24">
        <HeroSection></HeroSection>
      </div>
      <div className="max-w-7xl mx-auto">
        <ShortAbout></ShortAbout>
        <StatisticsSection></StatisticsSection>
        <OurServices></OurServices>
        {/* <CustomWebsiteService></CustomWebsiteService> */}
        
        
      </div>


      <div className=" py-20">
        <WorkingProcessSection></WorkingProcessSection>
      </div>


      <div className="max-w-7xl mx-auto py-20">
        <WhyHireUs></WhyHireUs>
      </div>





      <div className="bg-orange-200">
        <TechStack></TechStack>
      </div>
      <div className="max-w-7xl mx-auto py-20">
        <PrestigiousClients></PrestigiousClients>
        <FAQSection></FAQSection>
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
      >
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="h-7 w-7 fill-current"
        >
          <path d="M19.11 17.12c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.6-1.52-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.52-.44-.45-.61-.45h-.52c-.18 0-.48.07-.73.34-.25.27-.96.93-.96 2.27 0 1.34.98 2.64 1.12 2.82.14.18 1.93 2.95 4.68 4.14.66.29 1.18.46 1.58.59.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32M16.02 3.2c-7.07 0-12.82 5.67-12.82 12.64 0 2.23.6 4.41 1.74 6.33L3.2 28.8l6.83-1.79c1.85 1.01 3.95 1.54 6.08 1.54 7.07 0 12.82-5.67 12.82-12.64 0-6.97-5.75-12.64-12.82-12.64m0 23.26c-2.02 0-3.99-.54-5.71-1.57l-.41-.24-4.06 1.06 1.08-3.94-.26-.4a10.9 10.9 0 0 1-1.71-5.87c0-6.01 4.97-10.9 11.07-10.9 6.1 0 11.07 4.89 11.07 10.9 0 6.01-4.97 10.9-11.07 10.9" />
        </svg>
      </a>
    </div>
  );
}
