import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaRegClock, FaMapMarkedAlt } from 'react-icons/fa';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import Link from 'next/link';

const SupportPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="container mx-auto max-w-7xl bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-4">Support Center</h1>
                <p className="text-lg mb-6">
                    Welcome to Trip Beyond&apos;s Support Center. We&apos;re here to assist you with any questions or concerns you might have about your travel plans.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Contact Info Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <div className="flex items-center mb-4">
                            <FaPhoneAlt className="text-blue-500 mr-3" size={24} />
                            <p className="text-lg">Phone: <a href="tel:+8801322882297" className="text-blue-600">+8801322882297</a></p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaEnvelope className="text-blue-500 mr-3" size={24} />
                            <p className="text-lg">Email: <a href="mailto:info@tripbeyond.com" className="text-blue-600">info@tripbeyond.com</a></p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaRegClock className="text-blue-500 mr-3" size={24} />
                            <p className="text-lg">24/7 Customer Service</p>
                        </div>
                        <div className="flex items-center">
                            <FaMapMarkedAlt className="text-blue-500 mr-3" size={24} />
                            <p className="text-lg">Address: 123 Adventure Lane, Wanderlust City, ST 45678</p>
                        </div>
                    </div>

                    {/* Live Chat Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Live Chat</h2>
                        <p className="text-lg mb-4">
                            Have questions or need immediate assistance? Our live chat support is available 24/7 to help you with any inquiries or issues.
                        </p>
                        <Link href="/live-chat">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer">
                                <IoChatbubbleEllipsesOutline className="mr-2" size={20} />
                                Start Live Chat
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Featured Sections */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Save on Travel with Trip Beyond</h2>
                    <p className="text-lg mb-4">
                        Tripbeyond.com is here to help you plan the perfect trip with cheap flights, discount hotels, and train tickets. Explore our destinations and enjoy the biggest savings on your next trip!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Featured Hotel Destinations</h3>
                            <ul className="list-disc pl-5">
                                <li>Shanghai</li>
                                <li>Beijing</li>
                                <li>Guangzhou</li>
                                <li>Shenzhen</li>
                                <li>Tokyo</li>
                                <li>Singapore</li>
                                {/* Add more destinations as needed */}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Featured Flight Destinations</h3>
                            <ul className="list-disc pl-5">
                                <li>Cebu</li>
                                <li>Jakarta</li>
                                <li>Hanoi</li>
                                <li>Phuket</li>
                                <li>Hong Kong</li>
                                <li>Seoul</li>
                                {/* Add more destinations as needed */}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Featured Tours & Tickets</h3>
                            <ul className="list-disc pl-5">
                                <li>Shanghai Disneyland Ticket</li>
                                <li>Forbidden City Ticket</li>
                                <li>Sichuan Opera Show Ticket</li>
                                <li>Empire State Building Observation Deck Ticket</li>
                                {/* Add more tours and tickets as needed */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
