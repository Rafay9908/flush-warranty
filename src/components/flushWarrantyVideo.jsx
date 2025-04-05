import React from 'react';
import underline from "../assets/underline_image.png"

const FlushWarranty = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-50 py-10 px-4 md:px-20 lg:px-40">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6">
        Why Choose Our Flush Warranty? <br /> Find Out Here!
      </h2>
      <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg mb-8">
        <iframe 
          className="w-full h-64 md:h-96"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="Understanding Our Flush Warranty - What You Need to Know" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
        <div className=""><img src={underline}/></div>
    </div>
  );
};

export default FlushWarranty;