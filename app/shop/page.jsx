import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/sections/Footer/Footer";
import Shop from "@/src/components/sections/Shop/Shop";

export default function ShopPage() {
  return (
    <>
      <Header />
      <main>
        <Shop />
      </main>
      <Footer />
    </>
  );
}