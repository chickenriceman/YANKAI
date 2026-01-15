'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CreditCard } from '@/types';

interface CompareBarProps {
    cards: CreditCard[];
    onRemove: (id: string) => void;
    onClear: () => void;
}

export default function CompareBar({ cards, onRemove, onClear }: CompareBarProps) {
    if (cards.length === 0) return null;

    return (
        <div className="compare-bar active">
            <div className="compare-bar-inner">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontWeight: '600', color: 'var(--text-dark)' }}>
                        {cards.length} card{cards.length > 1 ? 's' : ''} selected
                    </span>

                    <div className="compare-cards">
                        {cards.map((card) => (
                            <div key={card.id} className="compare-card-mini">
                                <Image
                                    src={card.image}
                                    alt={card.name}
                                    width={70}
                                    height={44}
                                    style={{ objectFit: 'contain' }}
                                />
                                <button
                                    className="compare-card-remove"
                                    onClick={() => onRemove(card.id)}
                                    aria-label={`Remove ${card.name}`}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                        className="btn btn-ghost"
                        onClick={onClear}
                    >
                        Clear All
                    </button>
                    <Link
                        href={`/compare?cards=${cards.map(c => c.id).join(',')}`}
                        className="btn btn-primary"
                    >
                        Compare {cards.length} Cards →
                    </Link>
                </div>
            </div>
        </div>
    );
}
