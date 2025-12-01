
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "BS English Literature",
    institution: "Rawalpindi Women University",
    duration: "Sep 2021 – Jul 2025",
  },
];

export default function Education() {
  const titleVariant = {
    hidden: { opacity: 0, y: -50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 6,
        ease: "easeOut" 
      } 
    },
  };

  const leftCardVariant = {
    hidden: { opacity: 0, x: -100 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 6,
        ease: "easeOut",
        delay: 0.5
      } 
    },
  };

  return (
    <section id="education" className="py-20 px-4 md:px-16 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-16 text-center text-black"
          variants={titleVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3, margin: "-100px 0px" }}
        >
          Education
        </motion.h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-100 shadow-xl rounded-lg p-6 w-full md:w-1/2 text-left hover:shadow-2xl hover:bg-gray-200 transition duration-300 border border-gray-300"
              variants={leftCardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3, margin: "-50px 0px" }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-2 text-black">{edu.degree}</h3>
              <p className="text-md mb-1 text-gray-700">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
