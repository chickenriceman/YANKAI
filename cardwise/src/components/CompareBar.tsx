'use client';

import Link from 'next/link';
import { CreditCard } from '@/types';

interface CompareBarProps {
    cards: CreditCard[];
    onRemove: (id: string) => void;
    onClear: () => void;
}

export default function CompareBar({ cards, onRemove, onClear }: CompareBarProps) {
    if (cards.length === 0) return null;

    return (
        <div
            className="fixed bottom-0 left-0 right-0 glass-dark z-50 animate-fade-in"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
            <div className="container py-4">
                <div className="flex items-center justify-between gap-4">
                    {/* Selected Cards */}
                    <div className="flex items-center gap-3 flex-1 overflow-x-auto">
                        <span className="text-sm font-medium whitespace-nowrap text-white/60">
                            Compare ({cards.length}/4):
                        </span>
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg"
                                style={{ background: 'rgba(255,255,255,0.1)' }}
                            >
                                <span className="text-sm font-medium text-white whitespace-nowrap">
                                    {card.bank}
                                </span>
                                <button
                                    onClick={() => onRemove(card.id)}
                                    className="text-white/60 hover:text-white font-bold transition-colors"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onClear}
                            className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                        >
                            Clear
                        </button>
                        <Link
                            href={`/compare?cards=${cards.map(c => c.id).join(',')}`}
                            className="btn btn-primary"
                        >
                            Compare Now
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
