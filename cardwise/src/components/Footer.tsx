import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer-new">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3 className="footer-logo">CardWise</h3>
                        <p className="footer-tagline">
                            Compare credit cards from Malaysia&apos;s top banks. Find the best rewards, cashback, and benefits.
                        </p>
                        <div className="footer-country">
                            <span>🇲🇾</span> Malaysia
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Credit Cards</h4>
                        <Link href="/cards?category=cashback">Best Cashback</Link>
                        <Link href="/cards?category=miles">Travel & Miles</Link>
                        <Link href="/cards?category=dining">Dining Rewards</Link>
                        <Link href="/cards?category=petrol">Petrol Cards</Link>
                        <Link href="/cards?category=no-fee">No Annual Fee</Link>
                    </div>

                    <div className="footer-links">
                        <h4>Tools</h4>
                        <Link href="/compare">Compare Cards</Link>
                        <Link href="/calculators/cashback">Cashback Calculator</Link>
                        <Link href="/calculators/miles">Miles Calculator</Link>
                    </div>

                    <div className="footer-links">
                        <h4>Resources</h4>
                        <Link href="/blog">Blog & Guides</Link>
                        <Link href="/about">About CardWise</Link>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/privacy">Privacy Policy</Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 CardWise. All rights reserved.</p>
                    <p className="footer-disclaimer">
                        Information provided is for reference only. Please verify details with the respective banks before applying.
                    </p>
                </div>
            </div>
        </footer>
    );
}
