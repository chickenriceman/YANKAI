'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/cards', label: 'All Cards' },
        { href: '/compare', label: 'Compare' },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                {/* Logo */}
                <Link href="/" className="nav-logo">
                    CardWise
                </Link>

                {/* Navigation Links */}
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Country Toggle */}
                <div className="flex items-center gap-2">
                    <select className="select" style={{ padding: '8px 32px 8px 12px', fontSize: '13px' }}>
                        <option value="all">🌏 All Countries</option>
                        <option value="MY">🇲🇾 Malaysia</option>
                        <option value="SG">🇸🇬 Singapore</option>
                    </select>
                </div>
            </div>
        </nav>
    );
}
