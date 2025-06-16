import { GraduationCap, Users, Award, Clock } from 'lucide-react';
import WhyChooseSection from '../components/WhyChooseSection';
import ContactForm from '../components/ContactForm';

const CoursesPage = () => {
  const courses = [
    {
      title: 'Beautician Course',
      duration: '3 Months',
      students: '50+ Students',
      description: 'Comprehensive training in basic beauty treatments including facials, hair styling, makeup application, and skin care. Perfect for beginners looking to start their career in the beauty industry.',
      curriculum: [
        'Basic Skin Care and Facial Treatments',
        'Hair Styling and Basic Cutting Techniques',
        'Makeup Application for Different Occasions',
        'Eyebrow Shaping and Threading',
        'Basic Manicure and Pedicure',
        'Client Consultation and Customer Service',
        'Hygiene and Safety Protocols',
        'Business Skills for Beauty Professionals'
      ],
      career_opportunities: [
        'Beauty Salon Assistant',
        'Freelance Beautician',
        'Makeup Artist',
        'Spa Therapist',
        'Beauty Consultant'
      ],
      icon: <Users className="h-8 w-8 text-[#d25134]" />,
      color: '[#d25134]'
    },
    {
      title: 'Aesthetician Course',
      duration: '6 Months',
      students: '30+ Students',
      description: 'Advanced training in medical aesthetics and clinical skin treatments. This course covers advanced procedures, laser treatments, and medical-grade skincare for those seeking to work in clinical settings.',
      curriculum: [
        'Advanced Skin Analysis and Assessment',
        'Chemical Peels and Medical Facials',
        'Laser and Light-Based Treatments',
        'Anti-Aging Procedures',
        'Medical Microneedling and PRP',
        'Post-Treatment Care and Protocols',
        'Anatomy and Physiology of Skin',
        'Client Safety and Medical Ethics',
        'Advanced Equipment Operation'
      ],
      career_opportunities: [
        'Medical Aesthetician',
        'Clinical Skin Specialist',
        'Laser Technician',
        'Anti-Aging Consultant',
        'Medical Spa Manager'
      ],
      icon: <Award className="h-8 w-8 text-[#d25134]" />,
      color: '[#d25134]'
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-16 bg-[#d25134] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full">
              <GraduationCap className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Build Your Career in Aesthetics with VIVAA Academy
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Leverage our medical expertise and hands-on approach to launch or advance your career. 
            We offer comprehensive courses for aspiring beauty and aesthetic professionals.
          </p>
        </div>
      </section>

      {/* Course Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {courses.map((course, index) => (
              <div key={index} className="bg-red-50 rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Course Info */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-red-100 rounded-full mr-4">
                        {course.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">
                          {course.title}
                        </h2>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {course.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {course.students}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Career Opportunities */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Career Opportunities
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {course.career_opportunities.map((career, careerIndex) => (
                          <div key={careerIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-[#d25134] rounded-full mr-3"></div>
                            <span className="text-gray-700">{career}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Curriculum */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                      Course Curriculum
                    </h3>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="space-y-4">
                        {course.curriculum.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start">
                            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <span className="text-[#d25134] text-sm font-semibold">
                                {itemIndex + 1}
                              </span>
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Request More Information
            </h2>
            <p className="text-lg text-gray-600">
              Ready to start your journey in aesthetics? Get in touch to learn more about our courses.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Why Choose VIVAA */}
      <WhyChooseSection />
    </div>
  );
};

export default CoursesPage;