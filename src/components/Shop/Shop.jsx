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

function Shop() {
  const [openItems, setOpenItems] = useState({});

  const toggle = (cardIndex, sectionIndex) => {
    setOpenItems((prev) => ({
      ...prev,
      [cardIndex]: prev[cardIndex] === sectionIndex ? null : sectionIndex,
    }));
  };

  const productCards = [
    {
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
      image: iconTwo,
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
      image: iconThree,
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
      image: iconFour,
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
      image: iconFive,
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
      image: iconSix,
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
  ];

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

        <div className="grid sm:grid-cols-2 justify-center lg:grid-cols-3 gap-x-8 xl:gap-x-12 gap-y-12 px-[30px] mx-auto">
          {productCards.map((card, i) => (
            <div
              style={{
                boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.25)",
                border: "1px solid #D1D1D1",
              }}
              className="p-3.5 rounded-[25px]"
              key={i}
            >
              <div className="flex flex-row justify-between">
                <img className="w-12 h-12" src={card.image} alt="" />
                <div className="text-right">
                  <p className="text-xs font-normal leading-[18px] text-[#111111] text-center">
                    Starting From
                  </p>
                  <h3 className="text-[28px] font-bold leading-[42px] text-[#111111]">
                    {card.startingPrice}
                  </h3>

                  <select
                    className="text-xs font-normal text-black outline-none cursor-pointer"
                    defaultValue={card.selectedOption}
                  >
                    {card.pricingOptions.map((price, i) => (
                      <option key={i} value={price}>
                        {price}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-[40px]">
                <h3 className="text-[#007bc7] text-base leading-[22px] font-normal mb-[25px]">
                  {card.title}
                </h3>
                <p className="text-[#222222] text-sm leading-[21px]">
                  {card.description}
                </p>
                <p className="text-[#222222] text-sm leading-[21px] italic">
                  {card.note}
                </p>
              </div>

              {/* Accordion */}

              {card.sections.map((section, j) => (
                <div key={j}>
                  <div
                    onClick={() => toggle(i, j)}
                    className="cursor-pointer flex justify-between items-center py-[14px] border-t-[1px] border-[#cccccca8]"
                  >
                    <h4 className="text-lg font-semibold">{section.heading}</h4>
                    <IoIosArrowDown
                      className={`transform transition-transform duration-300 ${
                        openItems[i] === j ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {openItems[i] === j && (
                    <div className="mt-2 text-sm text-gray-700 mb-3">
                      {Array.isArray(section.content) ? (
                        <ul className="list-disc pl-4">
                          {section.content.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <div>
                          <p className="mb-2">{section.content.paragraph}</p>
                          <ul className="list-disc pl-4">
                            {section.content.bullets.map((bullet, idx) => (
                              <li key={idx}>{bullet}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <FlushWarrantyFooter />
    </>
  );
}

export default Shop;
