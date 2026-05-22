"use client";

import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import GlowCard from "@/components/GlowCard";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Projects() {
  const t = useTranslations("projects");

  const projects = [
    {
      title: "PrimePrint Store",
      description: t("item1.description"),
      image: "/projects/primeprintstore.jpg",
      tech: ["Next js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Better Auth", "Stripe", "Prisma"],
      link: "https://primeprint-store.vercel.app/",
    },
    {
      title: "MHM Digital",
      description: t("item2.description"),
      image: "/projects/mhm.jpg",
      tech: ["Next js", "Prisma", "PostgreSQL", "Tailwind CSS", "NextAuth", "Stripe"],
      link: "https://mhmdigital.us/",
    },
    {
      title: "PrimePrint Net",
      description: t("item3.description"),
      image: "/projects/ppnet.jpg",
      tech: ["JavaScript", "Html", "CSS"],
      link: "https://prime-print.net/",
    },
    {
      title: "InvestX",
      description: t("item4.description"),
      image: "/projects/investx.jpg",
      tech: ["Next js", "Prisma", "PostgreSQL", "Tailwind CSS", "Better Auth", "Stripe", "Recharts",],
      link: "https://investx-trade.vercel.app/",
    },
  ];

  return (
    <SectionWrapper id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-3 font-mono text-sm text-[#64ffda]">
        03. {t("label")}
      </p>

      <h2 className="mb-10 text-3xl font-bold text-white">{t("title")}</h2>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <GlowCard key={project.title}>
          <div className="p-6">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex gap-4">
                <FaGithub className="h-5 w-5 cursor-pointer text-[#8892b0] hover:text-[#64ffda]" />
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="">
                  <ExternalLink className="h-5 w-5 cursor-pointer text-[#8892b0] hover:text-[#64ffda]" />
                </Link>
              </div>
            </div>

            <div className="mb-6 overflow-hidden rounded-xl border border-[#233554] bg-[#0a192f]">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={500}
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-[#64ffda]">
              {project.title}
            </h3>

            <p className="mb-6 leading-relaxed text-[#8892b0]">
              {project.description}
            </p>

            <div className="mb-6 rounded-xl border border-[#233554] bg-[#020c1b] p-4 font-mono text-xs">
              <p>
                <span className="text-green-400">jacob@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~/projects</span>
                <span className="text-white"> $ npm run dev</span>
              </p>

              <div className="mt-3 space-y-2 text-[#8892b0]">
                <p>✔ Build successful</p>
                <p>✔ Deployment ready</p>
                <p>✔ Running on localhost:3000</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-[#0a192f] px-3 py-1 font-mono text-xs text-[#64ffda]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          </GlowCard>
        ))}
      </div>
    </SectionWrapper>
  );
}