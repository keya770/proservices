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

const siteTitle = "HCT Services | AL HASEL Consultancy Services LLC";
const siteDescription =
  "Providing 2-year freelance visa at an investment price with fast, reliable PRO and business services support across Dubai.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://adarshdessai4-spec.github.io/pro_uae_website"),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://adarshdessai4-spec.github.io/pro_uae_website",
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
