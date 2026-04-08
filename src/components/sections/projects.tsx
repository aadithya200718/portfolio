'use client'

import { motion } from 'framer-motion'

export function ProjectsSection() {
  return (
    <section id="projects" className="h-screen w-full snap-start relative flex items-center justify-center bg-black">
      <div className="max-w-6xl w-full mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
            >
              <div className="h-40 bg-gradient-to-br from-white/[0.05] to-transparent rounded-xl mb-4 flex items-center justify-center">
                <span className="text-neutral-600 text-sm">Project {i}</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-2">Project Title</h3>
              <p className="text-sm text-neutral-500">
                Add your project description here.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-neutral-400">
                  Tag
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
