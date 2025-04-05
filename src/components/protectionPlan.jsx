import React from 'react';
import { Wallet, Clock, Brain } from 'lucide-react';
import underline from "../assets/underline_image.png"
const ProtectionPlan = () => {
    return (
        <div className="bg-blue-50 py-16 px-4 md:px-20 lg:px-40">
            <h2 className="text-3xl font-semibold text-center text-blue-900 mb-2">Why do you need a septic system protection plan?</h2>
            <div className="flex justify-center mb-8">
                <div className="">
                    <div className=""><img src={underline}/></div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="flex flex-col items-center bg-transparent hover:bg-white p-6 hover:shadow-lg transition">
                    <Wallet className="text-blue-600 w-12 h-12 mb-4" />
                    <h3 className="text-xl font-semibold">Your Wallet</h3>
                    <p className="text-gray-600 text-center">Helps you pay for large repair and replacement costs</p>
                </div>
                <div className="flex flex-col items-center bg-transparent hover:bg-white p-6 hover:shadow-lg transition">
                    <Clock className="text-blue-600 w-12 h-12 mb-4" />
                    <h3 className="text-xl font-semibold">Your Time</h3>
                    <p className="text-gray-600 text-center">Eliminates the hassle of finding qualified service providers</p>
                </div>
                <div className="flex flex-col items-center bg-transparent hover:bg-white p-6 hover:shadow-lg transition">
                    <Brain className="text-blue-600 w-12 h-12 mb-4" />
                    <h3 className="text-xl font-semibold">Your Peace Of Mind</h3>
                    <p className="text-gray-600 text-center">Gives you a plan, and partner, to deal with the unexpected.</p>
                </div>
            </div>
        </div>
    );
};

export default ProtectionPlan;
