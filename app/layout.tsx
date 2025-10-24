import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Arhan Ansari - Full Stack Developer & 3D Artist",
  description:
    "Innovative Full Stack Developer specializing in 3D web experiences, modern web applications, and creative digital solutions. Crafting the future of web development.",
  keywords:
    "Full Stack Developer, React, Three.js, 3D Web Development, JavaScript, Portfolio, Web Developer",
  authors: [{ name: "Arhan Ansari" }],
  openGraph: {
    title: "Arhan Ansari - Full Stack Developer & 3D Artist",
    description:
      "Innovative Full Stack Developer specializing in 3D web experiences, modern web applications, and creative digital solutions.",
    url: "https://arhanansari.vercel.app",
    siteName: "Arhan Ansari Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arhan Ansari - Full Stack Developer & 3D Artist",
    description:
      "Innovative Full Stack Developer specializing in 3D web experiences, modern web applications, and creative digital solutions.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Preload 3D assets for better performance */}
        <link
          rel="preload"
          href="/models/646d9dcdc8a5f5bddbfac913.glb"
          as="fetch"
          crossOrigin="anonymous"
        />
        {/* Calendly badge widget */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <style>{`
          .calendly-badge-widget {
            right: auto !important;
            left: 20px !important;
          }
        `}</style>
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
        <script src="https://www.google.com/recaptcha/api.js?render=6Lfy8sIqAAAAAFVnXazuuDipaoU7pYkCuq0tCdqg"></script>
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.onload = function() { 
              if (window.Calendly) {
                Calendly.initBadgeWidget({ 
                  url: 'https://calendly.com/arhanansari2009', 
                  text: 'Schedule time with me', 
                  color: '#0069ff', 
                  textColor: '#ffffff', 
                  branding: true 
                }); 
              }
            }`,
          }}
        />
      </body>
    </html>
  );
}
