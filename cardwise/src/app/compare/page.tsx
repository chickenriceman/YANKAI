'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import cardsData from '@/data/cards.json';
import { CreditCard } from '@/types';

const cards = cardsData as CreditCard[];

function CompareContent() {
    const searchParams = useSearchParams();
    const cardIds = searchParams.get('cards')?.split(',').filter(Boolean) || [];

    const [selectedCards, setSelectedCards] = useState<CreditCard[]>([]);

    useEffect(() => {
        const found = cardIds.map(id => cards.find(c => c.id === id)).filter(Boolean) as CreditCard[];
        setSelectedCards(found);
    }, [cardIds.join(',')]);

    const removeCard = (id: string) => {
        setSelectedCards(prev => prev.filter(c => c.id !== id));
    };

    if (selectedCards.length === 0) {
        return (
            <div className="container py-16 text-center">
                <div className="text-6xl mb-4">🔄</div>
                <h1 className="text-3xl font-bold mb-4">Compare Credit Cards</h1>
                <p className="text-lg mb-8" style={{ color: 'var(--foreground-muted)' }}>
                    Select cards from our catalog to compare them side by side
                </p>
                <Link href="/cards" className="btn-primary">
                    Browse Cards to Compare →
                </Link>
            </div>
        );
    }

    const compareFields = [
        { key: 'bank', label: 'Bank' },
        { key: 'country', label: 'Country', format: (v: string) => v === 'MY' ? '🇲🇾 Malaysia' : '🇸🇬 Singapore' },
        { key: 'type', label: 'Type', format: (v: string) => v === 'cashback' ? '💰 Cashback' : '✈️ Miles' },
        { key: 'annualFee', label: 'Annual Fee' },
        { key: 'minIncome', label: 'Min. Income' },
        { key: 'cashbackRate', label: 'Cashback Rate', fallback: 'milesRate', fallbackLabel: 'Miles Rate' },
        { key: 'signupBonus', label: 'Signup Bonus' },
        { key: 'rating', label: 'Rating', format: (v: number) => `⭐ ${v}/5` },
    ];

    return (
        <div className="container py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Compare Cards</h1>
                <p style={{ color: 'var(--foreground-muted)' }}>
                    Comparing {selectedCards.length} card{selectedCards.length > 1 ? 's' : ''} side by side
                </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="p-4 text-left" style={{ backgroundColor: 'var(--background-alt)', minWidth: '150px' }}>
                                Feature
                            </th>
                            {selectedCards.map(card => (
                                <th
                                    key={card.id}
                                    className="p-4 text-center relative"
                                    style={{ backgroundColor: 'var(--background-alt)', minWidth: '200px' }}
                                >
                                    <button
                                        onClick={() => removeCard(card.id)}
                                        className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold text-lg"
                                        aria-label="Remove card"
                                    >
                                        ×
                                    </button>
                                    <div className="gradient-hero rounded-lg p-4 text-white mb-2">
                                        <p className="text-xs opacity-80">{card.bank}</p>
                                        <p className="font-bold text-sm">{card.name}</p>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {compareFields.map((field, idx) => (
                            <tr key={field.key} className={idx % 2 === 0 ? 'bg-white' : ''} style={idx % 2 !== 0 ? { backgroundColor: 'var(--background-alt)' } : {}}>
                                <td className="p-4 font-medium" style={{ color: 'var(--foreground-muted)' }}>
                                    {field.label}
                                </td>
                                {selectedCards.map(card => {
                                    let value = (card as Record<string, unknown>)[field.key];
                                    let label = field.label;

                                    if (!value && field.fallback) {
                                        value = (card as Record<string, unknown>)[field.fallback];
                                        label = field.fallbackLabel || label;
                                    }

                                    const displayValue = field.format
                                        ? field.format(value as never)
                                        : (value || '—');

                                    return (
                                        <td key={card.id} className="p-4 text-center">
                                            {displayValue}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}

                        {/* Highlights Row */}
                        <tr style={{ backgroundColor: 'var(--background-alt)' }}>
                            <td className="p-4 font-medium align-top" style={{ color: 'var(--foreground-muted)' }}>
                                Highlights
                            </td>
                            {selectedCards.map(card => (
                                <td key={card.id} className="p-4">
                                    <ul className="text-sm space-y-1">
                                        {card.highlights.map((h, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span style={{ color: 'var(--accent)' }}>✓</span>
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            ))}
                        </tr>

                        {/* Pros Row */}
                        <tr>
                            <td className="p-4 font-medium align-top" style={{ color: 'var(--foreground-muted)' }}>
                                Pros
                            </td>
                            {selectedCards.map(card => (
                                <td key={card.id} className="p-4">
                                    <ul className="text-sm space-y-1">
                                        {card.pros.map((p, i) => (
                                            <li key={i} className="text-green-600">✅ {p}</li>
                                        ))}
                                    </ul>
                                </td>
                            ))}
                        </tr>

                        {/* Cons Row */}
                        <tr style={{ backgroundColor: 'var(--background-alt)' }}>
                            <td className="p-4 font-medium align-top" style={{ color: 'var(--foreground-muted)' }}>
                                Cons
                            </td>
                            {selectedCards.map(card => (
                                <td key={card.id} className="p-4">
                                    <ul className="text-sm space-y-1">
                                        {card.cons.map((c, i) => (
                                            <li key={i} className="text-red-600">❌ {c}</li>
                                        ))}
                                    </ul>
                                </td>
                            ))}
                        </tr>

                        {/* Apply Button Row */}
                        <tr>
                            <td className="p-4"></td>
                            {selectedCards.map(card => (
                                <td key={card.id} className="p-4 text-center">
                                    <a
                                        href={card.applyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary inline-block"
                                    >
                                        Apply Now →
                                    </a>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Add More Cards */}
            {selectedCards.length < 4 && (
                <div className="mt-8 text-center">
                    <p className="mb-4" style={{ color: 'var(--foreground-muted)' }}>
                        You can compare up to 4 cards. Add {4 - selectedCards.length} more!
                    </p>
                    <Link href="/cards" className="btn-secondary">
                        + Add More Cards
                    </Link>
                </div>
            )}
        </div>
    );
}

export default function ComparePage() {
    return (
        <Suspense fallback={
            <div className="container py-16 text-center">
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-8"></div>
                </div>
            </div>
        }>
            <CompareContent />
        </Suspense>
    );
}
