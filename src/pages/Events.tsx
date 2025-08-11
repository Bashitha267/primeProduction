import { motion } from 'framer-motion';
import { Award, Calendar, Camera, Users } from 'lucide-react';
import { useState } from 'react';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const eventCategories = [
    { id: 'all', name: 'All Events' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'conference', name: 'Conferences' },
    { id: 'party', name: 'Parties' }
  ];

  const events = [
    {
      id: 1,
      title: 'Tech Conference 2024',
      category: 'conference',
      date: 'March 15, 2024',
      attendees: 500,
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Annual technology conference with industry leaders and innovators.'
    },
    {
      id: 2,
      title: 'Corporate Annual Gala',
      category: 'corporate',
      date: 'February 28, 2024',
      attendees: 300,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Elegant corporate gala celebrating company achievements.'
    },
    {
      id: 3,
      title: 'Sarah & Mike Wedding',
      category: 'wedding',
      date: 'January 20, 2024',
      attendees: 150,
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Beautiful outdoor wedding ceremony and reception.'
    },
    {
      id: 4,
      title: 'Product Launch Event',
      category: 'corporate',
      date: 'December 10, 2023',
      attendees: 200,
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Exciting product launch with live demonstrations and networking.'
    },
    {
      id: 5,
      title: 'Birthday Celebration',
      category: 'party',
      date: 'November 25, 2023',
      attendees: 80,
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Milestone birthday celebration with family and friends.'
    },
    {
      id: 6,
      title: 'Business Summit',
      category: 'conference',
      date: 'October 15, 2023',
      attendees: 400,
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'International business summit with keynote speakers.'
    }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Event Coverage
              <span className="block text-red-200">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Capturing your most important moments with professional photography and videography services
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Camera, number: '500+', label: 'Events Covered' },
              { icon: Users, number: '50K+', label: 'Happy Attendees' },
              { icon: Calendar, number: '5', label: 'Years Experience' },
              { icon: Award, number: '25+', label: 'Awards Won' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-red-50 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-10 w-10 text-red-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Gallery */}
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
              Our Event Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Browse through our recent event coverage and memorable moments
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {eventCategories.map((category) => (
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

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {event.category}
                    </span>
                    <span className="text-gray-500 text-sm">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              What We Offer
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive event coverage services tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Photography',
                description: 'Professional high-quality photography capturing every important moment',
                features: ['High-resolution images', 'Same-day previews', 'Online gallery', 'Print packages']
              },
              {
                title: 'Videography',
                description: 'Cinematic video coverage with professional editing and production',
                features: ['4K video quality', 'Drone footage', 'Highlight reels', 'Full event recording']
              },
              {
                title: 'Live Streaming',
                description: 'Real-time streaming for remote attendees and social media',
                features: ['Multi-platform streaming', 'Interactive chat', 'Recording included', 'Technical support']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full" />
                      <span className="text-gray-700">{feature}</span>
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

export default Events;