'use client';

import { CardItem } from '@/components';
import { CreditCard } from '@/types';

interface CardGridProps {
    cards: CreditCard[];
    onCompare?: (card: CreditCard) => void;
    compareList?: string[];
}

export default function CardGrid({ cards, onCompare, compareList = [] }: CardGridProps) {
    if (cards.length === 0) {
        return (
            <div className="text-center py-16">
                <p className="text-muted text-lg">No cards found matching your criteria.</p>
                <p className="text-muted mt-2">Try adjusting your filters.</p>
            </div>
        );
    }

    return (
        <div className="card-list">
            {cards.map((card) => (
                <CardItem
                    key={card.id}
                    card={card}
                    onCompare={onCompare}
                    isComparing={compareList.includes(card.id)}
                />
            ))}
        </div>
    );
}
