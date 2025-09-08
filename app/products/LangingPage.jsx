import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { NavBar } from "../../lib/NavBar";
import { FooterBottom } from "../../lib/FooterBottom";

export const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            {/* Main Image*/}
            <div className="w-full h-full bg-cover bg-center">
                <img
                    src="/banner.png"
                    alt="Main Banner"
                    className="w-full h-full object-cover"
                />
                {/* Optional overlay text can be added here */}
            </div>

            {/* Branch Section */}
            <section className="py-12 px-6 bg-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Branch</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="/karjan_dealership.jpeg" alt="Tractor 1" className="w-full object-cover bg-center"/>
                        <div className="p-4">
                            <a href="https://maps.google.com/?q=Sonalika - Durga Tractors, Bodana, Karjan, Gujarat 391210" className="text-gray-600 mt-2">
                            <h3 className="text-xl font-semibold text-gray-800">Karjan</h3>
                            Sonalika - Durga Tractors, Bodana, Karjan, Gujarat 391210.<FaMapLocationDot /></a>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="/tractor2.png" alt="Tractor 2" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <a href="https://maps.google.com/?q=Sonalika - Durga Tractors, Bodana, Karjan, Gujarat 391210" className="text-gray-600 mt-2">
                            <h3 className="text-xl font-semibold text-gray-800">Sinhor</h3>
                            Sonalika - Durga Tractors, Bodana, Karjan, Gujarat 391210.<FaMapLocationDot /></a>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="/tractor3.png" alt="Tractor 3" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <a href="https://maps.google.com/?q=Sonalika - Durga Tractors, Bodana, Karjan, Gujarat 391210" className="text-gray-600 mt-2">
                            <h3 className="text-xl font-semibold text-gray-800">Jambusar</h3>
                            Sonalika - Durga Tractors, Bodana, Karjan, Gujarat 391210.<FaMapLocationDot /></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Owners Section */}
            <section className="py-12 px-6 bg-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Happy Customers</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Owner Card */}
                    <div className="flex items-center bg-white shadow-md rounded-lg p-4">
                        {/* Left side: text */}
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800">Suresh Patel</h3>
                            <p className="text-sm text-gray-600">
                                Very Good Service and Affordable Price.
                            </p>
                        </div>
                        {/* Right side: image */}
                        <img 
                            src="/owner1.jpg" 
                            alt="Owner 1" 
                            className="w-16 h-16 rounded-full object-cover ml-4"
                        />
                    </div>

                    <div className="flex items-center bg-white shadow-md rounded-lg p-4">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800">Narendra Gandhi</h3>
                            <p className="text-sm text-gray-600">
                                Best place to buy tractors with excellent after-sales service.
                            </p>
                        </div>
                        <img 
                            src="/owner2.jpg" 
                            alt="Owner 2" 
                            className="w-16 h-16 rounded-full object-cover ml-4"
                        />
                    </div>
                </div>
            </section>

            {/* Inquery Form*/}
            <section className="py-12 px-6 bg-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Inquiry Form</h2>
            
                <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
                    <form className="space-y-4">
                    
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input 
                        type="text" 
                        placeholder="Enter your name" 
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Mobile Number */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                        <input 
                        type="tel" 
                        placeholder="Enter your mobile number" 
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Village */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Village</label>
                        <input 
                        type="text" 
                        placeholder="Enter your village name" 
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button 
                        type="submit" 
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                        Submit Inquiry
                        </button>
                    </div>
                    </form>
                </div>
            </section>


            <FooterBottom />
        </div>
    );
};
