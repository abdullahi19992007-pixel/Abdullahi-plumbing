
import React from 'react';
import { MapPin } from 'lucide-react';

const areas = [
  'North London', 'South London', 'East London', 'West London', 
  'Central London', 'Watford', 'Enfield', 'Croydon', 
  'Harrow', 'Romford', 'Dartford', 'Richmond'
];

const ServiceAreas: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-16">
          <div className="lg:w-1/3 mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-6">Areas We Cover</h2>
            <p className="text-lg text-slate-600 mb-8">
              We provide professional plumbing services across the following regions. If you're nearby, give us a call!
            </p>
            <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
              <div className="flex items-center space-x-3 text-blue-900 mb-2">
                <MapPin className="h-5 w-5 font-bold" />
                <span className="font-bold">Main Office</span>
              </div>
              <p className="text-sm text-slate-600 font-medium">123 Plumbing Way, London, UK</p>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <div 
                key={index} 
                className="group bg-slate-50 hover:bg-blue-600 hover:text-white p-4 rounded-xl text-center font-bold text-slate-700 transition-all duration-300 cursor-default"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
