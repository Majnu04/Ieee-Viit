import React from 'react';
import { TRACKS } from '../constants';
import { CheckCircle2, FileText, Layers } from 'lucide-react';

const CallForPapers: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-ieee-dark text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-serif font-bold mb-4">Call For Papers</h1>
          <p className="text-xl opacity-90">
             We invite original research papers for presentation in the following tracks.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
                Prospective authors are encouraged to submit high-quality original research papers for presentation at the conference. All accepted and presented papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements.
            </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRACKS.map((track) => (
                <div key={track.id} className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition duration-300 flex flex-col">
                    <div className="p-6 bg-slate-50 border-b border-slate-100 rounded-t-xl">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ieee-light text-white font-bold text-sm">
                                {track.id}
                            </span>
                            <h3 className="font-bold text-slate-800 text-lg leading-tight">
                                {track.title}
                            </h3>
                        </div>
                    </div>
                    <div className="p-6 flex-grow">
                        <ul className="space-y-3">
                            {track.topics.map((topic, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>{topic}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>

        {/* Submission Guidelines (Static Placeholder) */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-ieee-dark mb-6 flex items-center gap-2">
                <FileText className="text-ieee-light" /> Submission Guidelines
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-700">
                <div className="space-y-4">
                    <p>
                        <strong>1. Originality:</strong> Articles must be original and not published elsewhere. Plagiarism checks will be rigorous.
                    </p>
                    <p>
                        <strong>2. Format:</strong> Papers must follow the IEEE double-column format. Maximum 6 pages allowed.
                    </p>
                </div>
                <div className="space-y-4">
                    <p>
                        <strong>3. Review Process:</strong> All submissions will undergo a double-blind peer review process.
                    </p>
                    <p>
                        <strong>4. Presentation:</strong> At least one author must register and present the paper at the conference.
                    </p>
                </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                <button className="bg-ieee-dark text-white px-8 py-3 rounded hover:bg-ieee-blue transition font-semibold">
                    Submit Paper (Microsoft CMT / EasyChair)
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;