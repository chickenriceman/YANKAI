import Link from 'next/link';
import { notFound } from 'next/navigation';
import cardsData from '@/data/cards.json';
import { CreditCard } from '@/types';

const cards = cardsData as CreditCard[];

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return cards.map((card) => ({
        slug: card.id,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const card = cards.find(c => c.id === slug);
    if (!card) return { title: 'Card Not Found' };

    const rate = card.benefits.cashback ? `Up to ${card.benefits.cashback.maxRate}% Cashback` : card.benefits.miles?.earnRate;
    return {
        title: `${card.name} Review | CardWise`,
        description: `${card.name} from ${card.bank}. ${rate}. Annual fee: ${card.fees.currency} ${card.fees.principal}`,
    };
}

export default async function CardDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const card = cards.find(c => c.id === slug);

    if (!card) {
        notFound();
    }

    const similarCards = cards
        .filter(c => c.id !== card.id && c.type === card.type && c.country === card.country)
        .slice(0, 3);

    return (
        <div className="container py-8">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm" style={{ color: 'var(--foreground-muted)' }}>
                <Link href="/" className="hover:underline">Home</Link>
                <span className="mx-2">→</span>
                <Link href="/cards" className="hover:underline">Cards</Link>
                <span className="mx-2">→</span>
                <span>{card.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    {/* Card Header */}
                    <div className="gradient-hero rounded-2xl p-8 text-white mb-8">
                        <div className="flex items-start justify-between mb-4">
                            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                                {card.country === 'MY' ? '🇲🇾 Malaysia' : '🇸🇬 Singapore'}
                            </span>
                            {card.featured && (
                                <span className="px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-sm font-bold">
                                    ⭐ Featured
                                </span>
                            )}
                        </div>
                        <p className="text-sm opacity-80 mb-1">{card.bank}</p>
                        <h1 className="text-3xl font-bold mb-4">{card.name}</h1>
                        <div className="flex items-center gap-4">
                            <span className="text-2xl font-bold">
                                {card.benefits.cashback ? `Up to ${card.benefits.cashback.maxRate}%` : card.benefits.miles?.earnRate}
                            </span>
                            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                                {card.type === 'cashback' ? '💰 Cashback' : '✈️ Miles'}
                            </span>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="bg-white rounded-xl p-6 card-shadow mb-8">
                        <h2 className="text-xl font-bold mb-4">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {card.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: 'var(--background-alt)' }}>
                                    <span style={{ color: 'var(--accent)' }}>✓</span>
                                    <span>{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pros & Cons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                            <h3 className="text-lg font-bold text-green-800 mb-4">✅ Pros</h3>
                            <ul className="space-y-2">
                                {card.pros.map((pro, idx) => (
                                    <li key={idx} className="text-green-700">{pro}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                            <h3 className="text-lg font-bold text-red-800 mb-4">❌ Cons</h3>
                            <ul className="space-y-2">
                                {card.cons.map((con, idx) => (
                                    <li key={idx} className="text-red-700">{con}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Similar Cards */}
                    {similarCards.length > 0 && (
                        <div>
                            <h2 className="text-xl font-bold mb-4">Similar Cards</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {similarCards.map(similar => (
                                    <Link
                                        key={similar.id}
                                        href={`/cards/${similar.id}`}
                                        className="p-4 rounded-xl card-shadow hover:border-[var(--primary)] border-2 border-transparent transition-all"
                                    >
                                        <p className="text-sm" style={{ color: 'var(--foreground-muted)' }}>{similar.bank}</p>
                                        <p className="font-semibold">{similar.name}</p>
                                        <p className="text-sm" style={{ color: 'var(--primary)' }}>
                                            {similar.benefits.cashback ? `Up to ${similar.benefits.cashback.maxRate}%` : similar.benefits.miles?.earnRate}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-white rounded-xl p-6 card-shadow">
                        <h3 className="text-lg font-bold mb-4">Card Details</h3>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between py-2 border-b" style={{ borderColor: 'var(--border)' }}>
                                <span style={{ color: 'var(--foreground-muted)' }}>Annual Fee</span>
                                <div className="text-right">
                                    <span className="font-medium block">{card.fees.currency} {card.fees.principal}</span>
                                    {card.fees.waivedFirstYear && <span className="text-xs text-green-600">First year free</span>}
                                </div>
                            </div>
                            <div className="flex justify-between py-2 border-b" style={{ borderColor: 'var(--border)' }}>
                                <span style={{ color: 'var(--foreground-muted)' }}>Min. Income</span>
                                <div className="text-right">
                                    <span className="font-medium block">{card.requirements.minIncome.currency} {card.requirements.minIncome.amount.toLocaleString()}</span>
                                    <span className="text-xs text-gray-500">per {card.requirements.minIncome.period}</span>
                                </div>
                            </div>
                            <div className="flex justify-between py-2 border-b" style={{ borderColor: 'var(--border)' }}>
                                <span style={{ color: 'var(--foreground-muted)' }}>Rating</span>
                                <span className="font-medium">⭐ {card.rating}/5</span>
                            </div>
                        </div>

                        {card.promotion && (
                            <div className="p-4 rounded-lg mb-6" style={{ backgroundColor: 'var(--background-alt)' }}>
                                <p className="text-sm font-medium" style={{ color: 'var(--foreground-muted)' }}>
                                    {card.promotion.title}
                                </p>
                                <p className="text-lg font-bold" style={{ color: 'var(--success)' }}>
                                    {card.promotion.gift}
                                </p>
                                <p className="text-xs mt-2 text-gray-500">
                                    Valid until {card.promotion.endDate}
                                </p>
                            </div>
                        )}

                        <a
                            href={card.applyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary w-full text-center block mb-3"
                        >
                            Apply Now →
                        </a>
                        <Link
                            href="/cards"
                            className="btn-secondary w-full text-center block"
                        >
                            Back to All Cards
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
