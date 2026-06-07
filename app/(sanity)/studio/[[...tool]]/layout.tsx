import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniel Alswanger",
  description: "Dan Alswanger's personal portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Alswanger",
    url: "https://danielalswanger.com",
    image: "https://danielalswanger.com/profile.jpg",
    alumniOf: "University of Connecticut",
    sameAs: [
      "https://www.linkedin.com/in/DanielAlswanger",
      "https://github.com/YOUR-GITHUB",
    ],
  };git

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}