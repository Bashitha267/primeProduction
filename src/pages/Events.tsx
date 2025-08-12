import { motion } from 'framer-motion';
import { Calendar, MoreHorizontal, Users, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
const [selectedGallery, setSelectedGallery] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  console.log(selectedGallery)
  const packages = [
    {
  name: 'Prime Spark',
  price: 'Rs 9000',
  color: '#555555', 
  features: [
    'Coverage up to 4 hours',
    'Up to 100 professional shots',
    'High-quality photo editing included',
    'Edited photos delivered within 5–6 days',
    'Short recap video of your event',
    'Cinematic color grading applied',
    'High-resolution photos for print and digital',
    'Secure online digital album access'
  ],
  popular: "basic",
  uses: "Perfect for capturing birthdays, graduations, family gatherings, baby showers, anniversaries, engagements, small corporate events, cultural celebrations."
},
    {
      name: 'Prime Lumina',
      price: 'Rs 15 000',
      color:'#1E90FF',
      features: [
        'Coverage up to 6 hours',
        'Up to 200 professional shots',
        'Professional lighting system included',
        'Short recap video of your event',
        'Edited photos delivered within 7 days',
        'Secure online digital album access',
        'Captures candid and posed moments',
        
        
      ],
      popular: "starter",
      uses:"Ideal for anniversaries, corporate events, graduations, family gatherings, milestone celebrations, cultural festivals, product launches, and similar medium-sized events."
    },
    {
      name: 'Prime Nexus',
      price: 'Rs 25 000',
      color:'#B8860B',
      features: [
        'Coverage up to 8 hours',
        'Up to 400 professional shots',
        'Professional lighting system included',
        'Short recap video of your event',
        'Edited photos delivered within 10 days',
        'High-resolution photos for print and digital',
        
        
      ],
      popular: "popular",
      uses:"Ideal for large corporate events, conferences, milestone celebrations, exhibitions, cultural festivals, and other full-day occasions."
    },
    {
      name: 'Prime Apexium',
      price: 'Rs 40 000',
      color:'#6B21A8',
      features: [
        'Unlimited coverage hours',
        'Unlimited professional shots',
        'Professional lighting system included',
        'Fast delivery with priority editing',
        'Short recap and full event videos provided',
        'High-resolution photos optimized for print and digital',
       
      ],
      popular: "pro",
      uses:"Ideal for grand parties, multi-day festivals, large corporate events, high-profile launches, and any event requiring unlimited, top-tier coverage and quality."
    }
  ];
  const eventCategories = [
    //     {
    //   id: 'live',
    //   title: 'Live Streaming',
    //   icon: <Video className="h-8 w-8" />,
    //   description: 'Professional documentation of business events and conferences',
    //   images: [
    //     'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    //     'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    //     'https://images.pexels.com/photos/1181403/pexels-photo-1181403.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    //     'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    //     'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    //     'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    //   ]
    // },
    // {
    //   id: 'weddings',
    //   title: 'Wedding Ceremonies',
    //   icon: <Heart className="h-8 w-8" />,
    //   description: 'Capturing the magic of your special day with timeless elegance',
    //   images: [
    //     'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    //     'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    //     'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    //     'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    //     'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    //     'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    //   ]
    // },

    {
      id: 'birthday',
      title: 'Birthday Celebrations',
      icon: <Calendar className="h-8 w-8" />,
      description: 'Joyful moments and precious memories of life\'s milestones',
      images: [
        'https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1684032/pexels-photo-1684032.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ]
    },
    {
      id: 'social',
      title: 'Conferences & Exhibitions',
      icon: <Users className="h-8 w-8" />,
      description: 'Showcasing innovations, fostering connections, and inspiring growth through impactful gatherings.',
      images: [
        'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ]
    },
    {
      id: 'other',
      title: 'Other Events',
      icon: <MoreHorizontal className="h-8 w-8" />,
      description: 'Celebrating unique occasions with elegance, creativity, and unforgettable experiences.',
      images: [
        'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold  mb-6  text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
            Event <span className="  text-black">Coverage</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We specialize in capturing the essence and emotion of your special moments. From intimate gatherings 
            to grand celebrations, our professional photography and videography services ensure that every 
            precious memory is preserved with artistic excellence and attention to detail.
          </p>
        </motion.div>

        <div className="space-y-16">
          {eventCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <div className="p-3  bg-red-500 rounded-lg text-white mr-4">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-black">{category.title}</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {category.description}
                </p>
                <button
                  onClick={() => setSelectedGallery(category.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  View Gallery
                </button>
              </div>
              
              <div className="flex-1">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {category.images.slice(0, 6).map((image, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      viewport={{ once: true }}
                      transition={{ delay: imgIndex * 0.1 }}
                      className="relative overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`${category.title} ${imgIndex + 1}`}
                        className="w-full h-32 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl max-h-full"
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
            <section className="py-20 bg-gray-50">
        <div className="max-w-8xl px-4 sm:px-6 lg:px-8 mx-7  ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Package
            </h2>
            <p className="text-xl text-gray-600">
              Capturing every moment with tailored packages for every event size and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {packages.map((pkg, index) => {
              // Calculate discount and new price
              // const originalPriceNum = parsePrice(pkg.price);
              // const discountAmount = 4500; // fixed discount between 4000-5000
              // const discountedPriceNum = originalPriceNum - discountAmount;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-2xl shadow-lg p-8 relative  mb-4 mt-4   ${
                    pkg.popular === "popular" ? 'border-2 border-[#B8860B] transform scale-105' : ''
                  } ${
                    pkg.popular === "pro" ? 'border-2 border-purple-600 transform scale-105' : ''
                  } ${
                    pkg.popular === "starter" ? 'border-2  border-[#1E90FF] transform scale-105' : ''
                  }
                  ${
                    pkg.popular === "basic" ? 'border-2 border-gray-600 transform scale-105' : ''
                  }`}  
                >
                  {pkg.popular === "basic" && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gray-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Basic
                      </span>
                    </div>
                  )}
                  {pkg.popular === "starter" && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#1E90FF] text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Starter
                      </span>
                    </div>
                  )}
                  {pkg.popular === "popular" && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#B8860B] text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  {pkg.popular === "pro" && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-800 text-white px-4 py-1 rounded-full text-sm font-semibold">
                       Professional
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-4xl font-bold text-gray-900 mb-4 ">
                      {pkg.name.slice(0,5)}
                      <span style={{color:`${pkg.color}`}}>{pkg.name.slice(5)}</span>
                    </h3>
                    <div className={`text-3xl font-bold mb-4 flex flex-col ${
                      pkg.popular === "pro" ? "text-purple-800" :
                      pkg.popular === "starter" ? "text-[#1E90FF]" :
                      pkg.popular === "popular" ? "text-[#B8860B]" : 
                      pkg.popular === "popular" ? "text-gray-600" : ""
                      
                    }`}>
                      {/* Original price struck through */}
                      <span className="  text-gray-400">
                        Rs {pkg.price}
                      </span>
                      {/* Discounted price highlighted */}
                      {/* <span className="text-red-600 font-bold">
                        Rs {formatPrice(discountedPriceNum)}
                      </span> */}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-10 h-80 max-h-80 ">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 ">
                        <div className="w-2 h-2 bg-red-600 rounded-full" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className='text-center text-md text-black  mt-8 mb-4'>{pkg.uses}</div>
                  <Link to="/contact">
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    pkg.popular === "popular" 
                      ? 'bg-[#B8860B] text-white hover:bg-[#9a7005]' 
                      : pkg.popular === "pro" 
                      ? 'bg-purple-600 text-white hover:bg-purple-700' :
                      pkg.popular === "starter" 
                      ? 'bg-[#1E90FF] text-white hover:bg-[#095fb5]' 
                      : 'bg-gray-600 text-white  hover:bg-gray-700'
                  }`}>
                    Get Started
                  </button></Link>
                  
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;