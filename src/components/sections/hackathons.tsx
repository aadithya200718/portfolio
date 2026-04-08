'use client'

import { motion } from 'framer-motion'

export function HackathonsSection() {
  return (
    <section id="hackathons" className="h-screen w-full snap-start relative flex items-center justify-center bg-black">
      <div className="max-w-6xl w-full mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            Hackathons
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[1, 2].map((i) => (
            <div
              key={i}
              className="group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 text-lg">🏆</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-200 mb-1">Hackathon Name</h3>
                  <p className="text-sm text-neutral-500 mb-2">Date • Location</p>
                  <p className="text-sm text-neutral-400">
                    Add your hackathon details here.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
