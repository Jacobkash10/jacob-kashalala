"use client";

import { useTranslations } from "next-intl";
import SectionWrapper from "@/components/SectionWrapper";

export default function Experience() {
  const t = useTranslations("experience");

  const items = [
    {
      company: "MHM Digital",
      role: t("item1.role"),
      period: "2023 - Present",
      tasks: [t("item1.task1"), t("item1.task2"), t("item1.task3")],
    },
    {
      company: "PrimePrint",
      role: t("item2.role"),
      period: "2025 - Present",
      tasks: [t("item2.task1"), t("item2.task2"), t("item2.task3")],
    },
  ];

  return (
    <SectionWrapper id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <p className="mb-3 font-mono text-sm text-[#64ffda]">
        02. {t("label")}
      </p>

      <h2 className="mb-10 text-3xl font-bold text-white">{t("title")}</h2>

      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.company}
            className="rounded-2xl border border-[#233554] bg-[#112240]/50 p-6 transition hover:-translate-y-1 hover:bg-[#112240]/80"
          >
            <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-bold text-white">{item.role}</h3>
                <p className="font-mono text-sm text-[#64ffda]">
                  {item.company}
                </p>
              </div>

              <p className="font-mono text-sm text-[#8892b0]">{item.period}</p>
            </div>

            <ul className="space-y-3 text-[#8892b0]">
              {item.tasks.map((task) => (
                <li key={task} className="flex gap-3">
                  <span className="text-[#64ffda]">▹</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-[#233554] bg-[#020c1b] p-4 font-mono text-xs">
              <p>
                <span className="text-green-400">jacob@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~/experience</span>
                <span className="text-white"> $ cat career.log</span>
              </p>

              <div className="mt-3 space-y-2 text-[#8892b0]">
                <p>✔ {item.company}</p>
                <p>✔ {item.role}</p>
                <p>✔ {item.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}