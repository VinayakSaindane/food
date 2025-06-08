import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

// Mock FEATURES data for demonstration
const FEATURES = [
  {
    id: 1,
    icon: "fas fa-shield-alt",
    title: "Expert Certification",
    description: "Certified professionals with decades of experience in welding inspection and quality assurance."
  },
  {
    id: 2,
    icon: "fas fa-tools",
    title: "Advanced Equipment",
    description: "State-of-the-art inspection tools and technology for precise and reliable results."
  },
  {
    id: 3,
    icon: "fas fa-clock",
    title: "Fast Turnaround",
    description: "Quick response times and efficient service delivery without compromising quality."
  },
  {
    id: 4,
    icon: "fas fa-medal",
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee with comprehensive reporting and documentation."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.06),transparent_50%)]"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent animate-pulse"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-200 shadow-sm">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 leading-tight">
            Why Choose National Inspection?
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We combine expertise, comprehensive services, and quality assurance to deliver 
            <span className="text-blue-700 font-semibold"> exceptional welding solutions</span> tailored to your needs.
          </p>
          
          {/* Decorative element */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-sm"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              className="group transform hover:scale-105 transition-all duration-500 hover:-translate-y-2 animate-[fadeIn_0.8s_ease-out_forwards]"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <Card className="relative bg-white/90 backdrop-blur-sm border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 overflow-hidden h-full shadow-lg">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-indigo-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 p-[1px]">
                    <div className="w-full h-full bg-white rounded-lg"></div>
                  </div>
                </div>

                <CardContent className="relative p-8 text-center h-full flex flex-col justify-between">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500 transform scale-110"></div>
                      <div className="relative w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                        <i className={`${feature.icon} text-2xl text-white`}></i>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <span>Ready to get started?</span>
            <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
          </div>
        </div>
      </div>


    </section>
  );
};

export default WhyChooseUs;