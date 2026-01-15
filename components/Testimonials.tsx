
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Homeowner in London',
    content: "Abdullahi fixed a major leak in my kitchen within an hour of calling. Professional, polite, and very reasonably priced. Highly recommended!",
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  },
  {
    name: 'Michael Chen',
    role: 'Property Manager',
    content: "We use Abdullahi Plumbing for all our rental properties. They are consistent, reliable, and our tenants always give great feedback about their service.",
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
  },
  {
    name: 'David Thompson',
    role: 'Business Owner',
    content: "Excellent service! They installed a new boiler for our office quickly and with minimal disruption. Very transparent about the costs from the start.",
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">What Our Clients Say</h2>
          <div className="flex justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100 flex flex-col"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-50 p-1 rounded-full border-2 border-blue-200">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full" />
                </div>
                <div className="ml-4 text-left">
                  <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed flex-grow">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
