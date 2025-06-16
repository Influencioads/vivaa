import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import { ArrowRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const slides = [
    {
      image: '/images/viva-banner-images/banner-2.webp',
      title: ' Hair Treatments',
      cta: 'Book Now',
      ctaLink: '/locations#contact'
    },
    {
      image: '/images/viva-banner-images/banner-1.webp',
      title: 'Laser Hair Reduction',
      cta: 'Book Now',
      ctaLink: '/locations#contact'
    },
    {
      image: '/images/viva-banner-images/banner-3.webp',
      title: ' Skin Treatments',
      cta: 'Book Now',
      ctaLink: '/locations#contact'
    },
    {
      image: '/images/viva-banner-images/Stem Cells Treatment -slimming/Cool Sculpting.webp',
      title: 'slimming',
      cta: 'Learn More',
      ctaLink: '/services#slimming'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>

          <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                {slide.title}
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
                <button
                  onClick={openPopup}
                  className="inline-flex items-center px-8 py-3 bg-[#d25134] text-white font-semibold rounded-full hover:bg-[#b8472e] transition-all duration-300 transform hover:scale-105"
                >
                  {slide.cta} <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <a 
                  href="/locations#contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-[#d25134] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 bg-white rounded-full p-2 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ContactForm />
          </div>
        </div>
      )}

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;