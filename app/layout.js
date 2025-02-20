import "./globals.css";



export const metadata = {
  title: "Morocco Falcon Club",
  description: "Le Morocco Falcon Club est une communauté dédiée aux passionnés de la fauconnerie au Maroc. Ancré dans une tradition ancestrale, notre club rassemble amateurs et experts pour préserver, promouvoir et célébrer l’art noble de l’élevage et du dressage des faucons.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased cursor-custom`}
      >
        {children}
      </body>
    </html>
  );
}
