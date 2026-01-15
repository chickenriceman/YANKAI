import Link from 'next/link';
import { CardGrid } from '@/components';
import cardsData from '@/data/cards.json';
import { CreditCard } from '@/types';

const cards = cardsData as CreditCard[];
const featuredCards = cards.filter(card => card.featured).slice(0, 6);

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero section-lg relative">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <span className="badge inline-flex mb-6" style={{ background: 'rgba(99, 102, 241, 0.2)', color: '#A78BFA' }}>
                🇲🇾 Malaysia & 🇸🇬 Singapore
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Find Your Perfect
                <span
                  className="block mt-2"
                  style={{
                    background: 'linear-gradient(135deg, #818CF8 0%, #A78BFA 50%, #C4B5FD 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Credit Card
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-10">
                Compare cashback, miles, and rewards cards from top banks.
                Make smarter financial decisions with CardWise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/cards" className="btn btn-primary btn-lg">
                  Browse All Cards
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/compare"
                  className="btn btn-lg"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                >
                  Compare Cards
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Cards Visual */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 hidden lg:flex gap-4 animate-float">
          <div
            className="w-64 h-40 rounded-xl shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
              transform: 'rotate(-6deg)',
              opacity: 0.9
            }}
          />
          <div
            className="w-64 h-40 rounded-xl shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #334155 100%)',
              transform: 'rotate(3deg)',
              opacity: 0.95
            }}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-sm relative" style={{ marginTop: '80px' }}>
        <div className="container">
          <div
            className="card p-2 grid grid-cols-2 md:grid-cols-4"
            style={{ background: 'white' }}
          >
            <div className="stat-card border-r" style={{ borderColor: 'var(--border)' }}>
              <div className="stat-value">50+</div>
              <div className="stat-label">Credit Cards</div>
            </div>
            <div className="stat-card md:border-r" style={{ borderColor: 'var(--border)' }}>
              <div className="stat-value">12</div>
              <div className="stat-label">Partner Banks</div>
            </div>
            <div className="stat-card border-r border-t md:border-t-0" style={{ borderColor: 'var(--border)' }}>
              <div className="stat-value">2</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-card border-t md:border-t-0" style={{ borderColor: 'var(--border)' }}>
              <div className="stat-value">Free</div>
              <div className="stat-label">Always</div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Types */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Card Type</h2>
            <p style={{ color: 'var(--foreground-muted)' }}>
              Different cards for different lifestyles. Find the one that rewards you best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/cards?type=cashback" className="feature-card group">
              <div className="feature-icon">💰</div>
              <h3 className="text-xl font-bold mb-2">Cashback Cards</h3>
              <p className="mb-4" style={{ color: 'var(--foreground-muted)' }}>
                Get money back on every purchase. Perfect for everyday spending on groceries, dining, and petrol.
              </p>
              <span className="font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all" style={{ color: 'var(--accent)' }}>
                View Cashback Cards
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link href="/cards?type=miles" className="feature-card group">
              <div className="feature-icon">✈️</div>
              <h3 className="text-xl font-bold mb-2">Miles Cards</h3>
              <p className="mb-4" style={{ color: 'var(--foreground-muted)' }}>
                Earn air miles with every swipe. Ideal for frequent travelers and luxury getaways.
              </p>
              <span className="font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all" style={{ color: 'var(--accent)' }}>
                View Miles Cards
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cards */}
      <section className="section gradient-subtle">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="badge badge-accent mb-3">Top Picks</span>
              <h2 className="text-3xl md:text-4xl font-bold">Featured Cards</h2>
            </div>
            <Link href="/cards" className="btn btn-secondary hidden md:inline-flex">
              View All Cards
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <CardGrid cards={featuredCards} />

          <div className="text-center mt-10 md:hidden">
            <Link href="/cards" className="btn btn-primary">
              View All Cards
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How CardWise Works</h2>
            <p style={{ color: 'var(--foreground-muted)' }}>
              Finding the right card in 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Browse', desc: 'Explore our curated collection of credit cards from top banks in Malaysia and Singapore.' },
              { num: '02', title: 'Compare', desc: 'Use our comparison tool to see cards side-by-side and find the best match for your needs.' },
              { num: '03', title: 'Apply', desc: 'Click through to the bank\'s website and apply directly. Some cards have exclusive bonuses!' }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'var(--accent-gradient)' }}
                >
                  <span className="text-white font-bold text-xl">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p style={{ color: 'var(--foreground-muted)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div
            className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            style={{ background: 'var(--accent-gradient)' }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }}
            />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)', transform: 'translate(30%, 30%)' }}
            />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Find Your Perfect Card?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                Join thousands of smart shoppers who use CardWise to maximize their rewards.
              </p>
              <Link
                href="/cards"
                className="btn btn-lg inline-flex"
                style={{ background: 'white', color: 'var(--accent)' }}
              >
                Get Started — It&apos;s Free
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
