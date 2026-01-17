'use client';

import { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to cards page with search query
    window.location.href = `/cards?q=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <>
      {/* Section 1: The Fact */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 24px',
          background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        }}
      >
        <div style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '36px',
              fontWeight: 800,
              lineHeight: 1.3,
              color: '#1e293b',
            }}
          >
            Did you know, the average Malaysian misses out on over{' '}
            <span style={{ color: '#008248' }}>RM1,500+</span> on credit card
            benefits every year?
          </h1>
        </div>
      </section>

      {/* Section 2: Pain Points - Speech Bubbles */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 24px',
          background: '#ffffff',
        }}
      >
        <h2
          style={{
            fontSize: '36px',
            fontWeight: 800,
            lineHeight: 1.3,
            color: '#1e293b',
            marginBottom: '48px',
            textAlign: 'center',
          }}
        >
          We hear you.
        </h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            justifyContent: 'center',
            maxWidth: '900px',
          }}
        >
          {[
            "I'm lazy.",
            'The banks are annoying to deal with.',
            "I'm worried about overspending.",
            "WHAT's THE POINT?",
          ].map((text, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                background: '#f1f5f9',
                borderRadius: '20px',
                padding: '20px 28px',
                fontSize: '18px',
                fontWeight: 500,
                color: '#475569',
                maxWidth: '280px',
              }}
            >
              {text}
              {/* Speech bubble tail */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '30px',
                  width: 0,
                  height: 0,
                  borderLeft: '10px solid transparent',
                  borderRight: '10px solid transparent',
                  borderTop: '12px solid #f1f5f9',
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Call to Action - Multiple Choice */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 24px',
          background: 'linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)',
        }}
      >
        <h2
          style={{
            fontSize: '36px',
            fontWeight: 800,
            lineHeight: 1.3,
            color: '#1e293b',
            marginBottom: '48px',
            textAlign: 'center',
            maxWidth: '600px',
          }}
        >
          Let us find you a perfect card. Tell us your biggest monthly expenditure.
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[
            { label: 'Eating out', value: 'dining' },
            { label: 'Shopping', value: 'shopping' },
            { label: 'Holidays', value: 'travel' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => window.location.href = `/cards?category=${option.value}`}
              style={{
                padding: '20px 40px',
                fontSize: '18px',
                fontWeight: 600,
                color: '#1e293b',
                background: 'white',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#008248';
                e.currentTarget.style.background = '#f0fdf4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.background = 'white';
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
