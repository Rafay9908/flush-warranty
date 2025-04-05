import React from 'react';
import proprtyhouse from "../assets/property_house_sale.png"
import underline from "../assets/underline_image.png"

const PropertySale = () => {
    return (
        <div className="bg-blue-50 px-4 md:px-20 lg:px-40">
        <div className="flex flex-col lg:flex-row items-center justify-center  w-full max-w-5xl mx-auto">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <img src={proprtyhouse} alt="House for Sale" className="rounded-2xl w-full h-auto" />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-10 text-center lg:text-left">
                <h2 className="text-4xl font-bold text-[#0b2545] mb-4">Maximize Your Property Value for Resale</h2>
                <div className=""><img src={underline}/></div>
                <p className="text-gray-700 mb-4">
                    Potential homebuyers often hesitate to purchase properties with septic systems due to uncertainties about system longevity, maintenance needs, and replacement costs. Traditional septic inspections at the time of property transfer provide only a snapshot, which may flag potential future issues but don’t assure ongoing system performance.
                </p>
                <p className="text-gray-700 mb-6">
                    FLUSH Warranty addresses these concerns by offering a transferable policy at the same rate for new homeowners. This eliminates the need for buyers to spend hundreds of dollars on septic inspections that merely confirm the system’s current functionality. Additionally, sellers can avoid losing potential buyers due to issues discovered during septic inspections, and real estate agents can facilitate quicker property sales.
                </p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full shadow hover:bg-blue-600 transition duration-300">
                    GET STARTED
                </button>
            </div>
        </div>
    </div>
    );
};

export default PropertySale;
