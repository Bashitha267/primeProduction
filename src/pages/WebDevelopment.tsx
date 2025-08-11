import { motion } from 'framer-motion';
import { Code, Smartphone, Zap } from 'lucide-react';

const WebDevelopment = () => {
  const packages = [
    {
      name: 'Prime Lumina',
      price: 'Rs 35 000',
      color:'#555555',
      features: [
        'Responsive Design',
        'Up to 4 Pages',
        'Contact Form',
        'SEO Optimization',
        '30 Days Support',
        'Mobile Friendly',
        'Upto 5 revisions'
      ],
      popular: "starter",
      uses:"Personal portfolios,small businesses and static informational sites"
    },
    {
      name: 'Prime Nexus',
      price: 'Rs 55 000',
      color:'#B8860B',
      features: [
        'Everything in Lumina',
        'Up to 8 Pages',
        'Admin Panel for content management',
        'E-commerce Ready',
        'Advanced SEO',
        '6 months Support',
        'Upto 10 revisions',
        'Domain and 2 year free Hosting included',
        'User login & registration'
      ],
      popular: "popular",
      uses:"Online stores,service providers and business needing customer interaction"
    },
    {
      name: 'Prime Apexium',
      price: 'Rs 70 000',
      color:'#0F4C75',
      features: [
        'Everything in Nexus',
        'Upto 15 pages',
        'Unlimited revisions',
        'Deliver within 21 days',
        'API Integration',
        '2 year Support',
        'Priority Support',
        'Training Included',
        'Advanced SEO strategy',
      ],
      popular: "pro",
      uses:"Large business,e-commerce brands and high scale service providers"

    }
  ];

  // const teamMembers = [
  //   {
  //     name: 'Alex Johnson',
  //     role: 'Senior Full Stack Developer',
  //     image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
  //     skills: ['React', 'Node.js', 'Python']
  //   },
  //   {
  //     name: 'Sarah Chen',
  //     role: 'Frontend Specialist',
  //     image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
  //     skills: ['Vue.js', 'TypeScript', 'CSS']
  //   },
  //   {
  //     name: 'Mike Rodriguez',
  //     role: 'Backend Engineer',
  //     image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=300',
  //     skills: ['PHP', 'MySQL', 'AWS']
  //   }
  // ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Modern online store with payment integration',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Stripe', 'Node.js']
    },
    {
      title: 'Corporate Website',
      description: 'Professional business website with CMS',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['WordPress', 'PHP', 'MySQL']
    },
    {
      title: 'SaaS Dashboard',
      description: 'Complex data visualization platform',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Vue.js', 'D3.js', 'Python']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Web Development
              <span className="text-red-500"> That Performs</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Custom websites and web applications built with cutting-edge technology to drive your business forward
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Modern Technology',
                description: 'Using the latest frameworks and tools for optimal performance'
              },
              {
                icon: Smartphone,
                title: 'Responsive Design',
                description: 'Perfect experience across all devices and screen sizes'
              },
              {
                icon: Zap,
                title: 'Fast & Secure',
                description: 'Optimized for speed with enterprise-level security'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-red-50 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
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
              Choose Your Perfect Package
            </h2>
            <p className="text-xl text-gray-600">
              Tailored solutions for every business size and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                  pkg.popular==="popular" ? 'border-2 border-[#B8860B] transform scale-105' : ''
                }  ${
                  pkg.popular==="pro" ? 'border-2 border-purple-600 transform scale-105' : ''
                }
                 ${
                  pkg.popular==="starter" ? 'border-2 border-gray-600 transform scale-105' : ''
                }`}
              > {pkg.popular==="starter" && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gray-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Starter
                    </span>
                  </div>
                )}
                {pkg.popular==="popular" && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#B8860B] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                   {pkg.popular==="pro" && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-800 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Professional
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4 ">{pkg.name.slice(0,5)}<span style={{color:`${pkg.color}`}}>{pkg.name.slice(5)}</span></h3>
                  <div className={`text-3xl font-bold  mb-4 ${pkg.popular==="pro"?"text-purple-800":""} ${pkg.popular==="starter"?"text-gray-600":""} ${pkg.popular==="popular"?"text-[#B8860B]":""}`}>{pkg.price}</div>
                </div>
               
                <ul className="space-y-3 mb-8 h-80 max-h-80">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                 <div className='text-center text-md  text-black mb-4 mt-4'>{pkg.uses}</div>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  pkg.popular==="popular" 
                    ? 'bg-[#B8860B] text-white hover:bg-[#9a7005]' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } ${
                  pkg.popular==="pro" 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }
                ${
                  pkg.popular==="starter" 
                    ? 'bg-gray-600 text-white hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`
                }>
                  Get Started
                </button>
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects */}
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
              Latest Projects
            </h2>
            <p className="text-xl text-gray-600">
              See our recent web development achievements
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
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Development Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </motion.div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => ( */}
              {/* <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-red-600 font-medium mb-4">{member.role}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div> */}
            {/* ))}
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;