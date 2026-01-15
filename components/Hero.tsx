
import React from 'react';
import { Phone, ArrowRight, Droplets } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50 rounded-bl-[100px] hidden lg:block"></div>
      <div className="absolute top-20 right-20 -z-10 opacity-10 hidden lg:block animate-bounce">
        <Droplets className="h-48 w-48 text-blue-600" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
              Trusted Local Plumber
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
              Expert Plumbing Services You Can <span className="text-blue-600">Trust</span>.
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              From emergency leaks to full boiler installations, Abdullahi Plumbing provides fast, transparent, and reliable solutions for your home.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="tel:01234567890"
                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-blue-100 text-blue-600 hover:border-blue-600 font-bold rounded-xl transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call 0123 456 7890</span>
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available Now</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-600">★ ★ ★ ★ ★</span>
                <span>500+ Happy Clients</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
             <div className="bg-blue-600/5 p-8 rounded-3xl border border-blue-100">
                <img 
                  src="https://picsum.photos/seed/plumbing/800/600" 
                  alt="Plumbing Illustration" 
                  className="rounded-2xl shadow-2xl mix-blend-multiply opacity-90"
                />
                {/* Float-in badges */}
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl hidden sm:block border border-blue-50">
                   <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Droplets className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-bold uppercase">Emergency</div>
                        <div className="text-blue-900 font-bold">24/7 Available</div>
                      </div>
                   </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-600 p-4 rounded-2xl shadow-xl hidden sm:block">
                   <div className="text-white font-bold">Fast Response</div>
                   <div className="text-blue-100 text-xs font-medium">Under 60 Minutes</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
