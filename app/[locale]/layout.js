import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import { notFound } from "next/navigation";



export const metadata = {
  title: "Morocco Falcon Club - Fauconnerie au Maroc ",
  description: "Le Morocco Falcon Club est une communauté dédiée aux passionnés de la fauconnerie au Maroc. Ancré dans une tradition ancestrale, notre club rassemble amateurs et experts pour préserver, promouvoir et célébrer l’art noble de l’élevage et du dressage des faucons.",
  keywords: ["Morocco Falcon Club, fauconnerie au Maroc, dressage de faucons, élevage de faucons, club de fauconnerie, faucons de chasse, tradition de la fauconnerie, passion pour les faucons, rapaces"],
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Morocco Falcon Club - Fauconnerie au Maroc",
    description: "Le Morocco Falcon Club est une communauté dédiée aux passionnés de la fauconnerie au Maroc. Ancré dans une tradition ancestrale, notre club rassemble amateurs et experts pour préserver, promouvoir et célébrer l’art noble de l’élevage et du dressage des faucons.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    robots: {
      index: true,
      follow: true,
    },
    siteName: "Morocco Falcon Club",
    images: [
      {
        url: `/opengraph-image.jpg`,
        secureUrl: `/opengraph-image.jpg`,
        width: 1200,
        height: 675,
        alt: "Morocco Falcon Club",
      }
    ],
    type: "website",

  },
};


export default async  function RootLayout({ children , params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={` antialiased cursor-custom`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
