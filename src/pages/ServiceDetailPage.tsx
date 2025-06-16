import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Star, Phone, MessageCircle, Calendar, Award, Users, Clock } from 'lucide-react';
import { getServiceBySlug } from '../data/services';
import WhyChooseSection from '../components/WhyChooseSection';
import ContactForm from '../components/ContactForm';

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-4">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="text-teal-600 hover:text-teal-700">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/services" 
            className="inline-flex items-center text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={service.beforeAfterImages[0]}
            alt={service.name}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                {service.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {service.name}
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90">
                {service.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#booking-form"
                  className="inline-flex items-center px-8 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition-colors"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </a>
                <a 
                  href="https://wa.me/918123002386"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-teal-600 transition-colors"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {service.beforeAfterImages.slice(0, 4).map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`${service.name} result ${index + 1}`}
                  className="rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">FDA Approved</div>
              <div className="text-gray-600">Safe & Effective</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">1000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Clock className="h-8 w-8 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{service.pricing.sessionInfo}</div>
              <div className="text-gray-600">Treatment Duration</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Star className="h-8 w-8 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-gray-600">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What is [Service] */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What is {service.name}?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.beforeAfterImages.slice(0, 2).map((image, index) => (
                    <img 
                      key={index}
                      src={image}
                      alt={`${service.name} treatment ${index + 1}`}
                      className="rounded-lg shadow-lg"
                    />
                  ))}
                </div>
              </div>

              {/* The VIVAA Approach */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The VIVAA Approach
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.approach}
                </p>
              </div>

              {/* Treatment Process */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Treatment Process
                </h2>
                <div className="space-y-6">
                  {service.processSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Key Benefits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Before & After Gallery */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Before & After Results
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {service.beforeAfterImages.map((image, index) => (
                    <img 
                      key={index}
                      src={image}
                      alt={`${service.name} before after ${index + 1}`}
                      className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  What Our Clients Say
                </h2>
                <div className="space-y-6">
                  {service.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl">
                      <div className="flex items-center mb-4">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Form & Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Pricing Card */}
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-xl border">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Treatment Pricing</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Starting Price:</span>
                      <span className="font-semibold text-teal-600">{service.pricing.startingPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sessions:</span>
                      <span className="font-semibold">{service.pricing.sessionInfo}</span>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="text-sm text-gray-600">{service.pricing.packageDeals}</p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div id="booking-form">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Book Your Free Consultation
                  </h3>
                  <ContactForm 
                    serviceType={service.name}
                  />
                </div>

                {/* Quick Contact */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Immediate Help?</h3>
                  <div className="space-y-3">
                    <a 
                      href="tel:+918123002386"
                      className="flex items-center justify-center w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call: 81230 02386
                    </a>
                    <a 
                      href="https://wa.me/918123002386"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose VIVAA */}
      <WhyChooseSection />

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your {service.name} Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your free consultation today and take the first step towards achieving your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#booking-form"
              className="inline-flex items-center px-8 py-3 bg-white text-teal-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Consultation
            </a>
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

export default ServiceDetailPage;