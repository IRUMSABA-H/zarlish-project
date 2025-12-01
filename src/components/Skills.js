import { motion } from 'framer-motion';

const skills = [
  { name: 'MS Office Skills', level: 95 },
  { name: 'Management', level: 90 },
  { name: 'Teamwork', level: 90 },
  { name: 'Communication', level: 95 },
  { name: 'Leadership', level: 90 },
  { name: 'HR Dealing', level: 85 },
  { name: 'Project Management', level: 90 },
  { name: 'Time Management', level: 90 },
  { name: 'Active Listening', level: 85 },
  { name: 'Decision Making', level: 90 },
  { name: 'Problem Solving', level: 90 },
  { name: 'Detail Oriented', level: 85 },
  { name: 'Adaptability', level: 90 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-16 bg-white text-black">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated heading */}
        <motion.h2
          className="text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group p-6 border border-gray-300 rounded-lg shadow hover:shadow-lg transition"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
                <div
                  className="bg-black h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm mt-1 text-gray-700">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
