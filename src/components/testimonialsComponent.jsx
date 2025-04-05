import React from 'react';
import underline from "../assets/underline_image.png"

const testimonials = [
    { name: 'Trevor', text: 'I almost didn’t buy my house because I didn’t want a house with a septic system. Having a FLUSH Warranty made me feel like I had city sewers.', rating: 5 },
    { name: 'Riley', text: 'I always forget to have my septic tank pumped and wait until I back up. Never have to worry about that again because they come automatically. Thanks Nick and Dean!!', rating: 5 },
    { name: 'Ashley', text: 'Great service and priced right.', rating: 5 }
];

const TestimonialsComponent = () => {
    return (
        <div className="bg-sky-50 p-8 text-center">
            <h2 className="text-4xl font-bold mb-2 text-blue-900">Customer Testimonials</h2>
            <div className="flex justify-center mb-4">
        <div className=""><img src={underline}/></div>
            </div>
            <div className="space-y-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="text-gray-700">
                        <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
                        <div className="flex justify-center my-2">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <span key={i} className="text-yellow-500 text-2xl">★</span>
                            ))}
                        </div>
                        <p className="max-w-2xl mx-auto">{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialsComponent;
