import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "خشبة | معرض الأثاث الخشبي الفاخر",
  description:
    "خشبة - براند متخصص في تصنيع الأثاث الخشبي الفاخر: مكتبات، كونسولات، مكاتب، أبواب، رفوف معلقة، ترابيزات مودرن، فواصل، وحدات تلفزيون، وتكسية جدران. نصنع لك قطعة فريدة تدوم.",
  keywords: [
    "خشبة",
    "أثاث خشبي",
    "مكتبات",
    "كونسولات",
    "مكاتب",
    "أبواب",
    "رفوف معلقة",
    "ترابيزات مودرن",
    "فواصل",
    "وحدات تلفزيون",
    "تكسية جدران",
    "أثاث مصر",
  ],
  authors: [{ name: "خشبة" }],
  icons: {
    icon: "/khashaba-logo.png",
  },
  openGraph: {
    title: "خشبة | معرض الأثاث الخشبي الفاخر",
    description:
      "نصنع لك الأثاث الخشبي الفاخر بتصميمات مودرن وإتقان يدوي. تصفح معرضنا واختر قطعتك المميزة.",
    siteName: "خشبة",
    type: "website",
    locale: "ar_EG",
  },
  twitter: {
    card: "summary_large_image",
    title: "خشبة | معرض الأثاث الخشبي الفاخر",
    description: "أثاث خشبي فاخر بتصميمات مودرن وإتقان يدوي.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${cairo.variable} ${tajawal.variable} antialiased bg-background text-foreground font-cairo`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
