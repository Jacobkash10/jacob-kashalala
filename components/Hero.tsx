"use client";

import { useTranslations } from "next-intl";
import { ArrowDown, GiftIcon, LinkIcon, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 overflow-hidden px-6 py-24 lg:grid-cols-2">
      <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-[#64ffda]/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10">
        <p className="mb-5 font-mono text-sm tracking-widest text-[#64ffda]">
          {t("intro")}
        </p>

        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-7xl">
          {t("title")}
        </h1>

        <h2 className="mb-6 text-3xl font-bold leading-tight text-[#8892b0] md:text-5xl">
          {t("subtitle")}
        </h2>

        <p className="max-w-xl text-lg leading-relaxed text-[#8892b0]">
          {t("description")}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <MagneticButton href="#projects">
            {t("projectsButton")}
          </MagneticButton>

          <MagneticButton href="#contact" variant="ghost">
            {t("contactButton")}
          </MagneticButton>
        </div>

        <div className="mt-10 flex gap-5 text-[#8892b0]">
          <GiftIcon className="h-5 w-5 cursor-pointer hover:text-[#64ffda]" />
          <LinkIcon className="h-5 w-5 cursor-pointer hover:text-[#64ffda]" />
          <Mail className="h-5 w-5 cursor-pointer hover:text-[#64ffda]" />
        </div>
      </div>

      <div className="relative z-10 rounded-2xl border border-[#233554] bg-[#020c1b]/90 p-5 font-mono shadow-2xl">
        <div className="mb-4 flex items-center justify-between border-b border-[#233554] pb-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <span className="text-xs text-[#8892b0]">portfolio.sh</span>
        </div>

        <div className="space-y-4 text-sm">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center">
              <span className="text-green-400">
                jacob@portfolio
              </span>

              <span className="text-white">:</span>

              <span className="text-blue-400">
                ~/about
              </span>

              <span className="ml-1 text-white">$</span>

              <TypeAnimation
                sequence={[
                  " whoami",
                  2500,
                  " npm run dev",
                  2500,
                  " git status",
                  2500,
                ]}
                wrapper="span"
                speed={65}
                repeat={Infinity}
                cursor={true}
                className="ml-2 text-white"
              />
            </div>

            <TypeAnimation
              sequence={[
                t("terminalRole"),
                2000,
                "Next.js Developer",
                2000,
                "React / TypeScript Developer",
                2000,
                "Full-Stack Web Developer",
                2000,
              ]}
              wrapper="p"
              speed={45}
              repeat={Infinity}
              cursor={false}
              className="text-[#ccd6f6]"
            />
          </div>

          <p>
            <span className="text-green-400">jacob@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~/skills</span>
            <span className="text-white"> $ cat stack.txt</span>
          </p>

          <ul className="space-y-1 text-[#8892b0]">
            <li>→ Next.js</li>
            <li>→ React</li>
            <li>→ TypeScript</li>
            <li>→ Tailwind CSS</li>
            <li>→ Prisma / PostgreSQL</li>
          </ul>

          <p>
            <span className="text-green-400">jacob@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~/projects</span>
            <span className="text-white"> $ ls</span>
          </p>

          <p className="text-[#64ffda]">
            PrimePrint MPS-System Finance-App E-commerce
          </p>

          <div className="flex items-center gap-2 pt-3 text-[#64ffda]">
            <ArrowDown className="h-4 w-4 animate-bounce" />
            <span className="text-xs">scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}