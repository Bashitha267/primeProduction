import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { RiTiktokLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="bg-red-600 p-2 rounded-lg">
                <img src='https://res.cloudinary.com/dnfbik3if/image/upload/v1756445252/logo_z6bgqv.png' className="h-6 w-6 text-white " />
              </div> */}
              <div>
                <h3 className="text-xl font-bold">PrimeX Studio</h3>
                <p className="text-gray-400">Creative Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              We specialize in event covering, web development, and graphic design services. 
              Creating memorable experiences and digital solutions for your business needs.
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/profile.php?id=61579985395609" className="text-gray-400 hover:text-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className='text-gray-400 hover:text-red-600 transition-colors'>
                <RiTiktokLine className="h-5 w-5"/>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/events" className="text-gray-400 hover:text-red-600 transition-colors">Event Coverage</Link></li>
              <li><Link to="/web-development" className="text-gray-400 hover:text-red-600 transition-colors">Web Development</Link></li>
              <li><Link to="/graphic-design" className="text-gray-400 hover:text-red-600 transition-colors">Graphic Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-gray-400">+94 765858799</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-600" />
                <span className="text-gray-400">primexstudio2025@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-600" />
                <span className="text-gray-400">Gampaha Yakkala</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 PrimeX Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;