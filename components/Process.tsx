
import React from 'react';
import { Phone, Search, Wrench, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Call Us',
    description: 'Contact our friendly team to explain your issue and get a free initial consultation.',
    icon: <Phone className="h-10 w-10 text-white" />,
    color: 'bg-blue-600',
  },
  {
    title: 'Diagnose',
    description: 'Our expert arrives on time, inspects the problem, and gives you a clear, fixed quote.',
    icon: <Search className="h-10 w-10 text-white" />,
    color: 'bg-blue-700',
  },
  {
    title: 'Fix',
    description: 'We carry out the work efficiently, clean up after ourselves, and guarantee the results.',
    icon: <Wrench className="h-10 w-10 text-white" />,
    color: 'bg-blue-800',
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">How It Works</h2>
          <p className="text-lg text-slate-600">Professional service in three simple steps.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-blue-100 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`${step.color} w-24 h-24 rounded-full flex items-center justify-center shadow-xl mb-8 relative group hover:scale-110 transition-transform`}>
                  {step.icon}
                  <div className="absolute -top-2 -right-2 bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-white">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 max-w-xs">{step.description}</p>
                {index < 2 && (
                  <div className="lg:hidden mt-8 text-blue-100">
                    <ArrowRight className="h-8 w-8 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
