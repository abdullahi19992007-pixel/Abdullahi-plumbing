
import React from 'react';
import { 
  Flame, 
  Droplets, 
  Wrench, 
  UtilityPole, 
  Stethoscope, 
  Search 
} from 'lucide-react';

const services = [
  {
    title: 'Emergency Repairs',
    description: 'Burst pipes, major leaks, or toilet overflows. We arrive fast to save the day.',
    icon: <Flame className="h-8 w-8 text-red-500" />,
    color: 'bg-red-50',
  },
  {
    title: 'Leak Detection',
    description: 'Non-invasive technology to find hidden leaks before they cause damage.',
    icon: <Search className="h-8 w-8 text-blue-500" />,
    color: 'bg-blue-50',
  },
  {
    title: 'Pipe Installation',
    description: 'Professional plumbing for renovations, extensions, or new builds.',
    icon: <UtilityPole className="h-8 w-8 text-indigo-500" />,
    color: 'bg-indigo-50',
  },
  {
    title: 'Drain Unblocking',
    description: 'High-pressure jetting to clear even the most stubborn blockages.',
    icon: <Droplets className="h-8 w-8 text-cyan-500" />,
    color: 'bg-cyan-50',
  },
  {
    title: 'Boiler Servicing',
    description: 'Keep your heating efficient and safe with annual expert checkups.',
    icon: <Stethoscope className="h-8 w-8 text-teal-500" />,
    color: 'bg-teal-50',
  },
  {
    title: 'General Maintenance',
    description: 'From dripping taps to faulty radiators, we handle all the small stuff too.',
    icon: <Wrench className="h-8 w-8 text-slate-500" />,
    color: 'bg-slate-50',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">Our Services</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive plumbing solutions delivered by licensed experts. No job is too big or too small.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
