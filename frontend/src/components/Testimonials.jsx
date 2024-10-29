import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote: "Their innovative IT solutions have transformed our business operations. The team's expertise and dedication to cutting-edge technology have given us a significant competitive advantage.",
    name: "Alex Johnson",
    position: "CTO",
    company: "TechCorp Innovations"
  },
  {
    id: 2,
    quote: "The level of technical support we've received has been outstanding. They've consistently delivered solutions that not only meet but exceed our expectations.",
    name: "Sarah Lee",
    position: "IT Director",
    company: "Global Systems Inc."
  },
  {
    id: 3,
    quote: "Their cloud migration services were flawless. We saw immediate improvements in performance and significant cost savings. Highly recommended!",
    name: "Michael Chen",
    position: "CEO",
    company: "NextGen Startups"
  },
  {
    id: 4,
    quote: "The cybersecurity measures they implemented have given us peace of mind. Their proactive approach to threat detection is unparalleled.",
    name: "Emily Rodriguez",
    position: "CISO",
    company: "SecureBank"
  },
  {
    id: 5,
    quote: "Their AI and machine learning solutions have revolutionized our data analysis capabilities. We're now able to make data-driven decisions faster than ever.",
    name: "David Kim",
    position: "Data Science Lead",
    company: "AI Innovations Ltd."
  },
  {
    id: 6,
    quote: "The custom software they developed for us has streamlined our operations significantly. It's like they read our minds and delivered exactly what we needed.",
    name: "Lisa Patel",
    position: "Operations Manager",
    company: "Efficient Logistics Co."
  },
  {
    id: 7,
    quote: "Their IoT solutions have transformed our manufacturing processes. We've seen a 30% increase in efficiency since implementation.",
    name: "Robert Schmidt",
    position: "Plant Manager",
    company: "Smart Factory Systems"
  },
  {
    id: 8,
    quote: "The 24/7 IT support has been a game-changer for our global operations. No matter the time or issue, they're always there with a solution.",
    name: "Anna Kowalski",
    position: "Global IT Coordinator",
    company: "WorldWide Enterprises"
  },
  {
    id: 9,
    quote: "Their blockchain implementation has revolutionized our supply chain tracking. We now have unprecedented transparency and security.",
    name: "James Wong",
    position: "Supply Chain Director",
    company: "Future Chain Solutions"
  },
  {
    id: 10,
    quote: "The VR training modules they developed have significantly improved our onboarding process. It's both efficient and engaging for our new hires.",
    name: "Sophia Martinez",
    position: "HR Director",
    company: "VR Education Systems"
  }
];

// TestimonialCard component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 p-4 flex-shrink-0">
      <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden h-full flex flex-col">
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-4">
          <div className="w-16 h-16 mx-auto rounded-full border-2 border-gray-700 overflow-hidden">
            {testimonial.avatarUrl ? (
              <img
                src={testimonial.avatarUrl}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-600 text-gray-300">
                <User size={32} />
              </div>
            )}
          </div>
        </div>
        <div className="p-6 flex-grow">
          <blockquote className="text-gray-300 mb-4 italic">"{testimonial.quote}"</blockquote>
          <div className="text-right">
            <cite className="text-lg font-semibold text-gray-100 not-italic">{testimonial.name}</cite>
            <p className="text-sm text-gray-400">
              {testimonial.position}, <span className="text-gray-500">{testimonial.company}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Testimonials component
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonials, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-10 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-100 mb-8">
          What Our Clients Say
        </h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          Discover how our IT solutions have transformed businesses across industries
        </p>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 25}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
          <button
            onClick={prevTestimonials}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-gray-700 p-2 rounded-full shadow-lg text-gray-200 hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonials}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-gray-700 p-2 rounded-full shadow-lg text-gray-200 hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label="Next testimonials"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(testimonials.length)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 focus:outline-none ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-600'
              }`}
              aria-label={`Go to testimonial set ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
