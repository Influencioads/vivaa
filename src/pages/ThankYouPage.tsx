import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, Phone, MessageCircle, Calendar, ArrowRight, Sparkles, Heart, Star, Award } from 'lucide-react';

const ThankYouPage = () => {
  const [searchParams] = useSearchParams();
  const formType = searchParams.get('type') || 'general';
  const serviceName = searchParams.get('service') || '';
  const userName = searchParams.get('name') || '';

  useEffect(() => {
    // Update page title
    document.title = 'Thank You - VIVAA Wellness Aesthetic Clinic';
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  const getFormTypeMessage = () => {
    switch (formType) {
      case 'booking':
        return {
          title: 'Consultation Booked Successfully!',
          subtitle: `Thank you for booking a consultation${serviceName ? ` for ${serviceName}` : ''}`,
          nextStep: 'Our specialist will call you within 24 hours to confirm your appointment'
        };
      case 'course':
        return {
          title: 'Course Inquiry Received!',
          subtitle: 'Thank you for your interest in our professional courses',
          nextStep: 'Our academy coordinator will contact you within 24 hours with detailed information'
        };
      case 'service':
        return {
          title: 'Inquiry Submitted Successfully!',
          subtitle: 'Thank you for reaching out to VIVAA Wellness',
          nextStep: 'Our expert team will contact you within 24 hours to discuss your needs'
        };
      default:
        return {
          title: 'Thank You for Contacting Us!',
          subtitle: 'Your message has been received successfully',
          nextStep: 'We will get back to you within 24 hours'
        };
    }
  };

  const message = getFormTypeMessage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-pink-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-pink-200 rounded-full opacity-25 animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-100 rounded-full opacity-15 animate-pulse delay-1000"></div>
        
        {/* Floating Sparkles */}
        <div className="absolute top-32 left-1/4 animate-bounce delay-500">
          <Sparkles className="h-6 w-6 text-yellow-400 opacity-60" />
        </div>
        <div className="absolute top-60 right-1/3 animate-bounce delay-1000">
          <Star className="h-5 w-5 text-[#d25134] opacity-50" />
        </div>
        <div className="absolute bottom-60 left-1/3 animate-bounce delay-1500">
          <Heart className="h-4 w-4 text-pink-400 opacity-60" />
        </div>
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Success Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 text-center mb-8">
            {/* Success Icon with Animation */}
            <div className="relative mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#d25134] rounded-full shadow-xl animate-bounce">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -top-3 -right-3 animate-spin">
                <Sparkles className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="absolute -bottom-2 -left-2 animate-pulse">
                <Heart className="h-6 w-6 text-red-500" />
              </div>
            </div>

            {/* Thank You Message */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#d25134] to-[#b8472e] bg-clip-text text-transparent mb-4">
                {message.title}
              </h1>
              {userName && (
                <p className="text-xl text-gray-600 mb-4">
                  Hello <span className="font-semibold text-[#d25134]">{userName}</span>! 👋
                </p>
              )}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                {message.subtitle}
              </p>
              
              {/* Next Steps Card */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-[#d25134] mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">What Happens Next?</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 bg-[#d25134] text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <span className="text-gray-700">Our specialist reviews your inquiry</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 bg-[#b8472e] text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <span className="text-gray-700">{message.nextStep}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 bg-[#a03e28] text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <span className="text-gray-700">Get personalized recommendations & schedule your visit</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <a 
                href="tel:+918123002386"
                className="flex items-center justify-center space-x-3 bg-[#d25134] hover:bg-[#b8472e] text-white px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Call Now</div>
                  <div className="text-sm opacity-90">81230 02386</div>
                </div>
              </a>
              <a 
                href="https://wa.me/918123002386"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-sm opacity-90">Chat with us</div>
                </div>
              </a>
              <Link
                to="/locations#contact"
                className="flex items-center justify-center space-x-3 bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Calendar className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">New Inquiry</div>
                  <div className="text-sm opacity-90">Submit another</div>
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/"
                className="inline-flex items-center px-8 py-3 bg-[#d25134] text-white font-semibold rounded-full hover:bg-[#b8472e] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <ArrowRight className="mr-2 h-5 w-5 rotate-180" />
                Back to Home
              </Link>
              <Link 
                to="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-[#d25134] text-[#d25134] font-semibold rounded-full hover:bg-[#d25134] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Clinic Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* HSR Layout */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-[#d25134] mb-2">HSR Layout Clinic</h3>
                <img 
                  src="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                  alt="HSR Layout Clinic"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Address:</strong> 2ND FLOOR, 556, 14th Main Rd, Sector 3, HSR Layout</p>
                <p><strong>Phone:</strong> 81230 02386</p>
                <p><strong>Hours:</strong> Mon-Sat: 9AM-8PM, Sun: 10AM-6PM</p>
              </div>
            </div>

            {/* Banashankari */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-[#d25134] mb-2">Banashankari Clinic</h3>
                <img 
                  src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                  alt="Banashankari Clinic"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Address:</strong> 572, 3rd Floor, 30th Main Rd, Banashankari 3rd Stage</p>
                <p><strong>Phone:</strong> 81230 02386</p>
                <p><strong>Hours:</strong> Mon-Sat: 9AM-8PM, Sun: 10AM-6PM</p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-8 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="flex items-center justify-center space-x-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#d25134]">5000+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#d25134]">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#d25134]">4.9★</div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;