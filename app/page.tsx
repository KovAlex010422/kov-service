import Header from "@/src/components/layout/Header";
import Hero from "@/src/components/sections/Hero/Hero";
import Services from "@/src/components/sections/Services/Services";
import Contacts from "@/src/components/sections/Contacts/Contacts";
import Footer from "@/src/components/sections/Footer/Footer";
import FloatingPhone from "@/src/components/shared/FloatingPhone";
import RequestForm from "@/src/components/sections/RequestForm/RequestForm";
import ServiceArea from "@/src/components/sections/ServiceArea/ServiceArea";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <ServiceArea />
      <RequestForm />
      <Contacts />
      <Footer />
      <FloatingPhone />
    </>
  );
}