import Navbar from "./navbar";
import homePic from "../assets/home_man.png"
const FlushWarrantyLandingPage = () => {
    return (
        <div className="bg-blue-100 flex flex-col items-center">
            <Navbar />
            <main className="w-full max-w-screen-lg flex flex-col lg:flex-row items-center gap-8 p-4">
                <div className="flex-1 flex justify-center items-center">
                    <div className="">
                        <img src={homePic} alt="Family" className="w-100" />
                    </div>
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                    <h1 className="text-3xl font-bold text-blue-700 mb-2">Make Expensive Septic Repairs Disappear</h1>
                    <p className="text-gray-600 mb-4">Take advantage of a discounted septic inspection on your first service with FLUSH Warranty. Obtain a quote today to explore our plans and see pricing for your area.</p>
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Find Coverage in Your Area</h2>
                    <div className="flex items-center gap-2">
                        <input type="text" placeholder="Enter ZIP Code" className="p-2 border border-gray-300 rounded-lg w-full" />
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Submit</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FlushWarrantyLandingPage;