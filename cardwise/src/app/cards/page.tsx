import { CardDatabase } from '@/components';
import cardsData from '@/data/cards.json';
import { CreditCard } from '@/types';

const cards = cardsData as CreditCard[];

export default function CardsPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Header */}
            <div className="bg-blue-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-4">Browse All Credit Cards</h1>
                    <p className="text-blue-100 max-w-2xl">
                        Compare Malaysia and Singapore's best credit cards. Filter by bank, type, and benefits to find the perfect card for you.
                    </p>
                </div>
            </div>

            <CardDatabase initialCards={cards} />
        </div>
    );
}
