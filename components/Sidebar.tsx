"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  BriefcaseBusiness,
  FolderGit2,
  GiftIcon,
  Home,
  Languages,
  LinkIcon,
  Mail,
  UserRound,
  Menu,
  X
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";

export default function Sidebar() {
  const t = useTranslations("sidebar");
  const locale = useLocale();
  const nextLocale = locale === "fr" ? "en" : "fr";

  const [activeSection, setActiveSection] = useState("about");

 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      id: "about",
      number: "01",
      label: t("about"),
      href: "#about",
      icon: UserRound,
    },
    {
      id: "experience",
      number: "02",
      label: t("experience"),
      href: "#experience",
      icon: BriefcaseBusiness,
    },
    {
      id: "projects",
      number: "03",
      label: t("projects"),
      href: "#projects",
      icon: FolderGit2,
    },
    {
      id: "contact",
      number: "04",
      label: t("contact"),
      href: "#contact",
      icon: Mail,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = "about";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-72 border-r border-[#233554] bg-[#0a192f]/95 px-6 py-8 backdrop-blur-md md:flex md:flex-col">
        <Link
          href={`/${locale}`}
          className="group flex items-center gap-3 font-mono text-xl font-bold text-[#64ffda]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#64ffda]/40 bg-[#64ffda]/10 transition group-hover:rotate-6">
            <Home className="h-5 w-5" />
          </div>

          <span>Jacob Kashalala</span>
        </Link>

        {/* NAVIGATION */}
        <nav className="mt-10 flex flex-col gap-3 font-mono text-sm">
          {navItems.map((item) => {
            const Icon = item.icon;

            const isActive = activeSection === item.id;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={`group flex items-center gap-3 rounded-xl px-3 py-3 transition duration-300 ${
                  isActive
                    ? "bg-[#112240] text-[#64ffda]"
                    : "text-[#ccd6f6] hover:bg-[#112240] hover:text-[#64ffda]"
                }`}
              >
                <span
                  className={`text-xs ${
                    isActive ? "text-[#64ffda]" : "text-[#64ffda]"
                  }`}
                >
                  {item.number}.
                </span>

                <Icon
                  className={`h-4 w-4 transition ${
                    isActive
                      ? "text-[#64ffda]"
                      : "text-[#8892b0] group-hover:text-[#64ffda]"
                  }`}
                />

                <span>{item.label}</span>

                {isActive && (
                  <div className="ml-auto h-2 w-2 rounded-full bg-[#64ffda]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* FOOTER */}
        <div className="mt-auto space-y-4">
          <Link
            href={`/${nextLocale}`}
            className="flex items-center justify-center gap-2 rounded-xl border border-[#64ffda] px-4 py-3 font-mono text-sm text-[#64ffda] transition hover:-translate-y-1 hover:bg-[#64ffda]/10"
          >
            <Languages className="h-4 w-4" />

            {locale === "fr"
              ? "Switch to EN"
              : "Passer en FR"}
          </Link>

          <div className="rounded-xl border border-[#233554] bg-[#020c1b] p-4 font-mono text-xs">
            <p>
              <span className="text-green-400">
                jacob@portfolio
              </span>

              <span className="text-white">:</span>

              <span className="text-blue-400">
                ~
              </span>

              <span className="text-white">
                {" "} $ status
              </span>
            </p>

            <p className="mt-2 text-[#64ffda]">
              Available for projects
            </p>
          </div>
        </div>
      </aside>

      {/* MOBILE TOPBAR */}
      <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-[#233554] bg-[#0a192f]/95 px-5 py-4 backdrop-blur-md md:hidden">
        <Link
          href={`/${locale}`}
          className="font-mono text-lg font-bold text-[#64ffda]"
        >
          Jacob Kashalala
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-[#64ffda]"
        >
          <Menu className="h-6 w-6" />
        </button>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="ml-auto flex h-full w-72 flex-col border-l border-[#233554] bg-[#0a192f] p-6"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-mono text-lg font-bold text-[#64ffda]">
                  Menu
                </span>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#64ffda]"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-4 font-mono text-sm">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 rounded-xl px-3 py-3 transition ${
                        isActive
                          ? "bg-[#112240] text-[#64ffda]"
                          : "text-[#ccd6f6] hover:bg-[#112240] hover:text-[#64ffda]"
                      }`}
                    >
                      <span className="text-xs text-[#64ffda]">{item.number}.</span>
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </nav>

              <Link
                href={`/${nextLocale}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-auto flex items-center justify-center gap-2 rounded-xl border border-[#64ffda] px-4 py-3 font-mono text-sm text-[#64ffda]"
              >
                <Languages className="h-4 w-4" />
                {locale === "fr" ? "EN" : "FR"}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}