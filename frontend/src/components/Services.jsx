import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Server, Shield, Smartphone, Code, BarChart, Headphones } from 'lucide-react'

const services = [
  {
    icon: <Server className="h-12 w-12" />,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure tailored to your business needs."
  },
  {
    icon: <Shield className="h-12 w-12" />,
    title: "Cybersecurity",
    description: "Comprehensive security measures to protect your digital assets."
  },
  {
    icon: <Smartphone className="h-12 w-12" />,
    title: "Mobile Development",
    description: "Custom mobile applications for iOS and Android platforms."
  },
  {
    icon: <Code className="h-12 w-12" />,
    title: "Software Development",
    description: "Bespoke software solutions to streamline your business processes."
  },
  {
    icon: <BarChart className="h-12 w-12" />,
    title: "Data Analytics",
    description: "Turn your data into actionable insights with advanced analytics."
  },
  {
    icon: <Headphones className="h-12 w-12" />,
    title: "IT Support",
    description: "24/7 technical support to keep your systems running smoothly."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

export default function OurServices() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Our Cutting-Edge Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden group perspective shadow-lg shadow-cyan-500/20 hover:shadow-purple-500/30 transition-shadow duration-500">
                <div className="p-8 transform transition-all duration-500 ease-in-out group-hover:rotate-y-180">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                  <div className="relative z-10 transform transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-8">
                    <motion.div
                      className="mb-6 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-4 text-pink-300">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-y-180">
                    <p className="text-lg font-medium text-center text-cyan-200">
                      Discover how our {service.title.toLowerCase()} can transform your business.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}