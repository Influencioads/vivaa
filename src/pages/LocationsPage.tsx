import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const LocationsPage = () => {
  const locations = [
    {
      name: 'HSR Layout',
      address: '2ND FLOOR, 556, 14th Main Rd, above Karma Ayurveda Clinic, Sector 3, HSR Layout, Bengaluru, Karnataka 560102',
      phone: '81230 02386',
      mapUrl: 'https://www.google.com/maps/place/Vivaa+Wellness+Center+%7C+Skin+%26+Laser+Hair+Removal+In+HSR+Layout/@12.9088629,77.6355849,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15e150e28e0f:0x1f7521b12ac243c1!8m2!3d12.9088629!4d77.6381598!16s%2Fg%2F11swlck3ky?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D',
      color: '[#d25134]',
      mainImage: '/images/viva-banner-images/viva-skin/Peels.webp'
    },
    {
      name: 'Banashankari',
      address: '572, 3rd Floor, 30th Main Rd, 7 Block, CG Chinnappa Naidu Layout, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085',
      phone: '81230 02386',
      mapUrl: 'https://www.google.com/maps?q=Banashankari+VIVAA+Clinic',
      color: '[#d25134]',
      mainImage: '/images/viva-banner-images/stem-viva-treatment-hair/Micro Scalp Pigmentation.webp'
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-16 bg-[#d25134] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full">
              <MapPin className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Visit Us in Bengaluru
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Two convenient locations to serve you better with the same premium quality care and advanced treatments.
          </p>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us on the Map</h2>
            <p className="text-lg text-gray-600">Both locations are easily accessible with ample parking</p>
          </div>

          {/* Google Maps Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.217768768!2d77.6381598!3d12.9088629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e150e28e0f%3A0x1f7521b12ac243c1!2sVivaa%20Wellness%20Center%20%7C%20Skin%20%26%20Laser%20Hair%20Removal%20In%20HSR%20Layout!5e0!3m2!1sen!2sin!4v1686585600000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {locations.map((location, index) => (
              <div key={index} className="bg-red-100 p-8 rounded-xl">
                <div className="mb-6">
                  <img 
                    src={location.mainImage}
                    alt={`${location.name} Clinic`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{location.name}</h3>
                <div className="flex items-start space-x-3 mb-6">
                  <MapPin className="h-5 w-5 text-[#d25134] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{location.address}</p>
                </div>
                <div className="flex items-center space-x-3 mb-6">
                  <Phone className="h-5 w-5 text-[#d25134]" />
                  <span className="text-gray-700">{location.phone}</span>
                </div>
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="h-5 w-5 text-[#d25134]" />
                  <span className="text-gray-700">Mon-Sat: 9AM-8PM, Sun: 10AM-6PM</span>
                </div>

                {/* Get Directions Button */}
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-[#d25134] text-white py-3 px-6 rounded-md hover:bg-[#b8472e] transition-colors"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Get Directions
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-100 rounded-full">
                <Mail className="h-12 w-12 text-[#d25134]" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600">
              Have questions or ready to book? We're here to help you on your aesthetic journey.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default LocationsPage;