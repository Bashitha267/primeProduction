import axios from 'axios';
import { motion } from 'framer-motion';
import { Code, Smartphone, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
type Project={
  title:string,
  description:string,
  url:string,
  image:string,
  technologies:string[]
  
}
const WebDevelopment = () => {
  const [projects,setProjects]=useState<Project[]>([])
  useEffect(()=>{
    const getprojects=async ()=>{
      try{
        const response = await axios.get("https://primexbackend.onrender.com/api/web/getwebsites");
        // const data=await response.json()
        if(response.data.success){
          setProjects(response.data.websites)
          console.log(response.data.success)
        }

      }catch(e){
        console.log(e)
      }
    }
    getprojects()
  },[])
  const packages = [
    {
  name: 'Prime Spark',
  price: 'Rs 20 000',
  color: '#555555', // A bright blue for friendly, entry-level vibe
  features: [
    'Responsive Design',
    'Up to 2 Pages',
    'Basic Contact Form',
    'Basic SEO Setup',
    '14 Days Support',
    'Mobile Friendly',
    'Upto 2 revisions',
    'Domain 1 year free',
    '6 months hosting free'
  ],
  popular: "basic",
  uses: "Best for personal blogs, small-scale startups, and simple informational sites looking for a quick, professional online presence."
},
    {
      name: 'Prime Lumina',
      price: 'Rs 40 000',
      color:'#1E90FF',
      features: [
        'Responsive Design',
        'Up to 4 Pages',
        'Contact Form',
        'SEO Optimization',
        '30 Days Support',
        'Mobile Friendly',
        'Upto 5 revisions',
        'Domain 1 year free',
        '1 year months hostinger hosting free'
        
      ],
      popular: "starter",
      uses:"Perfect for personal portfolios, boutique businesses, and sleek, static informational websites with style, clarity, and impact."
    },
    {
      name: 'Prime Nexus',
      price: 'Rs 60 000',
      color:'#B8860B',
      features: [
        'Everything in Lumina',
        'Up to 8 Pages',
        'Admin Panel for content management',
        'E-commerce Ready',
        'Advanced SEO',
        '6 months Support',
        'Upto 10 revisions',
        'Domain 1 year free',
        '1 year months hostinger hosting free'
        
      ],
      popular: "popular",
      uses:"Perfect for vibrant online stores, dynamic services, and customer-focused modern businesses."
    },
    {
      name: 'Prime Apexium',
      price: 'Rs 75 000',
      color:'#6B21A8',
      features: [
        'Everything in Nexus',
        'Upto 15 pages',
        'Unlimited revisions',
        'Deliver within 21 days',
        'API Integration',
        '2 year Support',
        'Priority Support',
        'Domain 1 year free',
        '2 year months hostinger hosting free'
      ],
      popular: "pro",
      uses:"Designed for large enterprises, leading e-commerce brands, and high-scale service providers demanding robust solutions."
    }
  ];

  // const projects = [
  //   {
  //     title: 'E-commerce Platform',
  //     description: 'Modern online store with payment integration',
  //     image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     tech: ['React', 'Stripe', 'Node.js']
  //   },
  //   {
  //     title: 'Corporate Website',
  //     description: 'Professional business website with CMS',
  //     image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     tech: ['WordPress', 'PHP', 'MySQL']
  //   },
  //   {
  //     title: 'SaaS Dashboard',
  //     description: 'Complex data visualization platform',
  //     image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=600',
  //     tech: ['Vue.js', 'D3.js', 'Python']
  //   }
  // ];

  // Utility to convert price string to number (e.g., "Rs 35 000" -> 35000)
  const parsePrice = (priceStr:string) => {
    return Number(priceStr.replace(/[^0-9]/g, ''));
  };

  // Utility to format number to price string with comma (e.g., 35000 -> "35,000")
  const formatPrice = (num:number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="pt-1">
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
              Tailored solutions for every business size and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-6">
            {packages.map((pkg, index) => {
              // Calculate discount and new price
              const originalPriceNum = parsePrice(pkg.price);
              const discountAmount = 4500; // fixed discount between 4000-5000
              const discountedPriceNum = originalPriceNum - discountAmount;

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
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 ">
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
                      <span className="line-through  text-gray-400">
                        Rs {formatPrice(originalPriceNum)}
                      </span>
                      {/* Discounted price highlighted */}
                      <span className="text-red-600 font-bold">
                        Rs {formatPrice(discountedPriceNum)}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 xl:mb-14 mb-2 md:mb-2 md:h-80 xl:h-80 2xl:h-80 ">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 ">
                        <div className="w-2 h-2 bg-red-600 rounded-full" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className='text-center text-md text-black font-semibold md:mb-3 lg:mb-0  md:h-24 xl:h-40 2xl:h-32 mb-4 mt-2'>{pkg.uses}</div>
                  <Link to="/contact">
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors  ${
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
            {projects.length>0&& projects.map((project, index) => (
              <Link to={project.url} key={index}><motion.div
                
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow "
                
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 h-16 ">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div></Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
