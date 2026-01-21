import React from 'react';
import { INDIAN_FEES_EARLY, INDIAN_FEES_REGULAR, FOREIGN_FEES_EARLY, FOREIGN_FEES_REGULAR } from '../constants';
import { FeeTable } from '../types';
import { AlertCircle, CreditCard } from 'lucide-react';

const FeeTableComponent: React.FC<{ data: FeeTable }> = ({ data }) => (
  <div className="mb-10 bg-white rounded-lg shadow-sm border border-ieee-light/30 overflow-hidden">
    <div className="bg-white px-6 py-4 border-b border-ieee-light/30 flex justify-between items-center">
      <h3 className="font-bold text-ieee-dark text-lg">{data.title}</h3>
      <span className="text-xs font-semibold px-2 py-1 bg-white border border-ieee-light/40 rounded text-ieee-dark/70">
        Currency: {data.currency}
      </span>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-white text-xs uppercase text-ieee-dark/70">
            <th className="px-6 py-4 font-semibold border-b border-ieee-light/30">Category</th>
            <th className="px-6 py-4 font-semibold border-b border-ieee-light/30">IEEE Member</th>
            <th className="px-6 py-4 font-semibold border-b border-ieee-light/30">Non-IEEE Member</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {data.fees.map((row, idx) => (
            <tr key={idx} className="hover:bg-ieee-light/10 transition border-b border-ieee-light/20 last:border-0">
              <td className="px-6 py-4 font-medium text-ieee-dark">{row.category}</td>
              <td className="px-6 py-4 text-ieee-dark font-bold">{row.ieeeMember}</td>
              <td className="px-6 py-4 text-ieee-dark/70">{row.nonIeeeMember}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Registration: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-ieee-blue text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Registration</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
             Secure your spot at VIIT. Please review the fee structure below.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        
        {/* Important Notes */}
        <div className="bg-ieee-light/15 border-l-4 border-ieee-light p-6 mb-12 rounded-r-lg shadow-sm">
            <div className="flex items-start gap-4">
            <AlertCircle className="text-ieee-light mt-1 flex-shrink-0" />
            <div className="text-sm text-ieee-dark space-y-2">
                <p><strong>Note 1:</strong> Registration fee includes conference proceedings and E-Certificate.</p>
                <p><strong>Note 2:</strong> Registration fee is <strong>not refundable</strong> and also does not include accommodation.</p>
                <p><strong>Note 3:</strong> Payment link will be updated soon.</p>
                </div>
            </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
            <div>
                 <div className="flex items-center gap-2 mb-6">
                    <div className="h-8 w-1 bg-ieee-light rounded-full"></div>
                    <h2 className="text-2xl font-bold text-ieee-dark">Indian Delegates</h2>
                 </div>
                <p className="text-xs text-ieee-dark/70 mb-2 ml-1">Early Bird (till ------------)</p>
                 <FeeTableComponent data={INDIAN_FEES_EARLY} />
                <p className="text-xs text-ieee-dark/70 mb-2 ml-1">Regular Registration (---TO---)</p>
                 <FeeTableComponent data={INDIAN_FEES_REGULAR} />
            </div>
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <div className="h-8 w-1 bg-ieee-light rounded-full"></div>
                    <h2 className="text-2xl font-bold text-ieee-dark">Foreign Delegates</h2>
                 </div>
                <p className="text-xs text-ieee-dark/70 mb-2 ml-1">Early Bird (till ------------)</p>
                 <FeeTableComponent data={FOREIGN_FEES_EARLY} />
                <p className="text-xs text-ieee-dark/70 mb-2 ml-1">Regular Registration (---TO---)</p>
                 <FeeTableComponent data={FOREIGN_FEES_REGULAR} />
            </div>
        </div>

      </div>
    </div>
  );
};

export default Registration;