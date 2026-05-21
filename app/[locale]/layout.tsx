import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Sidebar from "@/components/Sidebar";
import CustomCursor from "@/components/CustomCursor";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <CustomCursor />
      <Sidebar />

      <main className="min-h-screen bg-[#0a192f] pt-16 text-[#ccd6f6] md:pl-72 md:pt-0">
        {children}
      </main>
    </NextIntlClientProvider>
  );
}