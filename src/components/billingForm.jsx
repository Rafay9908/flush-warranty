import React, { useEffect, useState } from 'react'; 
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';
import FlushWarrantyFooter from './FlushWarrantyFooter';

const BillingForm = () => {
    const location = useLocation();
    const { selectedPrices, selectedTitles, selectedIds } = location.state || { selectedPrices: [], selectedTitles: [], selectedIds: [] };
    console.log("check prices",selectedPrices,"check id",selectedIds)
    // Bearer token stored at the top
    const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IllpaEJwWkt5UXcxWDdwS3NtcWRwIiwidmVyc2lvbiI6MSwiaWF0IjoxNzMzODI1MTU4OTI3LCJzdWIiOiJCcWxQVXlhRTJGc0ZQTUFmSXpkSiJ9.BPN_AtSHfdzwQQa4iwiPHaawC-RCggKtuINmjEGJ4uY";
    const [contactData, setContactData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [formData, setFormData] = useState({
        bedrooms: '',
        waterType: 'Well',
        waterConditioning: 'Yes',
        residents: '',
        fullTimeResidence: 'Yes',
        energyEfficient: 'Yes',
        homeAge: '',
        septicAge: '',
        fullBasement: 'Yes',
        garbageDisposal: 'Yes',
        cookingFrequency: ''
    });

    // Field IDs from GoHighLevel
    const FIELD_IDS = {
        BEDROOMS: "DgvC20xu7CROjWvmLJm4",
        WATER_TYPE: "SY9Ez0MyFCZAmdP5BuQN", 
        WATER_CONDITIONING: "S2Abn6ZZq6sbaDvCzZyr", 
        RESIDENTS: "FzYelB2DnbOTaCi7B7mb", 
        FULL_TIME_RESIDENCE: "bog3Ei7sHhJmvdmdSwIi", 
        ENERGY_EFFICIENT: "CqrohDSQNpC3JjRzP54n", 
        HOME_AGE: "dEkcI7aiBSjktddENZdI", 
        SEPTIC_AGE: "6f9udpWZ7EGe9ecLZTYs", 
        FULL_BASEMENT: "DMdvnmxoNQQC3xE0L7gS", 
        GARBAGE_DISPOSAL: "BiHcK3zuOzvuNqReRNEl", 
        COOKING_FREQUENCY: "AiWiIix5L46ioRnXkKFs" 
    };

    // Create axios instance with base config
    const api = axios.create({
        baseURL: 'https://rest.gohighlevel.com/v1',
        headers: {
            'Authorization': `Bearer ${BEARER_TOKEN}`,
            'Content-Type': 'application/json'
        }
    });

    useEffect(() => {
        const fetchContactData = async () => {
            try {
                const contactId = localStorage.getItem("contactId");
                if (!contactId) {
                    console.error("No contactId found in localStorage");
                    setLoading(false);
                    return;
                }

                const response = await api.get(`/contacts/${contactId}`);
                setContactData(response.data.contact);
                
                // Pre-fill form data if contact has existing custom fields
                if (response.data.contact.customField) {
                    const customFields = response.data.contact.customField;
                    setFormData({
                        bedrooms: customFields.find(f => f.id === FIELD_IDS.BEDROOMS)?.value || '',
                        waterType: customFields.find(f => f.id === FIELD_IDS.WATER_TYPE)?.value || 'Well',
                        waterConditioning: customFields.find(f => f.id === FIELD_IDS.WATER_CONDITIONING)?.value || 'Yes',
                        residents: customFields.find(f => f.id === FIELD_IDS.RESIDENTS)?.value || '',
                        fullTimeResidence: customFields.find(f => f.id === FIELD_IDS.FULL_TIME_RESIDENCE)?.value || 'Yes',
                        energyEfficient: customFields.find(f => f.id === FIELD_IDS.ENERGY_EFFICIENT)?.value || 'Yes',
                        homeAge: customFields.find(f => f.id === FIELD_IDS.HOME_AGE)?.value || '',
                        septicAge: customFields.find(f => f.id === FIELD_IDS.SEPTIC_AGE)?.value || '',
                        fullBasement: customFields.find(f => f.id === FIELD_IDS.FULL_BASEMENT)?.value || 'Yes',
                        garbageDisposal: customFields.find(f => f.id === FIELD_IDS.GARBAGE_DISPOSAL)?.value || 'Yes',
                        cookingFrequency: customFields.find(f => f.id === FIELD_IDS.COOKING_FREQUENCY)?.value || ''
                    });
                }
            } catch (error) {
                console.error("Error fetching contact data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchContactData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const PRICE_FIELD_IDS = {
        PRICE_36_MONTHS: "23Lqqqu1H8qfeEMEb8uc", // Replace with actual ID
        PRICE_72_MONTHS: "FIELD_ID_FOR_72_MONTHS_PRICE", // Replace
        PRICE_108_MONTHS: "FIELD_ID_FOR_108_MONTHS_PRICE" // Replace
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitLoading(true);
        
        try {
            const contactId = localStorage.getItem("contactId");
            if (!contactId) {
                console.error("No contactId found in localStorage");
                return;
            }
    
            // Define PRICE field IDs (replace with actual IDs from GHL)
         
    
            // Prepare custom fields
            const customFields = [
                // Map selected plans (duration + price)
                ...selectedIds.flatMap((id, index) => {
                    const priceString = selectedPrices[index]; // e.g., "$14.99/Month for 36 Months"
                    const durationMatch = priceString.match(/(\d+\sMonths)/); // Extracts "36 Months"
                    const duration = durationMatch ? durationMatch[1] : "";
    
                    return [
                        // Duration field (e.g., "36 Months")
                        {
                            id: id, // e.g., "HUe7oRoznbZ9lhH5olWw"
                            value: duration
                        },
                        // Price field (e.g., "$14.99/Month for 36 Months")
                        {
                            id: PRICE_FIELD_IDS[duration], // e.g., "pB5QCDKDTNbtl9H38vMz"
                            value: priceString
                        }
                    ];
                }),
                  
                  
                // Form fields
                {
                    id: FIELD_IDS.BEDROOMS,
                    value: formData.bedrooms
                },
                {
                    id: FIELD_IDS.WATER_TYPE,
                    value: formData.waterType
                },
                {
                    id: FIELD_IDS.WATER_CONDITIONING,
                    value: formData.waterConditioning
                },
                {
                    id: FIELD_IDS.RESIDENTS,
                    value: formData.residents
                },
                {
                    id: FIELD_IDS.FULL_TIME_RESIDENCE,
                    value: formData.fullTimeResidence
                },
                {
                    id: FIELD_IDS.ENERGY_EFFICIENT,
                    value: formData.energyEfficient
                },
                {
                    id: FIELD_IDS.HOME_AGE,
                    value: formData.homeAge
                },
                {
                    id: FIELD_IDS.SEPTIC_AGE,
                    value: formData.septicAge
                },
                {
                    id: FIELD_IDS.FULL_BASEMENT,
                    value: formData.fullBasement
                },
                {
                    id: FIELD_IDS.GARBAGE_DISPOSAL,
                    value: formData.garbageDisposal
                },
                {
                    id: FIELD_IDS.COOKING_FREQUENCY,
                    value: formData.cookingFrequency
                }
            ].filter(field => field.value !== '' && field.value !== undefined);

            const response = await api.put(`/contacts/${contactId}`, {
                customField: customFields
            });

            console.log("Contact updated successfully:", response.data);
            alert("Your order has been submitted successfully!");
        } catch (error) {
            console.error("Error updating contact:", error);
            alert("There was an error submitting your order. Please try again.");
        } finally {
            setSubmitLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <>
        <Navbar/>
        <div className="flex flex-col lg:flex-row justify-center items-start p-8 bg-blue-100 min-h-screen">
            <div className="w-full lg:w-2/3 p-8 bg-white shadow-lg rounded-2xl">
                <h2 className="text-4xl font-extrabold mb-6">Billing details</h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Personal Information */}
                    <div>
                        <label className="block text-gray-700 text-lg">Full Name: *</label>
                        <input 
                            type="text" 
                            placeholder="Full Name" 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            defaultValue={contactData ? `${contactData.firstName} ${contactData.lastName}` : ''}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-lg">Address: *</label>
                        <input 
                            type="text" 
                            placeholder="House number and street name" 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            defaultValue={contactData ? contactData.address1 : ''}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-lg">Phone Number: *</label>
                        <input 
                            type="tel" 
                            placeholder="Phone Number" 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            defaultValue={contactData ? contactData.phone : ''}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-lg">Email address: *</label>
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            defaultValue={contactData ? contactData.email : ''}
                            required
                        />
                    </div>

                    {/* Additional Information */}
                    <div>
                        <h3 className="text-2xl font-semibold mt-6">Additional information</h3>
                        
                        <label className="block text-gray-700 text-lg mt-4">How many bedrooms are in the house? *</label>
                        <input 
                            type="number" 
                            name="bedrooms"
                            placeholder="Number of bedrooms" 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            value={formData.bedrooms}
                            onChange={handleInputChange}
                            min="1"
                            required
                        />
                        
                        <label className="block text-gray-700 text-lg mt-4">Do you have well water or city water? *</label>
                        <select 
                            name="waterType"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.waterType}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="Well">Well</option>
                            <option value="City">City</option>
                        </select>
                        
                        <label className="block text-gray-700 text-lg mt-4">If well water, do you have a water conditioning system? *</label>
                        <select 
                            name="waterConditioning"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.waterConditioning}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        
                        <label className="block text-gray-700 text-lg mt-4">How many people live in the house full-time? *</label>
                        <input 
                            type="number" 
                            name="residents"
                            placeholder="Number of residents" 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            value={formData.residents}
                            onChange={handleInputChange}
                            min="1"
                            required
                        />
                        
                        <label className="block text-gray-700 text-lg mt-4">Is this your full-time residence? *</label>
                        <select 
                            name="fullTimeResidence"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.fullTimeResidence}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        
                        <label className="block text-gray-700 text-lg mt-4">Do you have energy-efficient appliances? *</label>
                        <select 
                            name="energyEfficient"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.energyEfficient}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        
                        <label className="block text-gray-700 text-lg mt-4">Age of the home: *</label>
                        <input 
                            type="number" 
                            name="homeAge"
                            placeholder="Age of the home in years" 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            value={formData.homeAge}
                            onChange={handleInputChange}
                            min="1"
                            required
                        />
                        
                        <label className="block text-gray-700 text-lg mt-4">Age of the septic system: *</label>
                        <input 
                            type="number" 
                            name="septicAge"
                            placeholder="Age of the septic system in years" 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            value={formData.septicAge}
                            onChange={handleInputChange}
                            min="0"
                            required
                        />
                        
                        <label className="block text-gray-700 text-lg mt-4">Does the house have a full basement? *</label>
                        <select 
                            name="fullBasement"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.fullBasement}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        
                        <label className="block text-gray-700 text-lg mt-4">Garbage disposal presence *</label>
                        <select 
                            name="garbageDisposal"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.garbageDisposal}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        
                        <label className="block text-gray-700 text-lg mt-4">
  How often do you cook at home? *
</label>
<select
  name="cookingFrequency"
  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  value={formData.cookingFrequency}
  onChange={handleInputChange}
  required
>
  <option value="" disabled>
    Select frequency
  </option>
  <option value="1 - 3 times in a week">1 - 3 times in a week</option>
  <option value="3 - 5 times in a week">3 - 5 times in a week</option>
  <option value="5 - 7 times in a week">5 - 7 times in a week</option>
  <option value="7 - 10 times in a week">7 - 10 times in a week</option>
  <option value="10+ times in a week">10+ times in a week</option>
</select>

                    </div>
                </form>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3 p-8 bg-white shadow-lg rounded-2xl mt-8 lg:mt-0 lg:ml-8">
                <h2 className="text-4xl font-extrabold mb-6">Your order</h2>
                {selectedTitles.map((title, index) => (
                    <div key={index} className="flex justify-between mb-2">
                        <span className="text-lg">{title}</span>
                        <span className="text-lg font-semibold">{selectedPrices[index]}</span>
                    </div>
                ))}
                <div className="border-t border-gray-300 my-4"></div>
                <div className="flex justify-between font-semibold text-lg mt-4">
    <span>Subtotal</span>
    <span>${selectedPrices.reduce((total, price) => {
        const priceValue = parseFloat(price.replace(/[^\d.]/g, ''));
        return total + (isNaN(priceValue) ? 0 : priceValue);
    }, 0).toFixed(2)}</span>
</div>

                <p className="text-gray-600 mt-4 text-sm">
                    Your personal data will be used to process your order, support your experience 
                    throughout the website, and for other purposes described in our{' '}
                    <a href="#" className="text-blue-600 underline">Privacy policy</a>.
                </p>
                <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-3 rounded-md mt-6 hover:bg-blue-700 transition duration-300 disabled:opacity-50"
                    onClick={handleSubmit}
                    disabled={submitLoading}
                >
                    {submitLoading ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                        </span>
                    ) : "SUBMIT"}
                </button>
            </div>
        </div>
        <FlushWarrantyFooter/>
        </>
    );
};

export default BillingForm;