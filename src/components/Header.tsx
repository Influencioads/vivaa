import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '/images/viva-banner-images/2.png';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const serviceCategories = [
    { name: 'Slimming', path: '/services#slimming' },
    { name: 'Skin Treatments', path: '/services#skin-treatments' },
    { name: 'Hair Treatments', path: '/services#hair-treatments' },
    { name: 'Laser Hair Reduction', path: '/services#laser-hair-reduction' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-16" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-900 hover:text-[#d25134] transition-colors">
              Home
            </Link>
            
            <div 
              className="relative z-50"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link 
                to="/services"
                className="flex items-center text-gray-900 hover:text-[#d25134] transition-colors"
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border z-50">
                  {serviceCategories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.path}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-[#d25134] transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/courses" className="text-gray-900 hover:text-[#d25134] transition-colors">
              Courses
            </Link>
            
            <Link to="/locations" className="text-gray-900 hover:text-[#d25134] transition-colors">
              Locations
            </Link>
          </nav>

          {/* CTA Button */}
          <Link 
            to="/locations#contact"
            className="hidden md:inline-flex bg-[#d25134] hover:bg-[#b8472e] text-white px-6 py-2 rounded-full font-semibold transition-colors"
          >
            Book Appointment
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-900"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 z-40">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-900 hover:text-[#d25134] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              
              <div>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center text-gray-900 hover:text-[#d25134] transition-colors w-full text-left"
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2 z-50">
                    {serviceCategories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.path}
                        className="block text-sm text-gray-600 hover:text-[#d25134] transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/courses" className="text-gray-900 hover:text-[#d25134] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Courses
              </Link>
              
              <Link to="/locations" className="text-gray-900 hover:text-[#d25134] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Locations
              </Link>

              <Link 
                to="/locations#contact"
                className="inline-flex bg-[#d25134] hover:bg-[#b8472e] text-white px-6 py-2 rounded-full font-semibold transition-colors w-fit" onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;