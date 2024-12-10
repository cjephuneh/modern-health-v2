import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Activity, Users, Building2, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../../assests/logo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
            <img src={logoImage} alt="Envisage Multi Media" className="h-10 w-10 sm:h-12 sm:w-12" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link
              to="/claims"
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors text-sm lg:text-base"
            >
              <Activity className="h-4 w-4 lg:h-5 lg:w-5" />
              <span>Claims Management</span>
            </Link>
            <Link
              to="/support"
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors text-sm lg:text-base"
            >
              <Users className="h-4 w-4 lg:h-5 lg:w-5" />
              <span>Member Support</span>
            </Link>
            <Link
              to="/telemedicine"
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors text-sm lg:text-base"
            >
              <Brain className="h-4 w-4 lg:h-5 lg:w-5" />
              <span>Telemedicine</span>
            </Link>
            <Link
              to="/hospital"
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors text-sm lg:text-base"
            >
              <Building2 className="h-4 w-4 lg:h-5 lg:w-5" />
              <span>Hospital Management</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 hover:text-indigo-600 transition-colors focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Link
                to="/claims"
                className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Activity className="inline-block h-5 w-5 mr-2" />
                Claims Management
              </Link>
              <Link
                to="/support"
                className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Users className="inline-block h-5 w-5 mr-2" />
                Member Support
              </Link>
              <Link
                to="/telemedicine"
                className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Brain className="inline-block h-5 w-5 mr-2" />
                Telemedicine
              </Link>
              <Link
                to="/hospital"
                className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Building2 className="inline-block h-5 w-5 mr-2" />
                Hospital Management
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;