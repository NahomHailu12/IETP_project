"use client";

import Header from "@/components/layouts/header";
import { motion } from "framer-motion";

const ImageCard = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/homepagebg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex flex-col">
        <Header index={0} />

        <div className="flex flex-1 flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-5xl text-white text-5xl md:text-7xl font-extrabold leading-tight mb-8"
          >
            HEAVY MACHINERY SOLUTIONS FOR YOUR INDUSTRIAL NEEDS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-3xl text-gray-200 text-lg md:text-xl leading-loose mb-10"
          >
            Providing durable equipment for construction, mining, and
            agriculture. Powered by cutting-edge technology to perform in the
            toughest environments.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-amber-500 text-white text-lg md:text-xl px-8 py-4 rounded-full font-bold hover:bg-white hover:text-amber-500 transition"
          >
            Explore Our Products
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ImageCard;
