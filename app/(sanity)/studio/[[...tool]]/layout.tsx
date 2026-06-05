import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniel Alswanger Portfolio",
  description: "Dan Alswanger's personal portfolio",
    icons: {
    icon: "/favicon.ico",
  },
};

function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default layout;
