import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Star, Users, Award, Clock } from 'lucide-react';
import WhyChooseSection from '../components/WhyChooseSection';
import HeroSlider from '../components/HeroSlider';

const HomePage = () => {
  const services = [
    { 
      name: 'Slimming', 
      icon: '💫', 
      link: '/services#slimming',
      image: '/images/viva-banner-images/Stem Cells Treatment -slimming/Cool Sculpting.webp',
      description: 'Advanced body contouring and fat reduction'
    },
    { 
      name: 'Skin Treatments', 
      icon: '✨', 
      link: '/services#skin-treatments',
      image: '/images/viva-banner-images/viva-skin/Laser Skin Resurfacing.webp',
      description: 'Rejuvenating skin care solutions'
    },
    { 
      name: 'Hair Treatments', 
      icon: '💆‍♀️', 
      link: '/services#hair-treatments',
      image: '/images/viva-banner-images/stem-viva-treatment-hair/Biotin Treatment.webp',
      description: 'Revolutionary hair restoration'
    },
    { 
      name: 'Laser Hair Reduction', 
      icon: '🎯', 
      link: '/services#laser-hair-reduction',
      image: '/images/viva-banner-images/viva-laser-treatment/laser-8.webp',
      description: 'Permanent hair removal solutions'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      treatment: 'Cool Sculpting',
      rating: 5,
      text: 'Amazing results! The staff was professional and the treatment was comfortable. I saw visible results within weeks.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Rajesh Kumar',
      treatment: 'Hair Transplantation',
      rating: 5,
      text: 'Life-changing experience! My confidence is back. The doctors are highly skilled and caring.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Anita Reddy',
      treatment: 'Laser Hair Reduction',
      rating: 5,
      text: 'Best decision ever! No more painful waxing. The treatment was gentle and results are permanent.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Clients', icon: <Users className="h-8 w-8 text-teal-600" /> },
    { number: '15+', label: 'Years Experience', icon: <Award className="h-8 w-8 text-teal-600" /> },
    { number: '32+', label: 'Advanced Treatments', icon: <Star className="h-8 w-8 text-teal-600" /> },
    { number: '2', label: 'Premium Locations', icon: <MapPin className="h-8 w-8 text-teal-600" /> }
  ];

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-teal-100 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Radiant Confidence, From the Inside Out
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At VIVAA, we understand the importance of radiant, vibrant, and healthy Skin, Hair, and Body for one's self-esteem and positive attitude towards life. Our mission is to offer holistic treatments that heal from the root, hitting the cause rather than only providing temporary relief.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/services"
                  className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors"
                >
                  Discover Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/locations#contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-teal-600 text-teal-600 font-semibold rounded-full hover:bg-teal-600 hover:text-white transition-colors"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/viva-banner-images/Stem Cells Treatment -slimming/Fat Reduction Ultrasound Treatment.webp"
                alt="VIVAA Clinic Interior"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="/images/viva-banner-images/stem-viva-treatment-hair/GFC Treatment.webp"
                alt="Professional Treatment"
                className="rounded-lg shadow-lg mt-8"
              />
              <img 
                src="/images/viva-banner-images/viva-laser-treatment/laser-2.webp"
                alt="Advanced Equipment"
                className="rounded-lg shadow-lg -mt-8"
              />
              <img 
                src="/images/viva-banner-images/viva-skin/Meso Lipo.webp"
                alt="Skin Treatment"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive aesthetic solutions combining medical expertise with cutting-edge technology for exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 text-3xl">{service.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                  <div className="mt-4 flex items-center text-teal-600 font-medium">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Real stories from real people who transformed their lives at VIVAA</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.treatment}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose VIVAA */}
      <WhyChooseSection />

      {/* Contact/Locations Snippet */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Premium Clinics</h2>
            <p className="text-lg text-gray-600">Two convenient locations in Bengaluru with state-of-the-art facilities</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* HSR Layout */}
            <div className="bg-teal-100 p-8 rounded-xl">
              <div className="mb-6">
                <img 
                  src="/images/viva-banner-images/viva-skin/Peels.webp"
                  alt="HSR Layout Clinic"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">HSR Layout</h3>
              <div className="flex items-start space-x-3 mb-6">
                <MapPin className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  2ND FLOOR, 556, 14th Main Rd, above Karma Ayurveda Clinic, 
                  Sector 3, HSR Layout, Bengaluru, Karnataka 560102
                </p>
              </div>
              <div className="flex items-center space-x-3 mb-6">
                <Phone className="h-5 w-5 text-teal-600" />
                <span className="text-gray-700">81230 02386</span>
              </div>
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="h-5 w-5 text-teal-600" />
                <span className="text-gray-700">Mon-Sat: 9AM-8PM, Sun: 10AM-6PM</span>
              </div>
              <a 
                href="https://www.google.com/maps/place/Vivaa+Wellness+Center+%7C+Skin+%26+Laser+Hair+Removal+In+HSR+Layout/@12.9088629,77.6355849,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15e150e28e0f:0x1f7521b12ac243c1!8m2!3d12.9088629!4d77.6381598!16s%2Fg%2F11swlck3ky?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D" 
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Get Directions
              </a>
            </div>

            {/* Banashankari */}
            <div className="bg-teal-100 p-8 rounded-xl">
              <div className="mb-6">
                <img 
                  src="/images/viva-banner-images/stem-viva-treatment-hair/Micro Scalp Pigmentation.webp"
                  alt="Banashankari Clinic"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Banashankari</h3>
              <div className="flex items-start space-x-3 mb-6">
                <MapPin className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  572, 3rd Floor, 30th Main Rd, 7 Block, CG Chinnappa Naidu Layout, 
                  Banashankari 3rd Stage, Bengaluru, Karnataka 560085
                </p>
              </div>
              <div className="flex items-center space-x-3 mb-6">
                <Phone className="h-5 w-5 text-teal-600" />
                <span className="text-gray-700">81230 02386</span>
              </div>
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="h-5 w-5 text-teal-600" />
                <span className="text-gray-700">Mon-Sat: 9AM-8PM, Sun: 10AM-6PM</span>
              </div>
              <a 
                href="https://www.google.com/maps?q=Banashankari+VIVAA+Clinic" 
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your free consultation today and take the first step towards a more confident you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/locations#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-teal-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="tel:+918123002386"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-teal-600 transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 81230 02386
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;