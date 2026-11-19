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

export const metadata: Metadata = {
  metadataBase: new URL("https://kov-service.vn.ua"),
  
  title: {
    default: "KOV Service | Електрика, сантехніка, опалення, автополив та ландшафтні роботи у Гайсині",
    template: "%s | KOV Service",
  },

  description:
    "Електрика, сантехніка, опалення, автополив та ландшафтні роботи у Гайсині та область.",

  keywords: [
    "електрик Гайсин",
    "сантехнік Гайсин",
    "опалення Гайсин",
    "автополив Гайсин",
    "кондиціонери Гайсин",
    "вентиляція Гайсин",
    "догляд за садом",
    "обрізка дерев",
    "підстригання газону",
    "вичесування газону",
    "підживлення газону",
    "підстригання живоплоту",
    "ладшафтні роботи Гайсин",
    "ландшафтний дизайн Гайсин",
    "инженерні мережі Гайсин",
    "майстер на годину Гайсин",
    "майстер на дім Гайсин",
    "KOV Service",
  ],

  openGraph: {
    title: "KOV Service | Дім • Сад • Сервіс у Гайсині",
    description:
      "Електрика, сантехніка, опалення, автополив та ландшафтні роботи у Гайсині та область.",
    url: "https://kov-service.vercel.app",
    siteName: "KOV Service",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KOV Service — Електрика, сантехніка, опалення та ландшафтні роботи",
      },
    ],
    type: "website",
    locale: "uk_UA",
  },

  twitter: {
    card: "summary_large_image",
    title: "KOV Service | Дім • Сад • Сервіс у Гайсині",
    description:
      "Електрика, сантехніка, опалення, автополив та ландшафтні роботи у Гайсині та область.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="uk"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}