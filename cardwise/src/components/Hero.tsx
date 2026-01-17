'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-ringgit">
      <div className="hero-bg-pattern"></div>
      <div className="container hero-content">
        <div className="hero-badge">🇲🇾 Malaysia&apos;s Credit Card Comparison Platform</div>
        <h1 className="hero-title">
          Search. Compare. <span className="text-gradient">Apply.</span>
        </h1>
        <p className="hero-subtitle">
          Find the perfect credit card for your lifestyle. Compare rewards, cashback, 
          and benefits from Malaysia&apos;s top banks.
        </p>
        
        <div className="hero-cta-group">
          <Link href="/cards" className="btn btn-primary btn-lg">
            Compare Credit Cards
          </Link>
          <Link href="/cards?category=cashback" className="btn btn-secondary btn-lg">
            Best Cashback Cards
          </Link>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">50+</span>
            <span className="hero-stat-label">Credit Cards</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">10+</span>
            <span className="hero-stat-label">Banks</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">100%</span>
            <span className="hero-stat-label">Free to Use</span>
          </div>
        </div>
      </div>
    </section>
  );
}
