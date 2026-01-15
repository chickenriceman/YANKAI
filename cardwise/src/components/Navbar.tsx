'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass" style={{ borderBottom: '1px solid var(--border)' }}>
            <div className="container">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105"
                            style={{ background: 'var(--accent-gradient)' }}
                        >
                            <span className="text-white font-bold text-lg">C</span>
                        </div>
                        <span className="text-lg font-bold" style={{ color: 'var(--primary)' }}>
                            CardWise
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        <Link href="/cards" className="btn-ghost">
                            All Cards
                        </Link>
                        <Link href="/compare" className="btn-ghost">
                            Compare
                        </Link>
                        <Link href="/cards?type=cashback" className="btn-ghost">
                            Cashback
                        </Link>
                        <Link href="/cards?type=miles" className="btn-ghost">
                            Miles
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link href="/cards" className="btn btn-primary">
                            Find Your Card
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ color: 'var(--foreground)' }}
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t animate-fade-in" style={{ borderColor: 'var(--border)' }}>
                        <div className="flex flex-col gap-2">
                            <Link href="/cards" className="btn-ghost text-left" onClick={() => setIsOpen(false)}>
                                All Cards
                            </Link>
                            <Link href="/compare" className="btn-ghost text-left" onClick={() => setIsOpen(false)}>
                                Compare
                            </Link>
                            <Link href="/cards?type=cashback" className="btn-ghost text-left" onClick={() => setIsOpen(false)}>
                                Cashback Cards
                            </Link>
                            <Link href="/cards?type=miles" className="btn-ghost text-left" onClick={() => setIsOpen(false)}>
                                Miles Cards
                            </Link>
                            <div className="pt-2 mt-2 border-t" style={{ borderColor: 'var(--border)' }}>
                                <Link href="/cards" className="btn btn-primary w-full" onClick={() => setIsOpen(false)}>
                                    Find Your Card
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
