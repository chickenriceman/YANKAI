import { CreditCard } from '@/types';
import CardItem from './CardItem';

interface CardGridProps {
    cards: CreditCard[];
    onCompare?: (card: CreditCard) => void;
    compareList?: string[];
}

export default function CardGrid({ cards, onCompare, compareList = [] }: CardGridProps) {
    if (cards.length === 0) {
        return (
            <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No cards found</h3>
                <p style={{ color: 'var(--foreground-muted)' }}>
                    Try adjusting your filters to see more results
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
                <div key={card.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardItem
                        card={card}
                        onCompare={onCompare}
                        isComparing={compareList.includes(card.id)}
                    />
                </div>
            ))}
        </div>
    );
}
