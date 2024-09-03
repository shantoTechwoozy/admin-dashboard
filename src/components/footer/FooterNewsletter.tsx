import React from "react";
const FooterNewsletter = () => (
    <div>
        <a href="#" className="text-gray-3 transition hover:opacity-75">
            Newsletter
        </a>
        <div className="flex flex-col sm:flex-row mt-2">
            {/* Uncomment and implement Input component if available */}
            {/* <Input className="w-full sm:w-auto sm:flex-1" placeholder="Email ID" /> */}
            <button className="mt-2 sm:mt-0 sm:ml-2 rounded-full bg-[#FF9C00] hover:bg-orange-500/90 text-black px-3 sm:px-4 py-2">
                Subscribe
            </button>
        </div>
    </div>
);

export default FooterNewsletter;
