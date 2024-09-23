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
        <div className="min-h-screen justify-between overflow-yh gap-24 flex flex-col bg-white">
            {/* Header */}
            <header className="relative">
                <HomeHeader />
            </header>

            {/* Main Content */}
            <main className="flex-grow px-6 pt-14 lg:px-8">
                <HomeDescription />
                <Deals />
                <ExclusivePartners />
                <FavouriteDestination />
                <QrBanner />
                <TextContents />
            </main>

            {/* Footer */}
            <footer className="mt-auto">
                <Footer />
            </footer>
        </div>
    );
}
