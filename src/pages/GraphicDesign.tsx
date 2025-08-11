import { motion } from 'framer-motion';
import { Eye, Lightbulb, Palette, Target } from 'lucide-react';
import { useState } from 'react';

const GraphicDesign = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const designCategories = [
    { id: 'all', name: 'All Designs' },
    { id: 'branding', name: 'Branding' },
    { id: 'web', name: 'Web Design' },
    { id: 'print', name: 'Print Design' },
    { id: 'social', name: 'Social Media' }
  ];

  const designs = [
    {
      id: 1,
      title: 'Modern Brand Identity',
      category: 'branding',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete brand identity package with logo, colors, and typography'
    },
    {
      id: 2,
      title: 'E-commerce Website',
      category: 'web',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Modern e-commerce platform with intuitive user experience'
    },
    {
      id: 3,
      title: 'Corporate Brochure',
      category: 'print',
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Professional tri-fold brochure for corporate communications'
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'social',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Cohesive social media graphics for brand awareness campaign'
    },
    {
      id: 5,
      title: 'Restaurant Logo Design',
      category: 'branding',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Creative logo design for upscale restaurant chain'
    },
    {
      id: 6,
      title: 'Annual Report Design',
      category: 'print',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=600',
      description: 'Professional annual report with data visualization'
    }
  ];

  const filteredDesigns = selectedCategory === 'all' 
    ? designs 
    : designs.filter(design => design.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-purple-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Graphic Design
              <span className="block text-purple-200">That Inspires</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Creating visual experiences that communicate your message and captivate your audience
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Palette,
                title: 'Brand Identity',
                description: 'Complete branding solutions that define your unique identity'
              },
              {
                icon: Eye,
                title: 'Visual Design',
                description: 'Stunning visuals that capture attention and convey meaning'
              },
              {
                icon: Lightbulb,
                title: 'Creative Concepts',
                description: 'Innovative ideas that set your brand apart from competitors'
              },
              {
                icon: Target,
                title: 'Strategic Design',
                description: 'Purpose-driven design aligned with your business objectives'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-red-50 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <service.icon className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Portfolio */}
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
              Our Design Portfolio
            </h2>
            <p className="text-xl text-gray-600">
              Explore our latest creative works and design solutions
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {designCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Design Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDesigns.map((design, index) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-medium capitalize mb-2 inline-block">
                    {design.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{design.title}</h3>
                  <p className="text-gray-200">{design.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology that delivers exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your brand, goals, and target audience through detailed consultation'
              },
              {
                step: '02',
                title: 'Concept',
                description: 'Developing creative concepts and initial design directions based on research'
              },
              {
                step: '03',
                title: 'Design',
                description: 'Creating detailed designs with multiple iterations and refinements'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Final production files and ongoing support for implementation'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-red-600 text-white text-2xl font-bold w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Services */}
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
              Design Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive design solutions for all your creative needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Brand Identity & Logo Design',
                services: ['Logo Design', 'Brand Guidelines', 'Color Palettes', 'Typography Selection', 'Brand Applications']
              },
              {
                title: 'Print Design',
                services: ['Brochures & Flyers', 'Business Cards', 'Posters & Banners', 'Annual Reports', 'Packaging Design']
              },
              {
                title: 'Digital Design',
                services: ['Website Design', 'Social Media Graphics', 'Email Templates', 'Digital Advertising', 'App UI/UX Design']
              },
              {
                title: 'Marketing Materials',
                services: ['Presentation Design', 'Trade Show Graphics', 'Infographics', 'Marketing Collateral', 'Signage Design']
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesign;