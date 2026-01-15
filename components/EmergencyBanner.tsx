
import React from 'react';
import { Phone, Clock } from 'lucide-react';

const EmergencyBanner: React.FC = () => {
  return (
    <section className="py-12 bg-blue-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-700 rounded-full blur-3xl -ml-32 -mb-32 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <div className="bg-red-500 w-3 h-3 rounded-full animate-ping"></div>
              <span className="text-red-400 font-bold tracking-widest uppercase text-sm">Emergency Alert</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              Have a Plumbing Emergency?
            </h2>
            <p className="text-blue-100 text-lg font-medium">
              We provide 24/7 rapid response for all critical plumbing issues.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full lg:w-auto">
            <div className="flex items-center space-x-3 text-white">
              <Clock className="h-8 w-8 text-blue-400" />
              <div className="text-left">
                <div className="text-xs uppercase font-bold opacity-70 leading-tight">Response Time</div>
                <div className="text-lg font-bold">Under 60 Mins</div>
              </div>
            </div>
            <a
              href="tel:01234567890"
              className="w-full sm:w-auto bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center space-x-3 shadow-2xl hover:bg-blue-50 transition-colors group"
            >
              <Phone className="h-6 w-6 group-hover:rotate-12 transition-transform" />
              <span>Call 0123 456 7890</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
