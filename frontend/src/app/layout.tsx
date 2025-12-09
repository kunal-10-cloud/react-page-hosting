import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "DeployHub - The Developers' Cloud",
  description: "Deploy your frontend and backend projects instantly with DeployHub",
};

import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
