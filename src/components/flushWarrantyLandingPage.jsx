import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "./navbar";
import homePic from "../assets/home_man.png";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IllpaEJwWkt5UXcxWDdwS3NtcWRwIiwidmVyc2lvbiI6MSwiaWF0IjoxNzMzODI1MTU4OTI3LCJzdWIiOiJCcWxQVXlhRTJGc0ZQTUFmSXpkSiJ9.BPN_AtSHfdzwQQa4iwiPHaawC-RCggKtuINmjEGJ4uY";

const validZipCodes = ["06443", "06419", "06437", "06405", "06498", "06472", "06422", "06441", "06442", "06475", "06417"];

const Modal = ({ children, onClose }) => (
    <div className="fixed inset-0 bg-transparent bg-opacity-0 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-[#A7EDFF] p-6 rounded-xl shadow-lg relative max-w-md w-full">
            <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 text-2xl">✕</button>
            {children}
        </div>
    </div>
);

const InvalidZipModal = ({ onClose }) => {
    const [signupData, setSignupData] = useState({ name: "", email: "", phone: "" });

    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSignup = async () => {
        try {
            await axios.post("https://rest.gohighlevel.com/v1/contacts/", signupData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });
            alert("Signed up successfully!");
        } catch (error) {
            alert("Failed to sign up. Please try again.");
            console.error("Error signing up:", error);
        }
    };

    return (
        <Modal onClose={onClose}>
            <div className="p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">"We're sorry, but Flush Warranty is not currently available in your area."</h3>
                <p className="mb-4">You may sign up for a notification list for future availability.</p>
                <input name="name" placeholder="Enter your name" className="p-2 border rounded w-full mb-2" onChange={handleSignupChange} />
                <input name="email" placeholder="Enter your email" className="p-2 border rounded w-full mb-2" onChange={handleSignupChange} />
                <input name="phone" placeholder="Enter your phone number" className="p-2 border rounded w-full mb-4" onChange={handleSignupChange} />
                <button onClick={handleSignup} className="bg-blue-600 text-white px-4 py-2 rounded w-full">SIGN UP</button>
            </div>
        </Modal>
    );
};


const FlushWarrantyLandingPage = () => {
    const [zipCode, setZipCode] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [formData, setFormData] = useState({ name: "", address: "", phone: "", email: "", role: "I am a homeowner." });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = () => {
        if (validZipCodes.includes(zipCode)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
        setZipCode("");
    };

    const extractAddressComponents = (address) => {
        const parts = address.split(" ");
        const state = parts.pop();
        const city = parts.pop();
        const street = parts.join(" ");
        return { street, city, state, postalCode: "" };
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const { street, city, state, postalCode } = extractAddressComponents(formData.address);
        try {
            const response = await axios.post(
                "https://rest.gohighlevel.com/v1/contacts/",
                {
                    firstName: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    address1: street,
                    city: city,
                    state: state,
                    postalCode: postalCode,
                    customField: {
                        "BtRFPx0AxeT6wdt85VnX": formData.role,
                    },
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                }
            );
            
            // Store the ID in local storage
            localStorage.setItem("contactId", response.data.contact.id);
    
            alert("Submission successful!");
            console.log("Response:", response.data);
            console.log("ID stored in local storage:", response.data.id);
            handleClose();
        } catch (error) {
            console.error("Error submitting form:", error.response?.data || error.message);
            alert("Failed to submit. Please try again.");
        }
    };
    

    return (
        <div className="bg-[#A7EDFF] flex flex-col items-center">
            <Navbar />
            <main className="w-full max-w-screen-lg flex flex-col lg:flex-row items-center gap-8 p-4">
                <div className="flex-1 flex justify-center items-center">
                    <img src={homePic} alt="Family" className="w-100" />
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                    <h1 className="text-3xl font-bold text-blue-700 mb-2">Make Expensive Septic Repairs Disappear</h1>
                    <p className="text-gray-600 mb-4">Take advantage of a discounted septic inspection on your first service with FLUSH Warranty. Obtain a quote today to explore our plans and see pricing for your area.</p>
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Find Coverage in Your Area</h2>
                    <div className="flex items-center gap-2">
                        <input type="text" placeholder="Enter ZIP Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} className="p-2 border border-gray-300 rounded-lg w-full" />
                        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Submit</button>
                    </div>
                </div>
            </main>
            {isModalOpen && (
                isValid ? (
                    <Modal onClose={handleClose}>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-4">"Great! We have coverage in your area"</h3>
                            <form onSubmit={handleFormSubmit} className="space-y-2">
                                <input name="name" placeholder="Name" onChange={handleInputChange} className="p-2 border rounded w-full" />
                                <input name="address" placeholder="Address" onChange={handleInputChange} className="p-2 border rounded w-full" />
                                <input name="phone" placeholder="Phone" onChange={handleInputChange} className="p-2 border rounded w-full" />
                                <input name="email" placeholder="Email" onChange={handleInputChange} className="p-2 border rounded w-full" />
                                <select name="role" onChange={handleInputChange} className="p-2 border rounded w-full">
                                    <option value="I am a homeowner.">I am a homeowner.</option>
                                    <option value="I am a real estate agent.">I am a real estate agent.</option>
                                </select>
                                <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded w-full">SEND</button>
                            </form>
                        </div>
                    </Modal>
                ) : <InvalidZipModal onClose={handleClose} />
            )}
        </div>
    );
};

export default FlushWarrantyLandingPage;
