import React from "react";
import UFNavbar from "@/components/uf/UFNavbar";
import UFHero from "@/components/uf/UFHero";
import UFServices from "@/components/uf/UFServices";
import UFWhyUs from "@/components/uf/UFWhyUs";
import UFTestimonials from "@/components/uf/UFTestimonials";
import UFContact from "@/components/uf/UFContact";
import UFFooter from "@/components/uf/UFFooter";
import UFWhatsApp from "@/components/uf/UFWhatsApp";

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