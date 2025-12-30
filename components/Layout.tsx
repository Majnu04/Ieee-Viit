import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `block px-4 py-2 text-sm font-medium transition-colors duration-200 lg:inline-block lg:mt-0 ${
        isActive
          ? 'text-ieee-light border-b-2 border-ieee-light bg-ieee-dark/5 lg:bg-transparent'
          : 'text-gray-200 hover:text-white hover:bg-ieee-blue/50 lg:hover:bg-transparent'
      }`
    }
  >
    {children}
  </NavLink>
);

const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* Top Banner (Contact/Info) */}
      <div className="hidden md:flex justify-between items-center bg-gray-100 px-6 py-2 text-xs text-gray-600 border-b">
        <div className="flex space-x-4">
          <span className="flex items-center gap-1"><Mail size={12} /> vignaniit@yahoo.com</span>
          <span className="flex items-center gap-1"><Phone size={12} /> +91 891 275 5222</span>
        </div>
        <div className="flex space-x-3">
            <span>IEEE Section</span>
            <span>|</span>
            <span>VIIT Visakhapatnam</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-ieee-dark shadow-lg py-2' : 'bg-ieee-dark py-4'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0 text-white mr-6 gap-3">
            {/* Logo Placeholder */}
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-ieee-dark font-bold text-xl">
              V
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-white">VIIT</span>
              <span className="text-[10px] text-gray-300 uppercase tracking-widest hidden sm:block">IEEE International Conference</span>
            </div>
          </div>

            <div className="block lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            <div
              className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
                isOpen ? 'block bg-ieee-dark border-t border-ieee-blue mt-4' : 'hidden'
              }`}
            >
              <div className="text-sm lg:flex-grow lg:flex lg:justify-end gap-1">
                <NavItem to="/" onClick={() => setIsOpen(false)}>Home</NavItem>
                <NavItem to="/about" onClick={() => setIsOpen(false)}>About</NavItem>
                <NavItem to="/speakers" onClick={() => setIsOpen(false)}>Speakers</NavItem>
                <NavItem to="/call-for-papers" onClick={() => setIsOpen(false)}>Call for Papers</NavItem>
                <NavItem to="/committee" onClick={() => setIsOpen(false)}>Committee</NavItem>
                <NavItem to="/registration" onClick={() => setIsOpen(false)}>Registration</NavItem>
                <NavItem to="/contact" onClick={() => setIsOpen(false)}>Contact</NavItem>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-12 pb-6 border-t border-slate-800">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
             <h3 className="text-white text-lg font-bold mb-4">VIIT</h3>
             <p className="text-sm leading-relaxed mb-4 max-w-md">
               Theme: Sustainable Development for Innovation and Integration of Engineering and Technology.
               Join us for the 1st IEEE International VIIT Conference to explore the future of technology.
             </p>
             <div className="flex space-x-4 mt-4">
               <a href="#" className="hover:text-ieee-light transition"><Facebook size={20} /></a>
               <a href="#" className="hover:text-ieee-light transition"><Twitter size={20} /></a>
               <a href="#" className="hover:text-ieee-light transition"><Linkedin size={20} /></a>
             </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/call-for-papers" className="hover:text-ieee-light">Call for Papers</NavLink></li>
              <li><NavLink to="/registration" className="hover:text-ieee-light">Registration</NavLink></li>
              <li><NavLink to="/committee" className="hover:text-ieee-light">Committee</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-ieee-light">Contact Us</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-ieee-light" />
                <span>Beside VSEZ, Duvvada, Vadalapudi Post,<br/>Gajuwaka, Visakhapatnam - 530049, Andhra Pradesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-ieee-light" />
                <span>vignaniit@yahoo.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={16} className="text-ieee-light" />
                <span>www.vignaniit.edu.in</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© 2025 VIIT. All Rights Reserved. IEEE Conference Record #XXXXX.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;