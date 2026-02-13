import React from 'react';
import { User } from 'lucide-react';

interface CommitteeMemberProps {
    name: string;
    role: string;
    org: string;
}

const CommitteeMember: React.FC<CommitteeMemberProps> = ({ name, role, org }) => (
    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-ieee-light/10 transition border border-transparent hover:border-ieee-light/30">
        <div className="w-12 h-12 bg-ieee-light/20 rounded-full flex items-center justify-center flex-shrink-0 text-ieee-blue/60">
            <User size={24} />
        </div>
        <div>
            <h4 className="font-bold text-ieee-dark">{name}</h4>
            <p className="text-ieee-blue text-sm font-medium">{role}</p>
            <p className="text-ieee-dark/70 text-xs mt-1">{org}</p>
        </div>
    </div>
)

const Committee: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
            <div className="bg-white py-16 border-b border-ieee-light/30">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-serif font-bold text-ieee-dark mb-2">Organizing Committee</h1>
                                        <p className="text-ieee-dark/70">The team behind VIIT</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        
        {/* Patrons */}
        <div className="mb-16">
            <h2 className="text-2xl font-bold text-ieee-dark border-b-2 border-ieee-light pb-2 mb-8 inline-block">
                Chief Patrons
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CommitteeMember name="Dr. Lavu Rathaiah" role="Chairman" org="Vignan Group of Institutions" />
                {/* <CommitteeMember name="Lavu Sri Krishna Devarayalu" role="Vice-Chairman" org="Vignan Group of Institutions" /> */}
                <CommitteeMember name="Shri. Lavu Sri Krishna Devarayalu" role="Vice-Chairman" org="Vignan Group of Institutions" />
            </div>
        </div>

        {/* Patrons */}
        <div className="mb-16">
            <h2 className="text-2xl font-bolds text-ieee-dark border-b-2 border-ieee-light pb-2 mb-8 inline-block">
                Patrons
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CommitteeMember name="Dr. Srikant Nandigam" role="CEO" org="Visakhapatnam - Vignan Group of Institutions" />
                <CommitteeMember name="Dr. Madhusudhan Rao" role="Rector" org="Vignan's Institute of Information Technology, Visakhapatnam" />
                <CommitteeMember name="Dr. Sudhakar Jyothula" role="Principal" org="Vignan's Institute of Information Technology, Visakhapatnam" />
            </div>
        </div>

        {/* Convenor */}
        <div className="mb-16">
            <h2 className="text-2xl font-bold text-ieee-dark border-b-2 border-ieee-light pb-2 mb-8 inline-block">
                Secretary
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CommitteeMember
                    name="Prof. Kranthi Kumar Gangu"
                    role="Professor in Chemistry and Dean R&D"
                    org="Vignan's Institute of Information Technology, Visakhapatnam | kkgangu@vignaniit.edu.in | Mobile: +91 9966600092"
                />
            </div>
        </div>

        {/* Convenor */}
        <div className="mb-16">
            <h2 className="text-2xl font-bold text-ieee-dark border-b-2 border-ieee-light pb-2 mb-8 inline-block">
                Convenor
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CommitteeMember
                    name="Dr. Thamatapu Eswara Rao"
                    role="Associate Professor, Assoc. Dean R&D, Department of EEE"
                    org="Vignan's Institute of Information Technology, Visakhapatnam"
                />
            </div>
        </div>

      </div>
    </div>
  );
};

export default Committee;