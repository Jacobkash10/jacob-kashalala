"use client";

import { motion } from "framer-motion";

export default function GlowCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="group relative overflow-hidden rounded-2xl border border-[#233554] bg-[#112240]/50"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-[#64ffda]/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}