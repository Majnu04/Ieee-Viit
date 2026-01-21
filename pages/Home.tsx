import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Download, ArrowRight, BookOpen } from 'lucide-react';
import { CONFERENCE_DETAILS } from '../constants';

const Home: React.FC = () => {
    return (
        <>
            <style>
                {`
                    @keyframes float-slow { 0% { transform: translateY(0); } 50% { transform: translateY(-12px); } 100% { transform: translateY(0); } }
                    .float-slow { animation: float-slow 10s ease-in-out infinite; }
                    @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(12px); } 100% { opacity: 1; transform: translateY(0); } }
                    .fade-in-up { animation: fade-in-up 700ms ease-out both; }
                `}
            </style>

            {/* Hero Section */}
            <section className="relative min-h-[560px] flex items-center justify-center text-white overflow-hidden">
                {/* Branded IEEE backdrop with gradient */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: "url('/ieee%20mb%20blue.png')",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: '320px',
                            opacity: 0.12,
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-ieee-dark/95 via-ieee-blue/85 to-ieee-light/60" />
                    <div className="absolute inset-0 bg-gradient-to-b from-ieee-dark/40 via-transparent to-ieee-dark/70" />
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute w-48 h-48 bg-ieee-light/40 rounded-full blur-3xl top-8 left-8 float-slow" />
                        <div className="absolute w-64 h-64 bg-ieee-blue/30 rounded-full blur-3xl -bottom-6 right-6 float-slow" style={{ animationDelay: '3s' }} />
                        <div className="absolute w-32 h-32 bg-white/15 rounded-full blur-2xl top-32 right-24 float-slow" style={{ animationDelay: '6s' }} />
                    </div>
                    <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full border border-white/20 opacity-40" />
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border border-white/10 opacity-30" />
                </div>

                <div className="container relative z-10 px-4 text-center fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 border border-white/30 text-white/90 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur">
                        <span className="inline-block w-2 h-2 rounded-full bg-ieee-light" />
                        Hybrid Mode Available
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 font-serif leading-tight">
                        2025 1st IEEE International
                        <br />
                        VIIT Conference
                    </h1>
                    <p className="text-xl md:text-2xl text-white/85 mb-8 font-light italic">
                        Theme: "{CONFERENCE_DETAILS.theme}"
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 text-lg">
                        <div className="flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                            <Calendar className="text-ieee-light" />
                            <span>{CONFERENCE_DETAILS.dates}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                            <MapPin className="text-ieee-light" />
                            <span>Visakhapatnam, India</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/call-for-papers"
                            className="px-8 py-3 bg-ieee-light hover:bg-white text-ieee-dark font-semibold rounded-full shadow-xl transition flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <BookOpen size={18} /> Submit Paper
                        </Link>
                        <Link
                            to="/registration"
                            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 transition flex items-center justify-center gap-2"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center fade-in-up">
                        <div className="space-y-6 max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ieee-light/40 text-ieee-dark/80 text-xs font-semibold tracking-wider uppercase">
                                About the Conference
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-ieee-dark font-serif leading-tight">
                                About VIIT Conference
                            </h2>
                            <p className="text-ieee-dark/80 leading-relaxed text-lg">
                                The <strong>2025 IEEE Flagship International VIIT Conference</strong> brings together leading academicians, scientists, researchers, and research scholars to exchange and share their experiences and research results on all aspects of Engineering and Technology Innovation.
                            </p>
                            <p className="text-ieee-dark/80 leading-relaxed">
                                It provides a premier interdisciplinary platform to present and discuss the most recent innovations, trends, and concerns, along with practical challenges and solutions in Computing, Cybersecurity, Electronics, Power Systems, and Materials Science.
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <div className="rounded-xl border border-ieee-light/30 bg-white p-4">
                                    <p className="text-sm text-ieee-dark/70">Tracks</p>
                                    <p className="text-2xl font-bold text-ieee-dark">5</p>
                                </div>
                                <div className="rounded-xl border border-ieee-light/30 bg-white p-4">
                                    <p className="text-sm text-ieee-dark/70">Dates</p>
                                    <p className="text-2xl font-bold text-ieee-dark">Nov 21–22</p>
                                </div>
                            </div>
                            <Link to="/about" className="inline-flex items-center gap-2 text-ieee-blue font-semibold hover:text-ieee-dark transition mt-2">
                                Read more about the institute <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group fade-in-up">
                            <div className="absolute inset-0 z-0 opacity-25 bg-[radial-gradient(circle_at_top,_#00B5E2_0%,_transparent_45%)]" />
                            <img
                                src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80"
                                alt="Conference networking"
                                className="w-full h-[420px] object-cover transform group-hover:scale-105 transition duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ieee-dark/80 via-ieee-dark/20 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <p className="font-bold text-xl">Join the Global Network</p>
                                    <p className="text-sm opacity-90">Connect with experts from around the world.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Dates Teaser */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center max-w-3xl fade-in-up">
                    <h2 className="text-3xl font-bold text-ieee-dark mb-8 font-serif">Important Deadlines</h2>
                    <div className="grid gap-6">
                        <div className="bg-white p-6 rounded-lg border border-ieee-light/30 flex flex-col md:flex-row justify-between items-center hover:shadow-md transition">
                            <div className="text-left">
                                <h4 className="font-bold text-lg text-ieee-dark">Abstract Submission</h4>
                                <p className="text-sm text-ieee-dark/70">Submit your initial research abstract</p>
                            </div>
                            <div className="mt-4 md:mt-0 px-4 py-2 bg-ieee-light/20 text-ieee-dark rounded font-bold">TBA</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-ieee-light/30 flex flex-col md:flex-row justify-between items-center hover:shadow-md transition">
                            <div className="text-left">
                                <h4 className="font-bold text-lg text-ieee-dark">Full Paper Submission</h4>
                                <p className="text-sm text-ieee-dark/70">Camera-ready paper submission</p>
                            </div>
                            <div className="mt-4 md:mt-0 px-4 py-2 bg-ieee-light/20 text-ieee-dark rounded font-bold">TBA</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-ieee-light/30 flex flex-col md:flex-row justify-between items-center hover:shadow-md transition">
                            <div className="text-left">
                                <h4 className="font-bold text-lg text-ieee-dark">Early Bird Registration</h4>
                                <p className="text-sm text-ieee-dark/70">Avail discounted rates</p>
                            </div>
                            <div className="mt-4 md:mt-0 px-4 py-2 bg-ieee-light/20 text-ieee-dark rounded font-bold">TBA</div>
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