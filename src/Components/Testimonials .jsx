import React, { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: 'Tom Anderson',
      role: 'CEO, Tech Solutions',
      testimonial: `"Exceptional technical skills and problem-solving abilities. Delivered our IoT project ahead of schedule with outstanding quality."`,
      image: 'T',
    },
    {
      name: 'Sarah Williams',
      role: 'Project Manager, InnovateCo',
      testimonial: `"Their expertise in embedded systems significantly improved our product's performance. Highly recommended for complex technical projects."`,
      image: 'S',
    },
    {
      name: 'John Doe',
      role: 'Founder, WebMasters',
      testimonial: `"They played a crucial role in enhancing the usability of our platform, making it more user-friendly and efficient."`,
      image: 'J',
    },
    // Add more testimonials as needed
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeIn">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="testimonial-slider overflow-hidden">
            <div
              className="testimonial-wrapper flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-2xl text-white font-bold">{testimonial.image}</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-xl font-semibold text-neutral-900">{testimonial.name}</h4>
                        <p className="text-blue-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-neutral-600 mb-4">{testimonial.testimonial}</p>
                    <div className="flex text-yellow-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {/* Repeat above SVGs for star ratings */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button
              className="p-2 text-white bg-blue-500 rounded-full"
              onClick={prevTestimonial}
            >
              &lt;
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button
              className="p-2 text-white bg-blue-500 rounded-full"
              onClick={nextTestimonial}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
