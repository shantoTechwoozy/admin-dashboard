import Logo from "@/components/common/Logo";
import MobileMenu from "@/components/main/MobileMenu";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trip Beyond",
  description: "Designed & Developed by Techwoozy LLC",
};

export default function Home() {
  return (
    <div className="bg-white">
      <header className="bg-secondary absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1 justify-between">
            <Logo isDark={false} />
          </div>
          <div className="flex lg:hidden">
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            <Link
              className="flex items-center text-md p-2 lg:text-white font-thin leading-6 text-gray-900"
              href="/signup">
              Sign up
            </Link>
            <Link href="/signin" className="w-32 bg-orange-500 text-center hover:bg-orange-700 py-3 px-3 rounded-full text-md font-semibold leading-6 text-white">
              Sign in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            
          </div> */}
          {/* Mobile Men  u */}
          <MobileMenu />
        </nav>



      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Unlock the Extraordinary with Trip Beyond
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your passport to unparalleled adventures. From secluded beaches to majestic peaks, our expert team crafts
              tailor-made journeys that redefine travel. Immerse yourself in culture, savor unique experiences, and
              create memories that last a lifetime.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}