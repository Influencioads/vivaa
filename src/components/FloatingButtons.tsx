import { MessageCircle, Phone } from 'lucide-react';

const FloatingButtons = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918123002386', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+918123002386');
  };

  return (
    <>
      {/* WhatsApp Button - Bottom Right */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Phone Call Button - Bottom Right */}
      <button
        onClick={handlePhoneClick}
        className="fixed bottom-20 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </button>
    </>
  );
};

export default FloatingButtons;