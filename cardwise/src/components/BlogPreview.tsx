'use client';

import Link from 'next/link';

const articles = [
    {
        id: 1,
        title: 'Top 5 Cashback Credit Cards in Malaysia for 2026',
        category: 'Card Guides',
        date: 'Jan 15, 2026',
        slug: 'top-cashback-cards-2026',
    },
    {
        id: 2,
        title: 'How to Maximize Your Credit Card Rewards',
        category: 'Tips & Tricks',
        date: 'Jan 12, 2026',
        slug: 'maximize-credit-card-rewards',
    },
    {
        id: 3,
        title: 'Understanding Annual Fees: Is It Worth Paying?',
        category: 'Beginners Guide',
        date: 'Jan 10, 2026',
        slug: 'understanding-annual-fees',
    },
    {
        id: 4,
        title: 'New: Maybank Updates Credit Card Terms & Conditions',
        category: 'Bank News',
        date: 'Jan 8, 2026',
        slug: 'maybank-card-updates',
    },
];

export default function BlogPreview() {
    return (
        <section className="blog-section">
            <div className="container">
                <div className="section-header">
                    <div>
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>
                            📰 Latest from CardWise
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: 'left' }}>
                            Stay updated with credit card news, tips, and guides
                        </p>
                    </div>
                    <Link href="/blog" className="btn btn-secondary">
                        View All Articles →
                    </Link>
                </div>

                <div className="blog-grid">
                    {articles.map((article) => (
                        <Link key={article.id} href={`/blog/${article.slug}`} className="blog-card">
                            <div className="blog-card-category">{article.category}</div>
                            <h3 className="blog-card-title">{article.title}</h3>
                            <div className="blog-card-date">{article.date}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
