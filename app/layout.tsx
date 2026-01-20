import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
export const metadata: Metadata = {
  title: "FarmEquip",
  description: "Your Trusted Partner for Quality Farm Machinery and Equipment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
