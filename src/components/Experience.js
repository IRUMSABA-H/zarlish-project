'use client';
import { motion } from 'framer-motion';

const experienceData = [
  {
    role: "English Grammar Instructor",
    company: "PSOL",
    duration: "July 2023 – September 2023",
    description:
      "Served as a proficient English language instructor, conducting lessons for students at different skill levels, developing and evaluating assessments, and providing constructive feedback to support students' educational development.",
  },
  {
    role: "Content Writer",
    company: "Different Organizations",
    duration: "2021 – Present",
    description:
      "Working as a content writer with experience in crafting engaging descriptions, blog posts, and social media content for various organizations.",
  },
  {
    role: "Data Entry Analyst / Researcher",
    company: "Node Cypher",
    duration: "June 2024 – September 2024",
    description:
      "Efficiently entered data into databases, maintaining high standards of accuracy and attention to detail. Conducted in-depth research on CEOs, companies, and industry trends to gather accurate data.",
  },
  {
    role: "Spoken English Course Instructor",
    company: "Vocan.ZA",
    duration: "December 2024 – Present",
    description:
      "Designed and delivered comprehensive Spoken English courses, improving students' communication skills, confidence, and fluency through interactive lessons, role-plays, and constructive feedback.",
  },
  {
    role: "Keynote Speaker",
    company: "Govt. Asghar Mall College Post Graduate",
    duration: "December 2024",
    description:
      "Delivered a lecture on '21st Century Learners’ Skills', focusing on the 4Cs (Critical Thinking, Communication, Collaboration, and Creativity), 7Cs of Effective Communication, CV and Cover Letter writing, and mastering job interview techniques.",
  },
  {
    role: "English Language Instructor",
    company: "MTS",
    duration: "May 2025 – Present",
    description:
      "Taught English to international students following the Canadian curriculum, enhancing grammar, writing, and reading comprehension. Provided guidance and feedback to improve communication abilities and student confidence.",
  },
];

export default function Experience() {
  const lineVariant = {
    hidden: { height: 0 },
    show: { height: '100%', transition: { duration: 2, ease: 'easeInOut' } },
  };

  return (
    <section id="experience" className="py-20 px-4 md:px-16 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          Experience
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated timeline line */}
          <motion.div
            className="absolute left-4 top-0 w-0.5 bg-black origin-top"
            variants={lineVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          />

          {/* Experience items */}
          <div className="relative">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-12 flex items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              >
                {/* Dot */}
                <motion.div
                  className="flex-shrink-0 w-4 h-4 bg-black rounded-full mt-2 mr-8 relative z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <motion.h3
                    className="text-xl font-semibold text-black mb-1"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  >
                    {exp.role}{' '}
                    <span className="text-gray-600">@ {exp.company}</span>
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-500 mb-3"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.1 }}
                  >
                    {exp.duration}
                  </motion.p>
                  <motion.p
                    className="text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                  >
                    {exp.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
