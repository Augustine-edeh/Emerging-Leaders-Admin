"use client"; // if you're using the app directory (Next.js 13+)

import { motion } from "framer-motion";

const AdminComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Admin Panel
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-gray-600 text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        The admin features of the Emerging Leaders App are currently under
        development. 🚀
      </motion.p>

      <motion.div
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      />

      <p className="mt-6 text-gray-400 text-sm">
        Stay tuned for something amazing!
      </p>
    </div>
  );
};

export default AdminComingSoon;
