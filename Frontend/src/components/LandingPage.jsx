import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 overflow-hidden relative">
      {/* ================= HERO SECTION ================= */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 relative">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h2 className="text-5xl font-bold text-gray-800 leading-tight">
            Organize Your Thoughts <br />
            <span className="text-[#AD4B26]">Create Smart Notes</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            A powerful and simple notes application that helps you capture,
            organize and manage your ideas efficiently.
          </p>

          <div className="mt-8 flex gap-5">
            <button onClick={()=> navigate("/notes")} className="bg-black text-white px-6 py-3 rounded-lg hover:scale-105 transition">
              Get Started
            </button>
            <button className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* RIGHT VIDEO SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 md:mt-0"
        >
          <video
            className="w-87.5 md:w-125 h-62.5 md:h-75 rounded-2xl shadow-2xl object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>

      {/* ================= BACKGROUND SHAPES ================= */}

      {/* Top Right Circle */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-0 right-0 w-60 h-60 bg-orange-600 rounded-full opacity-30"
      ></motion.div>

      {/* Bottom Left Circle */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-orange-800 rounded-full opacity-20"
      ></motion.div>

      {/* Triangle */}
      <div className="absolute bottom-0 right-10 w-0 h-0 border-l-100 border-l-transparent border-r-100 border-r-transparent border-b-150 border-b-red-700 opacity-60"></div>

      {/* Decorative Square */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute top-10 left-10 w-40 h-40 bg-linear-to-r from-green-400 to-yellow-500 opacity-40"
      ></motion.div>
    </div>
  );
};

export default LandingPage;
