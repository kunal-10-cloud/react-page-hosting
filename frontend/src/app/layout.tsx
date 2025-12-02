import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "DeployHub - The Developers' Cloud",
  description: "Deploy your frontend and backend projects instantly with DeployHub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
