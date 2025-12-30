import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CallForPapers from './pages/CallForPapers';
import Registration from './pages/Registration';
import Committee from './pages/Committee';
import Contact from './pages/Contact';

// Simple placeholders for pages not fully implemented to prevent 404s
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center h-[60vh] flex-col">
    <h1 className="text-4xl font-bold text-gray-300 mb-4">{title}</h1>
    <p className="text-gray-500">Content coming soon...</p>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<PlaceholderPage title="About Us" />} />
          <Route path="speakers" element={<PlaceholderPage title="Keynote Speakers" />} />
          <Route path="call-for-papers" element={<CallForPapers />} />
          <Route path="registration" element={<Registration />} />
          <Route path="committee" element={<Committee />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;