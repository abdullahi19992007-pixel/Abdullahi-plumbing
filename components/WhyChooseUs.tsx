
import React from 'react';
import { ShieldCheck, Clock, DollarSign, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: 'Fully Licensed & Insured',
    description: 'Complete peace of mind. We are accredited professionals with full liability coverage.',
    icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
  },
  {
    title: 'Fast Response Times',
    description: 'We value your time. Our local engineers are strategically placed for quick arrival.',
    icon: <Clock className="h-10 w-10 text-blue-600" />,
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprise costs. We provide fixed-price quotes before we start.',
    icon: <DollarSign className="h-10 w-10 text-blue-600" />,
  },
  {
    title: 'Guaranteed Workmanship',
    description: 'We stand by our work. All repairs and installations come with a solid guarantee.',
    icon: <CheckCircle2 className="h-10 w-10 text-blue-600" />,
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-16">
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-6">
              Why Homeowners Choose Abdullahi Plumbing
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We’ve built a reputation for excellence through consistent, reliable service. Our mission is to provide the highest quality plumbing solutions while maintaining total transparency.
            </p>
            <div className="space-y-4">
              {['Local family-owned business', 'Gas Safe registered engineers', 'Modern non-invasive techniques', '5-star rated customer service'].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="bg-green-100 p-1 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-slate-700 font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
