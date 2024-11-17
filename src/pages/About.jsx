import { motion } from 'framer-motion';
import { Book, Cpu, Wrench, Zap } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Digital Electronics', icon: Cpu },
    { name: 'Circuit Design', icon: Zap },
    { name: 'Embedded Systems', icon: Book },
    { name: 'Signal Processing', icon: Wrench },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="prose prose-indigo max-w-none"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                I am a passionate Electronics and Communication Engineering student with a keen interest in digital systems
                and signal processing. My academic journey has equipped me with strong analytical skills and a deep
                understanding of electronic principles.
              </p>
              
              <p className="text-lg text-gray-600">
                Currently pursuing my degree, I focus on bridging the gap between theoretical knowledge and practical
                applications. I enjoy working on projects that challenge me to think creatively and solve complex problems.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Education</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900">B.Tech in Electronics & Communication</h3>
                <p className="text-gray-600">Siddaganga Institute of Technology</p>
                <p className="text-gray-500">2022 - 2026</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Core Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map(({ name, icon: Icon }) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center"
              >
                <Icon size={32} className="text-indigo-600 mb-2" />
                <span className="text-gray-900 font-medium">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}