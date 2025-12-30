import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Download, ArrowRight, BookOpen, Users } from 'lucide-react';
import { CONFERENCE_DETAILS } from '../constants';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/1920/1080?grayscale&blur=2"
            alt="Conference Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ieee-dark/90 to-ieee-blue/80 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 px-4 text-center">
            <div className="inline-block px-3 py-1 mb-4 border border-ieee-light text-ieee-light rounded-full text-xs font-semibold tracking-wider uppercase bg-black/30">
                Hybrid Mode Available
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif leading-tight">
                2025 1st IEEE International<br />VIIT Conference
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light italic">
                Theme: "{CONFERENCE_DETAILS.theme}"
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 text-lg">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded backdrop-blur-sm">
                    <Calendar className="text-ieee-light" />
                    <span>{CONFERENCE_DETAILS.dates}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded backdrop-blur-sm">
                    <MapPin className="text-ieee-light" />
                    <span>Visakhapatnam, India</span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/call-for-papers" className="px-8 py-3 bg-ieee-light hover:bg-sky-500 text-white font-semibold rounded shadow-lg transition flex items-center justify-center gap-2">
                    <BookOpen size={18} /> Submit Paper
                </Link>
            </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-ieee-dark font-serif border-l-4 border-ieee-light pl-4">
                        About VIIT Conference
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        The <strong>2025 IEEE Flagship International VIIT Conference</strong> aims to bring together leading academicians, scientists, researchers, and research scholars to exchange and share their experiences and research results on all aspects of Engineering and Technology Innovation.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        It also provides a premier interdisciplinary platform for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, and concerns as well as practical challenges encountered and solutions adopted in the fields of Computing, Cybersecurity, Electronics, Power Systems, and Materials Science.
                    </p>
                    <Link to="/about" className="inline-flex items-center text-ieee-blue font-semibold hover:text-ieee-dark transition mt-2">
                        Read more about the institute <ArrowRight size={16} className="ml-1" />
                    </Link>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl group">
                    <img 
                        src="https://picsum.photos/800/600?random=2" 
                        alt="Conference Hall" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <p className="font-bold text-lg">Join the Global Network</p>
                            <p className="text-sm opacity-90">Connect with experts from around the world.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Important Dates Teaser */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl font-bold text-ieee-dark mb-8 font-serif">Important Deadlines</h2>
            <div className="grid gap-6">
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 flex flex-col md:flex-row justify-between items-center hover:shadow-md transition">
                    <div className="text-left">
                        <h4 className="font-bold text-lg text-slate-800">Abstract Submission</h4>
                        <p className="text-sm text-gray-500">Submit your initial research abstract</p>
                    </div>
                    <div className="mt-4 md:mt-0 px-4 py-2 bg-red-100 text-red-700 rounded font-bold">
                        TBA
                    </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 flex flex-col md:flex-row justify-between items-center hover:shadow-md transition">
                    <div className="text-left">
                        <h4 className="font-bold text-lg text-slate-800">Full Paper Submission</h4>
                        <p className="text-sm text-gray-500">Camera-ready paper submission</p>
                    </div>
                    <div className="mt-4 md:mt-0 px-4 py-2 bg-yellow-100 text-yellow-800 rounded font-bold">
                        TBA
                    </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 flex flex-col md:flex-row justify-between items-center hover:shadow-md transition">
                    <div className="text-left">
                        <h4 className="font-bold text-lg text-slate-800">Early Bird Registration</h4>
                        <p className="text-sm text-gray-500">Avail discounted rates</p>
                    </div>
                    <div className="mt-4 md:mt-0 px-4 py-2 bg-green-100 text-green-800 rounded font-bold">
                        TBA
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <Link to="/call-for-papers" className="text-ieee-blue font-semibold hover:underline flex items-center justify-center gap-1">
                    <Download size={16} /> Download Conference Brochure
                </Link>
            </div>
        </div>
      </section>
    </>
  );
};

export default Home;