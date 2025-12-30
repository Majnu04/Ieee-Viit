import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16">
        
        <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-ieee-dark mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions about submission, registration, or the venue? Reach out to us using the form below or via our direct contact channels.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Info Card */}
            <div className="bg-ieee-dark text-white rounded-2xl p-10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-ieee-light rounded-full opacity-20"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-ieee-blue rounded-full opacity-20"></div>
                
                <h3 className="text-2xl font-bold mb-8 relative z-10">Get in Touch</h3>
                
                <div className="space-y-8 relative z-10">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <MapPin size={20} className="text-ieee-light" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Conference Venue</p>
                            <p className="text-gray-300 text-sm mt-1">
                                Vignan's Institute of Information Technology,<br />
                                Beside VSEZ, Duvvada, Vadalapudi Post,<br />
                                Gajuwaka, Visakhapatnam - 530049, Andhra Pradesh, India
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Mail size={20} className="text-ieee-light" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Email Us</p>
                            <p className="text-gray-300 text-sm mt-1">vignaniit@yahoo.com</p>
                            <p className="text-gray-300 text-sm">info@vignaniit.edu.in</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                         <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Phone size={20} className="text-ieee-light" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Call Us</p>
                            <p className="text-gray-300 text-sm mt-1">+91 891 275 5222</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Message</h3>
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-ieee-light focus:border-transparent outline-none transition" placeholder="John" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-ieee-light focus:border-transparent outline-none transition" placeholder="Doe" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-ieee-light focus:border-transparent outline-none transition" placeholder="john@university.edu" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                         <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-ieee-light focus:border-transparent outline-none transition bg-white">
                            <option>General Inquiry</option>
                            <option>Paper Submission</option>
                            <option>Registration Issue</option>
                            <option>Sponsorship</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                        <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-ieee-light focus:border-transparent outline-none transition" placeholder="How can we help you?"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-ieee-blue hover:bg-ieee-dark text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2">
                        <Send size={18} /> Send Message
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;