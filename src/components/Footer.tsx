import { Link } from 'react-router-dom';
import {  Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import footerImage from '../../assests/footer.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <img src={footerImage} alt="Envisage Multi Media" className="h-64 w-64 sm:h-10 sm:w-10" />
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              Transforming healthcare delivery through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/claims" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Claims Management
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Member Support
                </Link>
              </li>
              <li>
                <Link to="/telemedicine" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Telemedicine
                </Link>
              </li>
              <li>
                <Link to="/hospital" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Hospital Management
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2 text-sm sm:text-base">
                <MapPin className="h-5 w-5" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-2 text-sm sm:text-base">
                <Phone className="h-5 w-5" />
                <span>+254 700 000000</span>
              </li>
              <li className="flex items-center space-x-2 text-sm sm:text-base">
                <Mail className="h-5 w-5" />
                <span>info@virtualglobal.net</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Envisage Multi Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;