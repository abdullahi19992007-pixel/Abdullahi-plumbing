
import React from 'react';
import { Droplets, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Abdullahi Plumbing
              </span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Your local plumbing experts providing reliable, high-quality services for residential and commercial properties since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Emergency Repairs</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Leak Detection</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Pipe Installation</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Drain Unblocking</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Boiler Servicing</a></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Business Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white font-medium">8:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white font-medium">9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white font-medium">10:00 - 16:00</span>
              </li>
              <li className="flex justify-between pt-3 border-t border-slate-800">
                <span className="text-blue-400 font-bold">Emergency</span>
                <span className="text-blue-400 font-bold">24 Hours</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-500 mt-1" />
                <span>0123 456 7890</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-500 mt-1" />
                <span className="break-all">info@abdullahiplumbing.co.uk</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-1" />
                <span>123 Plumbing Way, London, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Abdullahi Plumbing. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
