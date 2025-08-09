import { useState } from 'react';
import { Monitor, Code, Smartphone, Camera, X, Quote, Star, ArrowRight } from 'lucide-react';

export default function About() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

  const services = [
    {
      icon: Monitor,
      title: 'Web Design',
      description: 'Creating beautiful, user-friendly interfaces with modern design principles and accessibility in mind.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Code,
      title: 'Web Development', 
      description: 'Building robust, scalable web applications using cutting-edge technologies and best practices.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications with native performance and smooth user experience.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Camera,
      title: 'Digital Solutions',
      description: 'Providing comprehensive digital solutions including branding, photography, and content creation.',
      color: 'from-purple-500 to-pink-600'
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Manav Modi',
      position: 'Product Manager at TechCorp',
      avatar: 'https://images.pexels.com/photos/33331334/pexels-photo-33331334.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'FazilKhan delivered an exceptional website that exceeded our expectations. His attention to detail and modern design approach really made our brand stand out.',
      date: '2024-01-15',
    },
    {
      id: 2,
      name: 'Mayank Lakum',
      position: 'Startup Founder',
      avatar: 'https://images.pexels.com/photos/7550372/pexels-photo-7550372.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Working with FazilKhan was a game-changer for our startup. He built a scalable platform that helped us grow from 100 to 10,000 users.',
      date: '2024-02-20',
    },
    {
      id: 3,
      name: 'Hetansh Patel',
      position: 'Marketing Director',
      avatar: 'https://images.pexels.com/photos/27603433/pexels-photo-27603433.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The mobile app FazilKhan developed for us increased our customer engagement by 300%. His technical skills are impressive.',
      date: '2024-03-10',
    },
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '2+', label: 'Years Experience' },
    { number: '15+', label: 'Technologies' },
  ];

  const openTestimonialModal = (testimonial: any) => {
    setSelectedTestimonial(testimonial);
  };

  const closeTestimonialModal = () => {
    setSelectedTestimonial(null);
  };

  return (
    <article className="animate-fade-in">
      
      {/* Header */}
      <header className="mb-12">
        <h2 className="article-title">About Me</h2>
        <p className="text-custom-md text-text-secondary leading-relaxed">
          Passionate Full Stack Developer crafting digital experiences that make a difference
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="prose prose-lg text-text-secondary">
              <p className="text-custom-base leading-relaxed mb-6">
                I'm a passionate Full Stack Developer from Gujarat, India, specializing in creating 
                modern web applications and digital experiences. With expertise in React, Node.js, 
                and cloud technologies, I help businesses transform their ideas into powerful digital solutions.
              </p>
              <p className="text-custom-base leading-relaxed">
                My approach combines technical excellence with user-centered design, ensuring that 
                every project not only looks great but also delivers exceptional performance and user experience. 
                I'm committed to staying updated with the latest technologies and best practices.
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-custom-lg bg-card-secondary border border-border-custom">
                <div className="text-custom-lg font-bold gradient-text mb-1">{stat.number}</div>
                <div className="text-custom-xs text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <h3 className="text-custom-lg font-semibold text-text-primary">What I Do</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-border-custom to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group modern-card p-6 hover:scale-105 transition-all duration-400">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-custom-lg bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-custom-md font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-custom-sm text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <h3 className="text-custom-lg font-semibold text-text-primary">Client Testimonials</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-border-custom to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="modern-card p-6 cursor-pointer group hover:scale-105 transition-all duration-400"
              onClick={() => openTestimonialModal(testimonial)}
            >
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-accent-primary/20"
                />
                <div className="flex-1">
                  <h4 className="text-custom-sm font-semibold text-text-primary">{testimonial.name}</h4>
                  <p className="text-custom-xs text-text-muted">{testimonial.position}</p>
                </div>
                <div className="flex gap-1">
                  {Array.from({length: testimonial.rating}).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <p className="text-custom-sm text-text-secondary leading-relaxed line-clamp-3">
                {testimonial.text}
              </p>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border-custom">
                <span className="text-custom-xs text-text-muted">
                  {new Date(testimonial.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </span>
                <ArrowRight className="w-4 h-4 text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="modern-card max-w-2xl w-full p-8 animate-scale-in">
            
            <button 
              className="absolute top-4 right-4 p-2 rounded-custom-md bg-card-secondary hover:bg-border-custom transition-colors"
              onClick={closeTestimonialModal}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-6">
              <img 
                src={selectedTestimonial.avatar} 
                alt={selectedTestimonial.name} 
                className="w-16 h-16 rounded-custom-lg object-cover ring-2 ring-accent-primary/20"
              />
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-custom-md font-semibold text-text-primary">{selectedTestimonial.name}</h4>
                  <div className="flex gap-1">
                    {Array.from({length: selectedTestimonial.rating}).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-custom-sm text-text-muted mb-4">{selectedTestimonial.position}</p>
                
                <div className="relative">
                  <Quote className="w-8 h-8 text-accent-primary/30 mb-4" />
                  <p className="text-custom-base text-text-secondary leading-relaxed">
                    {selectedTestimonial.text}
                  </p>
                </div>
                
                <p className="text-custom-xs text-text-muted mt-6">
                  {new Date(selectedTestimonial.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

    </article>
  );
}
