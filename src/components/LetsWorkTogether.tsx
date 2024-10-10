"use client";

import { motion } from "framer-motion"
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function LetsWorkTogether() {
  const steps = [
    {
      number: 1,
      title: "Schedule a Call",
      description: "Let's discuss your project and how I can help.",
    },
    {
      number: 2,
      title: "Receive a Proposal",
      description: "I'll provide a detailed plan and timeline for your project.",
    },
    {
      number: 3,
      title: "Start the Project",
      description: "Once approved, we'll begin the development process.",
    },
  ]

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-900 text-white">
      <motion.div
        className="lg:w-1/2 bg-pink-500 relative overflow-hidden"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {[...Array(10)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${i * 10},100 Q${50 + Math.random() * 20},${
                50 + Math.random() * 50
              } ${100 - i * 10},0`}
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.2 }}
            />
          ))}
        </svg>
      </motion.div>
      <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
        <motion.h2
          className={`text-4xl lg:text-5xl font-bold mb-12 ${ibmPlexMono.className}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Work Together
        </motion.h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-2xl font-bold bg-gray-800 text-white py-2 px-4 mr-4">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}