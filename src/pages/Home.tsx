import { motion } from 'framer-motion';
import { ArrowRight, Camera, ChevronLeft, ChevronRight, Monitor, Palette } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides =[
  {
    "title": "Live Streaming",
    "image": "https://res.cloudinary.com/dnfbik3if/image/upload/v1754917804/pexels-kyleloftusstudios-2510429_vxucsx.jpg",
    "description": "Captures a professional multi-camera streaming setup with monitors—ideal for showcasing your live coverage services."
  },
  {
    "title": "Event Covering",
    "image": "https://res.cloudinary.com/dnfbik3if/image/upload/v1754917806/pexels-rohit-gautam-1570927-12727865_akjgo4.jpg",
    "description": "Evokes artistic emotion with soft natural light—perfect for romantic, high-quality wedding shots."
  },
  {
    "title": "Web Design & Development",
    "image": "https://res.cloudinary.com/dnfbik3if/image/upload/v1754917806/pexels-bhavishya-15717262_k8sepw.jpg",
    "description": "Features someone working on a tablet or screen—great for presenting design and development services."
  },
  {
    "title": "Graphic Design",
    "image": "https://res.cloudinary.com/dnfbik3if/image/upload/v1754917950/pexels-kaboompics-6463_p7abiw.jpg",
    "description": "Includes tools like cameras and artistic setups, hinting at creative production work."
  }
]


  const projects = [
    {
      title: 'Tech Summit 2024',
      category: 'Event Coverage',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      title: 'Brand Identity',
      category: 'Graphic Design',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Slideshow */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-7xl font-bold mb-6"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-xl md:text-2xl mb-8"
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <Link
                    to="/contact"
                    className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Navigation Buttons */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-red-600' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Creative Solutions for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring your vision to life through professional event coverage, stunning web development, and impactful graphic design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: 'Event Coverage',
                description: 'Professional photography and videography for all your special events, from corporate gatherings to weddings.',
                link: '/events'
              },
              {
                icon: Monitor,
                title: 'Web Development',
                description: 'Custom websites and web applications built with modern technologies to help your business thrive online.',
                link: '/web-development'
              },
              {
                icon: Palette,
                title: 'Graphic Design',
                description: 'Creative visual solutions including branding, marketing materials, and digital designs that make an impact.',
                link: '/graphic-design'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-red-50 p-3 rounded-lg w-fit mb-4 group-hover:bg-red-100 transition-colors">
                  <service.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center space-x-2 group-hover:translate-x-2 transition-transform"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Latest Projects
            </h2>
            <p className="text-xl text-gray-600">
              Discover our recent work and creative achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent text-white">
                  <span className="text-red-400 text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with our expert team and creative solutions
            </p>
            <Link
              to="/contact"
              className="bg-white text-red-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;