import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import WhyChooseSection from '../components/WhyChooseSection';
import { servicesData } from '../data/services';

const ServicesPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const serviceCategories = [
    {
      id: 'slimming',
      title: 'Slimming',
      description: 'Advanced body contouring and fat reduction treatments for lasting results using cutting-edge technology.',
      heroImage: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop',
      services: servicesData.filter(service => service.category === 'Slimming'),
      bgColor: 'bg-red-50',
      textColor: 'text-[#d25134]',
      buttonColor: 'bg-[#d25134] hover:bg-[#b8472e]'
    },
    {
      id: 'skin-treatments',
      title: 'Skin Treatments',
      description: 'Comprehensive skin rejuvenation and enhancement therapies for radiant, youthful skin.',
      heroImage: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop',
      services: servicesData.filter(service => service.category === 'Skin Treatments'),
      bgColor: 'bg-red-50',
      textColor: 'text-[#d25134]',
      buttonColor: 'bg-[#d25134] hover:bg-[#b8472e]'
    },
    {
      id: 'hair-treatments',
      title: 'Hair Treatments',
      description: 'Revolutionary hair restoration and scalp care solutions for natural, lasting results.',
      heroImage: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop',
      services: servicesData.filter(service => service.category === 'Hair Treatments'),
      bgColor: 'bg-red-50',
      textColor: 'text-[#d25134]',
      buttonColor: 'bg-[#d25134] hover:bg-[#b8472e]'
    },
    {
      id: 'laser-hair-reduction',
      title: 'Laser Hair Reduction',
      description: 'Permanent hair removal solutions for all body areas using advanced laser technology.',
      heroImage: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop',
      services: servicesData.filter(service => service.category === 'Laser Hair Reduction'),
      bgColor: 'bg-red-50',
      textColor: 'text-[#d25134]',
      buttonColor: 'bg-[#d25134] hover:bg-[#b8472e]'
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-16 bg-[#d25134] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Advanced Aesthetic Solutions
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            We believe in the principle of healing concerns from the root. Explore our comprehensive range of services, 
            all designed with the highest standards of medical safety and efficacy.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <div className="py-16">
        {serviceCategories.map((category, index) => (
          <section 
            key={category.id} 
            id={category.id}
            className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`${category.bgColor} rounded-2xl overflow-hidden`}>
                {/* Category Hero */}
                <div className="relative h-64 md:h-80">
                  <img 
                    src={category.heroImage}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {category.title}
                      </h2>
                      <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        to={`/service/${service.slug}`}
                        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
                      >
                        <div className="relative h-40 overflow-hidden">
                          <img 
                            src={service.beforeAfterImages[0]}
                            alt={service.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-4">
                          <h3 className={`text-lg font-semibold ${category.textColor} group-hover:underline mb-2`}>
                            {service.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {service.tagline}
                          </p>
                          <div className={`inline-flex items-center ${category.textColor} font-medium text-sm`}>
                            Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Category CTA */}
                  <div className="text-center mt-12">
                    <Link 
                      to="/locations#contact"
                      className={`inline-flex items-center px-8 py-3 ${category.buttonColor} text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105`}
                    >
                      Book {category.title} Consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Why Choose VIVAA */}
      <WhyChooseSection />

      {/* Final CTA */}
      <section className="py-16 bg-[#d25134] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your free consultation and discover which treatment is perfect for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/locations#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-[#d25134] font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="https://wa.me/918123002386"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#d25134] transition-colors"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;