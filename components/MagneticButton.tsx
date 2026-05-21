"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { MouseEvent } from "react";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
};

export default function MagneticButton({
  href,
  children,
  variant = "primary",
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 12,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 12,
  });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "inline-flex items-center justify-center rounded border px-6 py-3 font-mono text-sm transition";

  const styles =
    variant === "primary"
      ? "border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10"
      : "border-transparent text-[#ccd6f6] hover:text-[#64ffda]";

  return (
    <motion.a
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${base} ${styles}`}
    >
      {children}
    </motion.a>
  );
}