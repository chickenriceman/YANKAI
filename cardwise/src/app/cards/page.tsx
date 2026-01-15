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
        <div className="container">
            {/* Page Header */}
            <div className="page-header">
                <h1 className="page-title">
                    {type === 'cashback' && '💰 Best Cashback Credit Cards'}
                    {type === 'miles' && '✈️ Best Travel Miles Cards'}
                    {type === 'all' && 'Compare Credit Cards'}
                </h1>
                <p className="page-subtitle">
                    Find the best credit cards in Malaysia & Singapore. Compare rewards, fees, and benefits side-by-side.
                </p>
            </div>

            {/* Page Layout: Sidebar + Main Content */}
            <div className="page-layout">
                {/* Sidebar Filters */}
                <Filters
                    country={country}
                    type={type}
                    sortBy={sortBy}
                    onCountryChange={setCountry}
                    onTypeChange={setType}
                    onSortChange={setSortBy}
                />

                {/* Main Content */}
                <div className="main-content">
                    <p className="results-count">
                        Showing {filteredCards.length} credit cards
                        {country !== 'all' && ` in ${country === 'MY' ? 'Malaysia' : 'Singapore'}`}
                    </p>

                    <CardGrid
                        cards={filteredCards}
                        onCompare={handleCompare}
                        compareList={compareList.map(c => c.id)}
                    />
                </div>
            </div>

            {/* Compare Bar */}
            <CompareBar
                cards={compareList}
                onRemove={handleRemoveCompare}
                onClear={() => setCompareList([])}
            />

            {/* Bottom padding for compare bar */}
            {compareList.length > 0 && <div style={{ height: '100px' }} />}
        </div>
    );
}

export default function CardsPage() {
    return (
        <Suspense fallback={
            <div className="container">
                <div className="page-header">
                    <div style={{ height: '32px', background: '#eee', borderRadius: '8px', width: '300px', marginBottom: '8px' }} />
                    <div style={{ height: '20px', background: '#eee', borderRadius: '8px', width: '500px' }} />
                </div>
                <div className="page-layout">
                    <div className="sidebar">
                        <div className="filter-section" style={{ height: '200px' }} />
                    </div>
                    <div className="main-content">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="card-row" style={{ height: '180px', background: '#f7f7f7', marginBottom: '16px' }} />
                        ))}
                    </div>
                </div>
            </div>
        }>
            <CardsContent />
        </Suspense>
    );
}
