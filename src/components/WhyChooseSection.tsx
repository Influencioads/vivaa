import React from 'react';
import { Leaf, Shield, Zap, Heart } from 'lucide-react';

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: <Leaf className="h-8 w-8 text-[#d25134]" />,
      title: "Holistic Healing",
      description: "We treat the root cause of your concerns, not just the symptoms, ensuring long-lasting and effective results."
    },
    {
      icon: <Shield className="h-8 w-8 text-[#d25134]" />,
      title: "Medical Standards",
      description: "All treatments adhere to the strictest medical standards for your safety and confidence, delivered by qualified professionals."
    },
    {
      icon: <Zap className="h-8 w-8 text-[#d25134]" />,
      title: "State-of-the-Art Technology",
      description: "We invest in the latest, clinically-proven technology to provide superior and efficient outcomes."
    },
    {
      icon: <Heart className="h-8 w-8 text-[#d25134]" />,
      title: "Personalized Care",
      description: "Your journey is unique. We create bespoke treatment plans tailored specifically to your individual needs and goals."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose VIVAA?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-red-100 rounded-full group-hover:bg-red-200 transition-colors">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;