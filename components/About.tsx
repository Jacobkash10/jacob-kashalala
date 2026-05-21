"use client";

import { useTranslations } from "next-intl";
import SectionWrapper from "@/components/SectionWrapper";

export default function About() {
  const t = useTranslations("about");

  return (
    <SectionWrapper id="about" className="mx-auto max-w-5xl px-6 py-24">
      <p className="mb-3 font-mono text-sm text-[#64ffda]">
        01. {t("label")}
      </p>

      <h2 className="mb-8 text-3xl font-bold text-white">{t("title")}</h2>

      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-[#8892b0]">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </div>

        <div className="rounded-2xl border border-[#233554] bg-[#020c1b]/90 p-6 font-mono text-sm">
          <p className="mb-4 text-[#64ffda]">
            jacob@portfolio:~/skills$ tree
          </p>

          <div className="space-y-3 text-[#8892b0]">
            <div>
              <p className="text-white">Frontend</p>
              <div className="ml-4 mt-2 space-y-1">
                <p>├── Next.js</p>
                <p>├── React</p>
                <p>├── TypeScript</p>
                <p>└── Tailwind CSS</p>
              </div>
            </div>

            <div>
              <p className="text-white">Backend</p>
              <div className="ml-4 mt-2 space-y-1">
                <p>├── Prisma</p>
                <p>├── PostgreSQL</p>
                <p>└── Node.js</p>
              </div>
            </div>

            <div>
              <p className="text-white">Tools</p>
              <div className="ml-4 mt-2 space-y-1">
                <p>├── Git</p>
                <p>├── GitHub</p>
                <p>└── Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}