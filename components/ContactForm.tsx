
import React, { useState } from 'react';
import { Send, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real logic would go here
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
          <div className="lg:flex">
            {/* Contact Info Sidebar */}
            <div className="lg:w-1/3 bg-blue-600 p-10 lg:p-16 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get a Free Quote Today</h2>
                <p className="text-blue-100 mb-10 text-lg leading-relaxed">
                  Fill out the form and our team will get back to you with a transparent estimate.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500/50 p-2 rounded-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-bold">Call Us Directly</div>
                      <div className="text-blue-100">0123 456 7890</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500/50 p-2 rounded-lg">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-bold">Email Us</div>
                      <div className="text-blue-100">info@abdullahiplumbing.co.uk</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500/50 p-2 rounded-lg">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-bold">Operating Hours</div>
                      <div className="text-blue-100">24/7 For Emergencies</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-10 border-t border-blue-500/30">
                <div className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-2">Licensed Professional</div>
                <div className="flex space-x-2">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">🛡️</div>
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">⚡</div>
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">✅</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3 p-10 lg:p-16">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                  <div className="bg-green-100 p-4 rounded-full mb-6">
                    <CheckCircle className="h-16 w-16 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-blue-900 mb-4">Request Received!</h3>
                  <p className="text-slate-600 text-lg mb-8 max-w-md">
                    Thank you for reaching out. One of our plumbing specialists will call you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="0123 456 7890"
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Select Service</label>
                    <select className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all bg-white">
                      <option>Emergency Repair</option>
                      <option>Leak Detection</option>
                      <option>Boiler Service</option>
                      <option>Pipe Installation</option>
                      <option>Other / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Postcode</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. SW1A 1AA"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Brief Description</label>
                    <textarea 
                      rows={4}
                      placeholder="How can we help you today?"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-100 transition-all hover:-translate-y-1 flex items-center justify-center space-x-3 text-lg"
                  >
                    <span>Send Request</span>
                    <Send className="h-5 w-5" />
                  </button>
                  <p className="text-center text-xs text-slate-400 font-medium">
                    By submitting, you agree to our privacy policy. We typically respond within 15 minutes.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
