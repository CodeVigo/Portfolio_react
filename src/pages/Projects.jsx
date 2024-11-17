import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Automatic Meter Reading (AMR) System',
      description: 'Developed an automated system for reading utility meters using computer vision and IoT technologies, improving efficiency and reducing manual intervention in meter reading processes.',
      image: 'https://images.unsplash.com/photo-1579547944212-c4f4961a8dd8?auto=format&fit=crop&w=800&q=80',
      tags: ['IoT', 'Computer Vision', 'Automation'],
      github: 'https://github.com/CodeVigo',
    },
    {
      title: 'Smart Home Automation System',
      description: 'Developed an IoT-based home automation system using Arduino and ESP8266, enabling remote control of household appliances through a mobile app.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
      tags: ['Arduino', 'IoT', 'Mobile App'],
      github: 'https://github.com/CodeVigo',
    },
    {
      title: 'Digital Signal Processing Library',
      description: 'Created a comprehensive DSP library implementing various filters and transforms, optimized for embedded systems.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      tags: ['C++', 'DSP', 'Embedded'],
      github: 'https://github.com/CodeVigo',
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 mb-8"
        >
          Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Github size={20} className="mr-1" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}