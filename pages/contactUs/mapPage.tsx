import React from 'react';

const MapPage = () => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-medium text-gray-800">
                Get in Touch
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Ready to transform your organization's learning journey? Let's start a conversation.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-700">+91 123 456 7890</p>
                  <p className="text-gray-500 text-sm">Available Mon-Fri, 9 AM - 6 PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-700">info@iskillbox.com</p>
                  <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Office Address</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    iSkillBox<br />
                    Pune, Maharashtra<br />
                    India
                  </p>
                  <p className="text-gray-500 text-sm mt-1">Visit us anytime during business hours</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-2">
              <a
                href="/contactus"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                Schedule a Meeting
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="relative">
            {/* Map Container */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              {/* Map Header */}
              <div className="bg-gray-800 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5a2 2 0 012-2h6a2 2 0 012 2v11.382a1 1 0 01-.553.894L9 20z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-white">You can visit us here</h2>
                    <p className="text-gray-300 text-sm">Drop by our office anytime</p>
                  </div>
                </div>
              </div>

              {/* Google Maps iframe */}
              <div className="relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30259.04826313364!2d73.73618577431641!3d18.556852700000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfac0cf900ed%3A0xf6173a17a3f77ecb!2siSkillBox!5e0!3m2!1sen!2sin!4v1755436574033!5m2!1sen!2sin" 
                  width="100%" 
                  height="400" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[400px]"
                  title="iSkillBox Office Location"
                />
                
                {/* Map Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 text-sm">iSkillBox</p>
                      <p className="text-gray-600 text-xs">Pune, Maharashtra, India</p>
                    </div>
                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapPage;
