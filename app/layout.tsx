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
    "Електрика, сантехніка, опалення, автополив та ландшафтні роботи у м. Гайсин та Вінницькій області.",

  keywords: [
    "електрик Гайсин",
    "сантехнік Гайсин",
    "опалення Гайсин",
    "автополив Гайсин",
    "кондиціонери Гайсин",
    "вентиляція Гайсин",
    "догляд за садом Гайсин",
    "обрізка дерев Гайсин",
    "підстригання газону Гайсин",
    "вичесування газону Гайсин",
    "підживлення газону Гайсин",
    "підстригання живоплоту Гайсин",
    "ладшафтні роботи Гайсин",
    "ландшафтний дизайн Гайсин",
    "инженерні мережі Гайсин",
    "майстер на годину Гайсин",
    "майстер на дім Гайсин",
    "KOV Service",
    
    "електрик Ладижин",
    "сантехнік Ладижин",
    "опалення Ладижин",
    "автополив Ладижин",
    "кондиціонери Ладижин",
    "вентиляція Ладижин",
    "догляд за садом Ладижин",
    "обрізка дерев Ладижин",
    "підстригання газону Ладижин",
    "вичесування газону Ладижин",
    "підживлення газону Ладижин",
    "підстригання живоплоту Ладижин",
    "ладшафтні роботи Ладижин",
    "ландшафтний дизайн Ладижин",
    "инженерні мережі Ладижин",
    "майстер на годину Ладижин",
    "майстер на дім Ладижин",

    "електрик Умань",
    "сантехнік Умань",
    "опалення Умань",
    "автополив Умань",
    "кондиціонери Умань",
    "вентиляція Умань",
    "догляд за садом Умань",
    "обрізка дерев Умань",
    "підстригання газону Умань",
    "вичесування газону Умань",
    "підживлення газону Умань",
    "підстригання живоплоту Умань",
    "ладшафтні роботи Умань",
    "ландшафтний дизайн Умань",
    "инженерні мережі Умань",
    "майстер на годину Умань",
    "майстер на дім Умань",

    "електрик Немирів",
    "сантехнік Немирів",
    "опалення Немирів",
    "автополив Немирів",
    "кондиціонери Немирів",
    "вентиляція Немирів",
    "догляд за садом Немирів",
    "обрізка дерев Немирів",
    "підстригання газону Немирів",
    "вичесування газону Немирів",
    "підживлення газону Немирів",
    "підстригання живоплоту Немирів",
    "ладшафтні роботи Немирів",
    "ландшафтний дизайн Немирів",
    "инженерні мережі Немирів",
    "майстер на годину Немирів",
    "майстер на дім Немирів",

    "електрик Вінниця",
    "сантехнік Вінниця",
    "опалення Вінниця",
    "автополив Вінниця",
    "кондиціонери Вінниця",
    "вентиляція Вінниця",
    "догляд за садом Вінниця",
    "обрізка дерев Вінниця",
    "підстригання газону Вінниця",
    "вичесування газону Вінниця",
    "підживлення газону Вінниця",
    "підстригання живоплоту Вінниця",
    "ладшафтні роботи Вінниця",
    "ландшафтний дизайн Вінниця",
    "инженерні мережі Вінниця",
    "майстер на годину Вінниця",
    "майстер на дім Вінниця",
  ],

  openGraph: {
    title: "KOV Service | Дім • Сад • Сервіс у Гайсині",
    description:
      "Електрика, сантехніка, опалення, автополив та ландшафтні роботи у м. Гайсин та Вінницькій області.",
    url: "https://kov-service.vn.ua",
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
      "Електрика, сантехніка, опалення, автополив та ландшафтні роботи у м. Гайсин та Вінницькій області.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "KOV Service",
    "image": "https://kov-service.vn.ua/og-image.jpg",
    "@id": "https://kov-service.vn.ua/#business",
    "url": "https://kov-service.vn.ua",
    "telephone": "+380937456123",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Гайсин",
      "addressRegion": "Вінницька область",
      "addressCountry": "UA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.8105,
      "longitude": 29.3878
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Гайсин" },
      { "@type": "AdministrativeArea", "name": "Ладижин" },
      { "@type": "AdministrativeArea", "name": "Вінницька область" }
    ]
  };

  return (
    <html
      lang="uk"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}