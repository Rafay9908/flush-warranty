import React, { useState } from "react";
import Navbar from "../navbar";
import FlushWarrantyFooter from "../FlushWarrantyFooter";

import iconOne from "../../assets/iconOne.png";
import iconTwo from "../../assets/iconTwo.png";
import iconThree from "../../assets/iconThree.png";
import iconFour from "../../assets/iconFour.png";
import iconFive from "../../assets/iconFive.png";
import iconSix from "../../assets/iconSix.png";

import { IoIosArrowDown } from "react-icons/io";
import { MdDelete } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
const productCards = [
  {
    id:"HUe7oRoznbZ9lhH5olWw",
    image: iconOne,
    title: "Leaching Field Coverage",
    startingPrice: "$14.99/Month",
    selectedOption: "$14.99/Month for 36 Months",
    pricingOptions: [
      "$14.99/Month for 36 Months",
      "$19.99/Month for 72 Months",
      "$29.99/Month for 108 Months",
    ],
    description:
      "Protects against failures in the leaching field and related issues.",
    note: "Final pricing and eligibility contingent on inspection.",
    sections: [
      {
        heading: "Monthly Terms",
        content: [
          "Starting Price: $18/month",
          "Final price and eligibility determined after inspection.",
        ],
      },
      {
        heading: "Why It Matters",
        content: {
          paragraph:
            "Leaching field repairs or replacements can cost $20,000 or more. Leaching systems typically last 25–40 years. This coverage protects you from unexpected expenses and ensures you’re not paying out-of-pocket for major repairs.",
          bullets: [
            "Repair or replacement of leaching field pipes.",
            "Replacement of failed distribution boxes.",
            "Repairs addressing soil absorption issues.",
            "Includes all materials and labor required for covered repairs or replacements.",
            "Transferability: Coverage can be transferred to the next homeowner.",
          ],
        },
      },
      {
        heading: "Service Fees",
        content: [
          "Deductible: $1,250 per claim.",
          "Maximum Coverage Limit: $25,000.",
          "Final pricing and eligibility contingent on inspection.",
        ],
      },
    ],
    buttonText: "SELECT COVERAGE",
  },

  {
    id:"72V55XJap3h5hTBfw3qs",
    image: iconTwo,
    title: "Septic Major Component Plan",
    startingPrice: "$14.99/Month",
    selectedOption: "$14.99/Month for 36 Months",
    pricingOptions: [
      "$14.99/Month for 36 Months",
      "$19.99/Month for 72 Months",
      "$29.99/Month for 108 Months",
    ],
    description:
      "Protects against failures in the leaching field and related issues.",
    note: "Final pricing and eligibility contingent on inspection.",
    sections: [
      {
        heading: "Monthly Terms",
        content: [
          "Starting Price: $18/month",
          "Final price and eligibility determined after inspection.",
        ],
      },
      {
        heading: "Why It Matters",
        content: {
          paragraph:
            "Leaching field repairs or replacements can cost $20,000 or more. Leaching systems typically last 25–40 years. This coverage protects you from unexpected expenses and ensures you’re not paying out-of-pocket for major repairs.",
          bullets: [
            "Repair or replacement of leaching field pipes.",
            "Replacement of failed distribution boxes.",
            "Repairs addressing soil absorption issues.",
            "Includes all materials and labor required for covered repairs or replacements.",
            "Transferability: Coverage can be transferred to the next homeowner.",
          ],
        },
      },
      {
        heading: "Service Fees",
        content: [
          "Deductible: $1,250 per claim.",
          "Maximum Coverage Limit: $25,000.",
          "Final pricing and eligibility contingent on inspection.",
        ],
      },
    ],
    buttonText: "SELECT COVERAGE",
  },

  {
    id:"pB5QCDKDTNbtl9H38vMz",
    image: iconThree,
    title: "Ejector Pump Coverage",
    startingPrice: "$14.99/Month",
    selectedOption: "$14.99/Month for 36 Months",
    pricingOptions: [
      "$14.99/Month for 36 Months",
      "$19.99/Month for 72 Months",
      "$29.99/Month for 108 Months",
    ],
    description:
      "Protects against failures in the leaching field and related issues.",
    note: "Final pricing and eligibility contingent on inspection.",
    sections: [
      {
        heading: "Monthly Terms",
        content: [
          "Starting Price: $18/month",
          "Final price and eligibility determined after inspection.",
        ],
      },
      {
        heading: "Why It Matters",
        content: {
          paragraph:
            "Leaching field repairs or replacements can cost $20,000 or more. Leaching systems typically last 25–40 years. This coverage protects you from unexpected expenses and ensures you’re not paying out-of-pocket for major repairs.",
          bullets: [
            "Repair or replacement of leaching field pipes.",
            "Replacement of failed distribution boxes.",
            "Repairs addressing soil absorption issues.",
            "Includes all materials and labor required for covered repairs or replacements.",
            "Transferability: Coverage can be transferred to the next homeowner.",
          ],
        },
      },
      {
        heading: "Service Fees",
        content: [
          "Deductible: $1,250 per claim.",
          "Maximum Coverage Limit: $25,000.",
          "Final pricing and eligibility contingent on inspection.",
        ],
      },
    ],
    buttonText: "SELECT COVERAGE",
  },

  {
    id:"Wv9QwWG0VpcIUBsDk08J",
    image: iconFour,
    title: "Routine Pumping",
    startingPrice: "$14.99/Month",
    selectedOption: "$14.99/Month for 36 Months",
    pricingOptions: [
      "$14.99/Month for 36 Months",
      "$19.99/Month for 72 Months",
      "$29.99/Month for 108 Months",
    ],
    description:
      "Protects against failures in the leaching field and related issues.",
    note: "Final pricing and eligibility contingent on inspection.",
    sections: [
      {
        heading: "Monthly Terms",
        content: [
          "Starting Price: $18/month",
          "Final price and eligibility determined after inspection.",
        ],
      },
      {
        heading: "Why It Matters",
        content: {
          paragraph:
            "Leaching field repairs or replacements can cost $20,000 or more. Leaching systems typically last 25–40 years. This coverage protects you from unexpected expenses and ensures you’re not paying out-of-pocket for major repairs.",
          bullets: [
            "Repair or replacement of leaching field pipes.",
            "Replacement of failed distribution boxes.",
            "Repairs addressing soil absorption issues.",
            "Includes all materials and labor required for covered repairs or replacements.",
            "Transferability: Coverage can be transferred to the next homeowner.",
          ],
        },
      },
      {
        heading: "Service Fees",
        content: [
          "Deductible: $1,250 per claim.",
          "Maximum Coverage Limit: $25,000.",
          "Final pricing and eligibility contingent on inspection.",
        ],
      },
    ],
    buttonText: "SELECT COVERAGE",
  },

  {
    id:"PnJyfsKECatzdFkbXT4N",
    image: iconFive,
    title: "Septic Tank Coverage",
    startingPrice: "$14.99/Month",
    selectedOption: "$14.99/Month for 36 Months",
    pricingOptions: [
      "$14.99/Month for 36 Months",
      "$19.99/Month for 72 Months",
      "$29.99/Month for 108 Months",
    ],
    description:
      "Protects against failures in the leaching field and related issues.",
    note: "Final pricing and eligibility contingent on inspection.",
    sections: [
      {
        heading: "Monthly Terms",
        content: [
          "Starting Price: $18/month",
          "Final price and eligibility determined after inspection.",
        ],
      },
      {
        heading: "Why It Matters",
        content: {
          paragraph:
            "Leaching field repairs or replacements can cost $20,000 or more. Leaching systems typically last 25–40 years. This coverage protects you from unexpected expenses and ensures you’re not paying out-of-pocket for major repairs.",
          bullets: [
            "Repair or replacement of leaching field pipes.",
            "Replacement of failed distribution boxes.",
            "Repairs addressing soil absorption issues.",
            "Includes all materials and labor required for covered repairs or replacements.",
            "Transferability: Coverage can be transferred to the next homeowner.",
          ],
        },
      },
      {
        heading: "Service Fees",
        content: [
          "Deductible: $1,250 per claim.",
          "Maximum Coverage Limit: $25,000.",
          "Final pricing and eligibility contingent on inspection.",
        ],
      },
    ],
    buttonText: "SELECT COVERAGE",
  },

  {
    id:"8PKKH94jrOHDhB3oq5lN",
    image: iconSix,
    title: "Sewer Pipe Coverage",
    startingPrice: "$14.99/Month",
    selectedOption: "$14.99/Month for 36 Months",
    pricingOptions: [
      "$14.99/Month for 36 Months",
      "$19.99/Month for 72 Months",
      "$29.99/Month for 108 Months",
    ],
    description:
      "Protects against failures in the leaching field and related issues.",
    note: "Final pricing and eligibility contingent on inspection.",
    sections: [
      {
        heading: "Monthly Terms",
        content: [
          "Starting Price: $18/month",
          "Final price and eligibility determined after inspection.",
        ],
      },
      {
        heading: "Why It Matters",
        content: {
          paragraph:
            "Leaching field repairs or replacements can cost $20,000 or more. Leaching systems typically last 25–40 years. This coverage protects you from unexpected expenses and ensures you’re not paying out-of-pocket for major repairs.",
          bullets: [
            "Repair or replacement of leaching field pipes.",
            "Replacement of failed distribution boxes.",
            "Repairs addressing soil absorption issues.",
            "Includes all materials and labor required for covered repairs or replacements.",
            "Transferability: Coverage can be transferred to the next homeowner.",
          ],
        },
      },
      {
        heading: "Service Fees",
        content: [
          "Deductible: $1,250 per claim.",
          "Maximum Coverage Limit: $25,000.",
          "Final pricing and eligibility contingent on inspection.",
        ],
      },
    ],
    buttonText: "SELECT COVERAGE",
  },
];
function Shop() {
  const [openItems, setOpenItems] = useState({});
  const [selectedOptions, setSelectedOptions] = useState(productCards.map(card => card.selectedOption));

  
  const handleOptionChange = (index, value) => {
    setSelectedOptions((prev) => {
      const newOptions = [...prev];
      newOptions[index] = value;
      return newOptions;
    });
  };

  const navigate = useNavigate();
  const toggleSelection = (index) => {
    setSelected((prev) => {
        let newSelection = [...prev];
        if (index === 1) {
            const newValue = !newSelection[1];
            newSelection = newSelection.map((_, idx) => idx !== 2 && idx !== 3 ? newValue : false);
        } else {
            newSelection[index] = !newSelection[index];
        }
        return newSelection;
    });
};

  const toggle = (cardIndex, sectionIndex) => {
    setOpenItems((prev) => ({
      ...prev,
      [cardIndex]: prev[cardIndex] === sectionIndex ? null : sectionIndex,
    }));
  };

  const handleProceed = (selectedCards, selectedPrices, selectedTitles,selectedIds) => {
    navigate('/billing', { state: { selectedCards, selectedPrices, selectedTitles,selectedIds } });
  };
  
  

  const [selected, setSelected] = useState(Array(productCards.length).fill(false));
  const extractPrice = (priceString) => {
    const match = priceString.match(/\$?(\d+(\.\d{1,2})?)/);
    return match ? `$${match[1]}` : priceString;
  };
  return (
    <>
      <Navbar />
      <div className="w-full max-w-screen-lg mx-auto my-15 ">
        <div className="text-center mb-[50px]">
          <h3 className="text-[32px] font-bold leading-[44px] mb-[15px] text-black">
            We’ve got you covered.
          </h3>
          <p className="text-[26px] leading-[39px] text-black">
            Available plans in: NORWALK, CT
          </p>
        </div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 px-8 mx-auto justify-center">
  {productCards.map((card, i) => (
    <div
      key={i}
      className="relative p-6 bg-[#f7fbff] rounded-2xl shadow-lg border border-gray-300 w-[300px] mx-auto hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
      {i === 1 && (
        <div className="absolute top-0 left-0 bg-green-600 text-white py-1 px-3 rounded-tl-2xl rounded-br-2xl text-sm font-semibold">Popular</div>
      )}
      <div className="flex justify-between items-center mb-4">
        <img className="w-12 h-12" src={card.image} alt="" />
        <div className="text-right">
          <p className="text-xs text-gray-600">Starting From</p>
          <h3 className="text-3xl font-bold text-gray-900">{extractPrice(selectedOptions[i])}/Month</h3>
          <select
            className="text-xs text-gray-700 bg-white border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-500 cursor-pointer"
            value={selectedOptions[i]}
            onChange={(e) => handleOptionChange(i, e.target.value)}
          >
            {card.pricingOptions.map((price, idx) => (
              <option key={idx} value={price}>{price}</option>
            ))}
          </select>
        </div>
      </div>
      <h3 className="text-blue-600 text-lg font-medium mb-2">{card.title}</h3>
      <p className="text-gray-800 text-sm mb-1">{card.description}</p>
      <p className="text-gray-600 text-sm italic">{card.note}</p>

      {card.sections.map((section, j) => (
        <div key={j} className="border-t border-gray-300 py-3 cursor-pointer" onClick={() => toggle(i, j)}>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold text-gray-900">{section.heading}</h4>
            <IoIosArrowDown className={`transform transition-transform duration-300 ${openItems[i] === j ? "rotate-180" : ""}`} />
          </div>
        </div>
      ))}

      <div className="text-center mt-4">
        {!selected[i] ? (
          <button 
            onClick={() => toggleSelection(i)}
            className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors"
          >
            Select Coverage
          </button>
        ) : (
          <div className="flex justify-center gap-2">
            <button 
              onClick={() => handleProceed(
                productCards.filter((_, idx) => selected[idx]), 
                selectedOptions.filter((_, idx) => selected[idx]),
                productCards.filter((_, idx) => selected[idx]).map(card => card.title),
                productCards.filter((_, idx) => selected[idx]).map(card => card.id) // Include IDs

              )}
              className="bg-green-600 text-white font-bold py-2 px-2 rounded-full hover:bg-green-700 transition-colors"
            >
              Proceed to Application
            </button>
            <MdDelete  
              onClick={() => toggleSelection(i)}
              className="text-gray-600 text-2xl cursor-pointer" 
            />
          </div>
        )}
      </div>
    </div>
  ))}
</div>


      </div>

      <FlushWarrantyFooter />
    </>
  );
}

export default Shop;
