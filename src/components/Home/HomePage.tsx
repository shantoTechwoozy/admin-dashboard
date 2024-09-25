import Footer from "@/components/footer/Footer";
import HomeHeader from "./HomeHeader";
import HomeDescription from "./HomeDescription";
import "react-responsive-modal/styles.css";
import Deals from "./dealsCard/Deals";
import ExclusivePartners from "./exclusivePartners/ExclusivePartners";
import FavouriteDestination from "./destination/FavouriteDestination";
import QrBanner from "./QrCodeBanner.tsx/QrBanner";
import TextContents from "./textContents/TextContents";

export default function HomePage() {
  return (
    <>
      <HomeHeader />

      <main className="mt-14 flex-grow px-6 lg:px-8">
        <HomeDescription />
        <Deals />
        <ExclusivePartners />
        <FavouriteDestination />
        <QrBanner />
        <TextContents />
      </main>

      <Footer />
    </>
  );
}
