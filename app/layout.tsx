import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const siteTitle = "PRO Desk UAE | Smart PRO, Visa & Business Setup Services";
const siteDescription =
  "Premium UAE PRO services, visa processing, fine waiver assistance, and business setup solutions in Dubai with fast turnaround and dedicated support.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://pro-desk-uae.example.com"),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://pro-desk-uae.example.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-slate-50 text-slate-900`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
