import Footer from "@/components/footer/Footer";
import HomeHeader from "./HomeHeader";
import HomeDescription from "./HomeDescription";
import "react-responsive-modal/styles.css";
import Deals from "./dealsCard/Deals";


export default function HomePage() {
    return (
        <div className="min-h-screen justify-between gap-24 flex flex-col bg-white">
            {/* Header */}
            <header className="relative">
                <HomeHeader />
            </header>

            {/* Main Content */}
            <main className="flex-grow px-6 pt-14 lg:px-8">
                <HomeDescription />
                <Deals />
            </main>

            {/* Footer */}
            <footer className="mt-auto">
                <Footer />
            </footer>
        </div>
    );
}
