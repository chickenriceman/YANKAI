'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CardGrid, Filters, CompareBar } from '@/components';
import cardsData from '@/data/cards.json';
import { CreditCard } from '@/types';

const cards = cardsData as CreditCard[];

function CardsContent() {
    const searchParams = useSearchParams();
    const initialType = searchParams.get('type') || 'all';
    const initialCountry = searchParams.get('country') || 'all';

    const [country, setCountry] = useState(initialCountry);
    const [type, setType] = useState(initialType);
    const [sortBy, setSortBy] = useState('featured');
    const [compareList, setCompareList] = useState<CreditCard[]>([]);

    const filteredCards = useMemo(() => {
        let result = [...cards];

        // Filter by country
        if (country !== 'all') {
            result = result.filter(card => card.country === country);
        }

        // Filter by type
        if (type !== 'all') {
            result = result.filter(card => card.type === type);
        }

        // Sort
        switch (sortBy) {
            case 'rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
            case 'name':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'featured':
            default:
                result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        }

        return result;
    }, [country, type, sortBy]);

    const handleCompare = (card: CreditCard) => {
        setCompareList(prev => {
            const exists = prev.find(c => c.id === card.id);
            if (exists) {
                return prev.filter(c => c.id !== card.id);
            }
            if (prev.length >= 4) {
                return prev;
            }
            return [...prev, card];
        });
    };

    const handleRemoveCompare = (id: string) => {
        setCompareList(prev => prev.filter(c => c.id !== id));
    };

    return (
        <div className="container py-8">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">
                    {type === 'cashback' && '💰 Cashback Cards'}
                    {type === 'miles' && '✈️ Miles Cards'}
                    {type === 'all' && 'All Credit Cards'}
                </h1>
                <p style={{ color: 'var(--foreground-muted)' }}>
                    {filteredCards.length} cards available
                    {country !== 'all' && ` in ${country === 'MY' ? 'Malaysia' : 'Singapore'}`}
                </p>
            </div>

            {/* Filters */}
            <Filters
                country={country}
                type={type}
                sortBy={sortBy}
                onCountryChange={setCountry}
                onTypeChange={setType}
                onSortChange={setSortBy}
            />

            {/* Card Grid */}
            <CardGrid
                cards={filteredCards}
                onCompare={handleCompare}
                compareList={compareList.map(c => c.id)}
            />

            {/* Compare Bar */}
            <CompareBar
                cards={compareList}
                onRemove={handleRemoveCompare}
                onClear={() => setCompareList([])}
            />

            {/* Bottom padding for compare bar */}
            {compareList.length > 0 && <div className="h-24" />}
        </div>
    );
}

export default function CardsPage() {
    return (
        <Suspense fallback={
            <div className="container py-8">
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="h-80 bg-gray-200 rounded-xl"></div>
                        ))}
                    </div>
                </div>
            </div>
        }>
            <CardsContent />
        </Suspense>
    );
}
