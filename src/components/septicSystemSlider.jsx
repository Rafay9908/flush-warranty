import React, { useEffect, useRef } from 'react';
import underline from "../assets/underline_image.png"

const SepticSystemSlider = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const firstChild = carouselRef.current.firstElementChild;
        carouselRef.current.appendChild(firstChild);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { name: 'Leaching Field', price: '$15,000-$25,000' },
    { name: 'Ejector Pumps', price: '$1,500-$2,000' },
    { name: 'Sewer Line', price: '$2,000-$6,000' },
    { name: 'Leaching Field', price: '$15,000-$25,000' },
    { name: 'Ejector Pumps', price: '$1,500-$2,000' },
    { name: 'Sewer Line', price: '$2,000-$6,000' },
  ];

  return (
    <div className="bg-blue-50 py-12 text-center">
      <h2 className="text-3xl font-bold text-blue-900">Breakdowns happen.<br />That's why we're here</h2>
      <div className="underline-container mt-2">
        <img src={underline} alt="Underline" className="mx-auto" />
      </div>
      
      <p className="text-gray-500 mt-2">Here are some average cost ranges to repair or replace septic system components.</p>
      <div className="overflow-hidden mt-8">
        <div ref={carouselRef} className="flex gap-4 animate-slide">
          {items.map((item, index) => (
            <div key={index} className="min-w-[300px] bg-white p-10 rounded-2xl shadow-md text-center mx-auto my-4" style={{ background: 'var(--Shufti-White)', width: 'max-content', maxWidth: 'unset', padding: '40px', borderRadius: '20px', margin: 'auto', marginBottom: '20px', marginTop: '40px', marginLeft: '10px', marginRight: '0' }}>
              <p className="text-xl font-semibold text-gray-900">{item.name}</p>
              <p className="text-blue-600">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SepticSystemSlider;
