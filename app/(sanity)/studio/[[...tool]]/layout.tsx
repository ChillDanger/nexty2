import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniel Alswanger Portfolio",
  description: "Daniel Alswanger Fairfield CT Portfolio",
};

function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default layout;
