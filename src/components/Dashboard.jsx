import React from 'react';
import { Link } from 'react-router-dom';
function Dashboard() {
    return (
        <div className="bg-gradient-to-r from-green-500 to-teal-500 w-full text-white">
            {/* Hero Section */}
            <section className="relative flex items-center justify-center h-screen text-center overflow-hidden">
                {/* Background Wave */}
                <div className="absolute inset-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        className="absolute bottom-0 w-full h-auto"
                    >
                        <path
                            fill="#ffffff"
                            fillOpacity="1"
                            d="M0,224L60,192C120,160,240,96,360,85.3C480,75,600,117,720,122.7C840,128,960,96,1080,96C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                        ></path>
                    </svg>
                </div>

                <div className="relative z-10">
                    <h1 className="text-5xl font-extrabold mb-6 tracking-wide">
                        Your Bill, <span className="text-teal-200">Our Priority</span>
                    </h1>
                    <p className="text-lg max-w-lg mx-auto mb-8 leading-relaxed">
                        Turn your energy data into savings with <strong>Living Things</strong>, designed to help enterprises reach Net Zero.
                    </p>

                    <Link to="/sms" className="inline-block bg-teal-200 text-green-600 py-3 px-8 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg hover:bg-teal-300 transition-all duration-300">
                        Get Started
                    </Link>

                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-white text-gray-900">
                <div className="max-w-screen-lg mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Our Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold mb-4">Utility Bill Analytics</h3>
                            <p>Automatically ingest and analyze utility bills to uncover cost-saving opportunities.</p>
                        </div>
                        <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold mb-4">Cooling Management</h3>
                            <p>Optimize HVAC operations in real time, reducing energy usage without sacrificing comfort.</p>
                        </div>
                        <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold mb-4">Carbon Insights</h3>
                            <p>Quantify, mitigate, and report your carbon footprint to meet sustainability goals.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-green-50 text-gray-900">
                <div className="max-w-screen-lg mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Why Choose Living Things?</h2>
                    <div className="flex flex-col md:flex-row justify-around gap-12">
                        <div className="flex flex-col items-center">
                            <div className="bg-green-500 text-white p-6 rounded-full mb-4">
                                <i className="fas fa-dollar-sign text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold">Cost Savings</h3>
                            <p>Save up to 40% on energy bills through data-driven recommendations.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-green-500 text-white p-6 rounded-full mb-4">
                                <i className="fas fa-chart-line text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold">Actionable Insights</h3>
                            <p>Real-time dashboards and alerts let you act immediately on inefficiencies.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-green-500 text-white p-6 rounded-full mb-4">
                                <i className="fas fa-leaf text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold">Sustainability</h3>
                            <p>Reduce CO₂ emissions and meet your ESG targets with our carbon toolkit.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
