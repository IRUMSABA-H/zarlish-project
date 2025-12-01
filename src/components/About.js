"use client";
import { motion } from "framer-motion";

import Image from "next/image";
export default function About() {
  return (
   <section
  id="about"
  className="py-20 px-4 md:px-16 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
  style={{
    backgroundColor: 'white',
    color: 'black'
  }}
>


      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* Left Side - Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 10}}
          viewport={{ once: false }}
        >
          <Image
  src="/zarlishh2.jpeg"
  alt="About Image"
  width={315}   
  height={350}   
  style={{ objectFit: "contain" }}
  className="rounded-2xl shadow-lg"
/>

        </motion.div>

        {/* Right Side - About Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 10, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            I’m an accomplished English Spoken Teacher
             and Content Creator dedicated to helping
              learners gain confidence, fluency, and
               clarity in spoken English. With years of 
               teaching experience, I’ve guided students
                from diverse backgrounds to improve their 
                communication skills, pronunciation, and
                 overall language proficiency.
          </p>
          <p className="text-lg leading-relaxed mt-4">
           My approach combines modern teaching techniques,
            interactive learning, and real-life conversational 
            practice to make English speaking not just easier—but
             enjoyable and meaningful. Alongside teaching, I create
              educational and motivational content aimed at inspiring
            learners to express themselves with confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
