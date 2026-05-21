"use client";

import { useTranslations } from "next-intl";
import { Mail, GiftIcon, LinkIcon, Send } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import SectionWrapper from "@/components/SectionWrapper";
import MagneticButton from "@/components/MagneticButton";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <SectionWrapper
      id="contact"
      className="mx-auto min-h-screen max-w-6xl px-6 py-24"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-sm text-[#64ffda]">
            04. {t("label")}
          </p>

          <h2 className="mb-6 text-4xl font-bold text-white">{t("title")}</h2>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-[#8892b0]">
            {t("description")}
          </p>

          <MagneticButton href="mailto:jacobtshilumba15@gmail.com">
            {t("button")}
          </MagneticButton>

          <div className="mt-10 flex gap-6 text-[#8892b0]">
            <GiftIcon className="h-5 w-5 cursor-pointer hover:text-[#64ffda]" />
            <LinkIcon className="h-5 w-5 cursor-pointer hover:text-[#64ffda]" />
            <Mail className="h-5 w-5 cursor-pointer hover:text-[#64ffda]" />
          </div>
        </div>

        <div className="rounded-2xl border border-[#233554] bg-[#020c1b]/90 p-5 font-mono shadow-2xl">
          <div className="mb-4 flex items-center justify-between border-b border-[#233554] pb-3">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <span className="text-xs text-[#8892b0]">contact.sh</span>
          </div>

          <div className="space-y-4 text-sm">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center">
                <span className="text-green-400">jacob@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~/contact</span>
                <span className="ml-1 text-white">$</span>

                <TypeAnimation
                  sequence={[
                    " whoami",
                    2200,
                    " cat availability.txt",
                    2200,
                    " ping jacobtshilumba15@gmail.com",
                    2200,
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
                  "Jacob Kashalala",
                  1600,
                  "Full-Stack Web Developer",
                  1600,
                  "Available for freelance projects",
                  1600,
                  "Connection established...",
                  1600,
                ]}
                wrapper="p"
                speed={45}
                repeat={Infinity}
                cursor={false}
                className="text-[#64ffda]"
              />
            </div>

            <div className="rounded-xl border border-[#233554] bg-[#0a192f]/60 p-4">
              <p className="mb-3 text-[#ccd6f6]">availability.txt</p>

              <ul className="space-y-1 text-[#8892b0]">
                <li>→ Freelance Projects</li>
                <li>→ Full-Stack Development</li>
                <li>→ UI/UX Interfaces</li>
                <li>→ Business Platforms</li>
                <li>→ Remote Collaboration</li>
              </ul>
            </div>

            <div className="rounded-xl border border-[#233554] bg-[#0a192f]/60 p-4">
              <p>
                <span className="text-green-400">jacob@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~/contact</span>
                <span className="text-white">
                  {" "}
                  $ send --email jacobtshilumba15@gmail.com
                </span>
              </p>

              <p className="mt-3 text-[#64ffda]">
                Message channel ready ✓
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center font-mono text-xs">
        <div className="mx-auto mb-4 max-w-md rounded-xl border border-[#233554] bg-[#020c1b] p-4 text-left">
          <p>
            <span className="text-green-400">jacob@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-white"> $ exit</span>
          </p>

          <p className="mt-2 text-[#64ffda]">
            Session closed successfully.
          </p>
        </div>

        <p className="text-[#8892b0]">
          © 2026 Jacob Kashalala. {t("footer")}
        </p>
      </footer>
    </SectionWrapper>
  );
}