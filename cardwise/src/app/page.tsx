import Link from 'next/link';
import Image from 'next/image';
import { CardItem, StarRating } from '@/components';
import cardsData from '@/data/cards.json';
import { CreditCard } from '@/types';

const cards = cardsData as CreditCard[];
const featuredCards = cards.filter(card => card.featured).slice(0, 4);

export default function Home() {
  return (
    <>
      {/* Hero Section - Clean White Style */}
      <section className="hero">
        <div className="container">
          <h1>Find the Best Credit Card for You</h1>
          <p>
            Compare credit cards from Malaysia & Singapore. Find the perfect card for cashback,
            travel miles, or everyday rewards.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/cards" className="btn btn-primary btn-lg">
              Compare Credit Cards →
            </Link>
            <Link href="/cards?type=cashback" className="btn btn-secondary btn-lg">
              Best Cashback Cards
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Category Cards */}
      <section className="section" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px'
          }}>
            <Link
              href="/cards?type=cashback"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px 24px',
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              className="card-row"
            >
              <span style={{ fontSize: '2rem' }}>💰</span>
              <div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--text-dark)',
                  marginBottom: '4px'
                }}>
                  Best Cashback Cards
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
                  Get money back on purchases
                </p>
              </div>
            </Link>

            <Link
              href="/cards?type=miles"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px 24px',
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              className="card-row"
            >
              <span style={{ fontSize: '2rem' }}>✈️</span>
              <div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--text-dark)',
                  marginBottom: '4px'
                }}>
                  Best Travel Cards
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
                  Earn miles on every swipe
                </p>
              </div>
            </Link>

            <Link
              href="/cards?country=MY"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px 24px',
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              className="card-row"
            >
              <span style={{ fontSize: '2rem' }}>🇲🇾</span>
              <div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--text-dark)',
                  marginBottom: '4px'
                }}>
                  Malaysia Cards
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
                  Cards for Malaysian residents
                </p>
              </div>
            </Link>

            <Link
              href="/cards?country=SG"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px 24px',
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              className="card-row"
            >
              <span style={{ fontSize: '2rem' }}>🇸🇬</span>
              <div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--text-dark)',
                  marginBottom: '4px'
                }}>
                  Singapore Cards
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
                  Cards for Singapore residents
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cards */}
      <section className="section bg-soft" style={{ paddingTop: '48px', paddingBottom: '64px' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <h2 className="section-title" style={{ margin: 0, textAlign: 'left' }}>
              Featured Credit Cards
            </h2>
            <Link href="/cards" className="btn btn-secondary">
              View All →
            </Link>
          </div>

          {/* Card List */}
          <div>
            {featuredCards.map((card) => (
              <CardItem key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How to Compare Credit Cards</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'var(--primary)'
              }}>
                1
              </div>
              <h3 style={{ marginBottom: '8px', fontSize: '18px' }}>Browse Cards</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                Explore credit cards from top banks in Malaysia and Singapore
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'var(--primary)'
              }}>
                2
              </div>
              <h3 style={{ marginBottom: '8px', fontSize: '18px' }}>Compare Features</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                See cards side-by-side to compare rewards, fees, and benefits
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'var(--primary)'
              }}>
                3
              </div>
              <h3 style={{ marginBottom: '8px', fontSize: '18px' }}>Apply Online</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                Apply directly on the bank&apos;s website with our easy links
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <h3 style={{ color: 'white', marginBottom: '8px' }}>CardWise</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '14px', margin: 0 }}>
                Compare credit cards in Malaysia & Singapore
              </p>
            </div>
            <div style={{ display: 'flex', gap: '24px' }}>
              <Link href="/cards">Credit Cards</Link>
              <Link href="/compare">Compare</Link>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            marginTop: '24px',
            paddingTop: '24px',
            fontSize: '13px',
            color: 'var(--text-light)'
          }}>
            © 2026 CardWise. All rights reserved. Information is for reference only.
          </div>
        </div>
      </footer>
    </>
  );
}
