'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CreditCard } from '@/types';

interface FeaturedPromotionsProps {
    cards: CreditCard[];
}

export default function FeaturedPromotions({ cards }: FeaturedPromotionsProps) {
    return (
        <section className="promotions-section">
            <div className="container">
                <div className="section-header">
                    <div>
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>
                            🔥 Featured Credit Cards
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: 'left' }}>
                            Apply now and get exclusive gifts from CardWise
                        </p>
                    </div>
                    <Link href="/cards" className="btn btn-secondary">
                        View All Cards →
                    </Link>
                </div>

                <div className="promotions-grid">
                    {cards.map((card) => (
                        <div key={card.id} className="promo-card">
                            <div className="promo-card-badge">Exclusive Gift</div>
                            <div className="promo-card-image">
                                <Image
                                    src={card.imageUrl}
                                    alt={card.name}
                                    width={280}
                                    height={175}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className="promo-card-content">
                                <span className="promo-card-bank">{card.bank}</span>
                                <h3 className="promo-card-name">{card.name}</h3>
                                <div className="promo-card-highlight">
                                    {card.signupBonus || card.rewards}
                                </div>
                                <Link href={`/cards/${card.id}`} className="btn btn-primary btn-sm promo-card-btn">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
