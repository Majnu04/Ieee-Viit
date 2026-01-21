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
                <CommitteeMember name="Hon. Name Here" role="Chairman" org="Group of Institutions" />
                <CommitteeMember name="Hon. Name Here" role="Secretary" org="Group of Institutions" />
            </div>
        </div>

        {/* General Chairs */}
        <div className="mb-16">
            <h2 className="text-2xl font-bold text-ieee-dark border-b-2 border-ieee-light pb-2 mb-8 inline-block">
                General Chairs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CommitteeMember name="Dr. Name Here" role="Director" org="VIIT " />
                <CommitteeMember name="Dr. Name Here" role="Principal" org="VIIT" />
            </div>
        </div>

        {/* Advisory */}
        <div className="mb-16">
            <h2 className="text-2xl font-bold text-ieee-dark border-b-2 border-ieee-light pb-2 mb-8 inline-block">
                Technical Advisory Committee
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                 {[1,2,3,4,5,6,7,8].map(i => (
                     <CommitteeMember key={i} name={`Prof. Advisor ${i}`} role="Professor" org="International University" />
                 ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default Committee;