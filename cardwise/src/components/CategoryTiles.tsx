'use client';

import Link from 'next/link';

const categories = [
    { icon: '💰', name: 'Best Cashback', slug: 'cashback', description: 'Earn money back on every purchase' },
    { icon: '✈️', name: 'Travel & Miles', slug: 'miles', description: 'Collect air miles & travel perks' },
    { icon: '🍽️', name: 'Dining Rewards', slug: 'dining', description: 'Discounts at restaurants' },
    { icon: '⛽', name: 'Petrol Cards', slug: 'petrol', description: 'Save on fuel purchases' },
    { icon: '🛒', name: 'Shopping', slug: 'shopping', description: 'Extra rewards on retail' },
    { icon: '🎁', name: 'No Annual Fee', slug: 'no-fee', description: 'Free cards forever' },
];

export default function CategoryTiles() {
    return (
        <section className="category-section">
            <div className="container">
                <h2 className="section-title">Find Your Perfect Card</h2>
                <p className="section-subtitle">Choose a category to explore credit cards that match your needs</p>

                <div className="category-grid">
                    {categories.map((category) => (
                        <Link
                            key={category.slug}
                            href={`/cards?category=${category.slug}`}
                            className="category-tile"
                        >
                            <span className="category-icon">{category.icon}</span>
                            <h3 className="category-name">{category.name}</h3>
                            <p className="category-desc">{category.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
