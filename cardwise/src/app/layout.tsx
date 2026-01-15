import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "CardWise - Smart Credit Card Comparison | Malaysia & Singapore",
  description: "Compare credit cards from top banks in Malaysia and Singapore. Find the best cashback, miles, and rewards cards for your lifestyle.",
  keywords: "credit card comparison, Malaysia credit cards, Singapore credit cards, cashback, miles, rewards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="section-sm border-t" style={{ borderColor: 'var(--border)', background: 'var(--background-soft)' }}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* Brand */}
              <div className="md:col-span-2">
                <Link href="/" className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: 'var(--accent-gradient)' }}
                  >
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <span className="text-lg font-bold" style={{ color: 'var(--primary)' }}>
                    CardWise
                  </span>
                </Link>
                <p className="text-sm mb-6 max-w-sm" style={{ color: 'var(--foreground-muted)' }}>
                  Your trusted guide to finding the perfect credit card in Malaysia and Singapore.
                  Compare, analyze, and choose wisely.
                </p>
                <p className="text-xs" style={{ color: 'var(--foreground-soft)' }}>
                  © 2026 CardWise. All rights reserved.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide" style={{ color: 'var(--foreground-muted)' }}>
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {[
                    { href: '/cards', label: 'All Cards' },
                    { href: '/compare', label: 'Compare Cards' },
                    { href: '/cards?type=cashback', label: 'Cashback Cards' },
                    { href: '/cards?type=miles', label: 'Miles Cards' },
                  ].map(link => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors hover:opacity-70"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Countries */}
              <div>
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide" style={{ color: 'var(--foreground-muted)' }}>
                  Countries
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/cards?country=MY"
                      className="text-sm transition-colors hover:opacity-70"
                      style={{ color: 'var(--foreground)' }}
                    >
                      🇲🇾 Malaysia
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cards?country=SG"
                      className="text-sm transition-colors hover:opacity-70"
                      style={{ color: 'var(--foreground)' }}
                    >
                      🇸🇬 Singapore
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
