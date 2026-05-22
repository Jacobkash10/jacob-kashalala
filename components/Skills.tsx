"use client";

import { useTranslations } from "next-intl";
import {
  Code2,
  Database,
  Sigma,
  GiftIcon,
  GitBranch,
  Layers,
  Server,
  Terminal,
  Wrench,
} from "lucide-react";

import { FaLaptopCode } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiPrisma } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";
import { LiaCcStripe } from "react-icons/lia";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

export default function Skills() {
  const t = useTranslations("skills");

  const groups = [
    {
      title: t("langages"),
      icon: FaLaptopCode,
      skills: ["JavaScript", "Php", "Kotlin"],
    },
    {
      title: t("frontend"),
      icon: Code2,
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    },
    {
      title: t("backend"),
      icon: Server,
      skills: ["Node js", "Prisma", "PostgreSQL", "REST API", "GraphQL", "MySQL", "Firebase", "Express js", "Laravel"],
    },
    {
      title: t("tools"),
      icon: Wrench,
      skills: ["Git", "GitHub", "Figma", "Vercel", "Neon", "Stripe"],
    },
  ];

  const icons = [
    { name: "Next js", icon: TbBrandNextjs },
    { name: "React", icon: FaReact },
    { name: "TypeScript", icon: TbBrandTypescript },
    { name: "Prisma", icon: SiPrisma },
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: FaGithub },
    { name: "Figma", icon: FaFigma },
    { name: "Vercel", icon: RiVercelLine },
    { name: "Stripe", icon: LiaCcStripe },
  ];

  return (
    <SectionWrapper id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-3 font-mono text-sm text-[#64ffda]">
        02. {t("label")}
      </p>

      <h2 className="mb-10 text-3xl font-bold text-white">{t("title")}</h2>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="grid gap-5">
          {groups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[#233554] bg-[#112240]/50 p-6 hover:border-[#64ffda]/40"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl bg-[#64ffda]/10 p-3 text-[#64ffda]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-[#0a192f] px-3 py-2 font-mono text-xs text-[#ccd6f6]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-[#233554] bg-[#020c1b]/90 p-6 font-mono shadow-2xl">
          <div className="mb-5 flex items-center justify-between border-b border-[#233554] pb-3">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <span className="text-xs text-[#8892b0]">skills.sh</span>
          </div>

          <p className="mb-5 text-sm">
            <span className="text-green-400">jacob@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~/skills</span>
            <span className="text-white"> $ tree stack</span>
          </p>

          <div className="mb-8 space-y-3 text-sm text-[#8892b0]">
            <p className="text-white">stack</p>
            <p>├── frontend</p>
            <p className="ml-6">│ ├── Next js</p>
            <p className="ml-6">│ ├── React</p>
            <p className="ml-6">│ └── Tailwind CSS</p>
            <p>├── backend</p>
            <p className="ml-6">│ ├── Node js</p>
            <p className="ml-6">│ ├── Prisma</p>
            <p className="ml-6">│ └── PostgreSQL</p>
            <p>└── tools</p>
            <p className="ml-6">  ├── GitHub</p>
            <p className="ml-6">  ├── Figma</p>
            <p className="ml-6">  └── Vercel</p>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {icons.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group flex flex-col items-center gap-2 rounded-xl border border-[#233554] bg-[#0a192f]/70 p-3 text-center hover:border-[#64ffda]/50"
                >
                  <Icon className="h-6 w-6 text-[#64ffda] transition group-hover:scale-110" />
                  <span className="text-[10px] text-[#8892b0]">
                    {item.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}