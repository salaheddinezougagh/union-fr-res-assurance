import UFNavbar from "@/components/UF/UFNavbar";
import UFHero from "@/components/UF/UFHero";
import UFServices from "@/components/UF/UFServices";
import UFWhyUs from "@/components/UF/UFWhyUs";
import UFTestimonials from "@/components/UF/UFTestimonials";
import UFContact from "@/components/UF/UFContact";
import UFFooter from "@/components/UF/UFFooter";
import UFWhatsApp from "@/components/UF/UFWhatsApp";

export default function UnionFreres() {
  return (
    <div className="bg-white min-h-screen font-body">
      <UFNavbar />
      <UFHero />
      <UFServices />
      <UFWhyUs />
      <UFTestimonials />
      <UFContact />
      <UFFooter />
      <UFWhatsApp />
    </div>
  );
}