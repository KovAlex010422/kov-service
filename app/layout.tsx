import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KOV Service | Електрика, сантехніка, опалення та автополив",

  description:
    "Професійні послуги електрика, сантехніка, опалення, вентиляції, кондиціонування, автополиву та догляду за територією. Гайсин та область.",

  keywords: [
    "електрик Гайсин",
    "сантехнік Гайсин",
    "опалення Гайсин",
    "автополив Гайсин",
    "кондиціонери Гайсин",
    "вентиляція Гайсин",
    "догляд за садом",
    "обрізка дерев",
    "KOV Service",
  ],

  openGraph: {
    title: "KOV Service",

    description:
      "Комплексні послуги для дому та подвір'я.",

    type: "website",

    locale: "uk_UA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
