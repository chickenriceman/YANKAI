import Link from 'next/link';
import { CreditCard } from '@/types';

interface CardItemProps {
    card: CreditCard;
    onCompare?: (card: CreditCard) => void;
    isComparing?: boolean;
}

export default function CardItem({ card, onCompare, isComparing }: CardItemProps) {
    // Generate gradient colors based on bank
    const getCardGradient = (bank: string) => {
        const gradients: Record<string, string> = {
            'Maybank': 'linear-gradient(135deg, #FCD116 0%, #F39C12 100%)',
            'CIMB': 'linear-gradient(135deg, #8B0000 0%, #DC143C 100%)',
            'Public Bank': 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
            'HSBC': 'linear-gradient(135deg, #DB0011 0%, #FF4444 100%)',
            'AmBank': 'linear-gradient(135deg, #006400 0%, #228B22 100%)',
            'DBS': 'linear-gradient(135deg, #E31837 0%, #FF6B6B 100%)',
            'UOB': 'linear-gradient(135deg, #003087 0%, #0066CC 100%)',
            'OCBC': 'linear-gradient(135deg, #E31837 0%, #FF4757 100%)',
            'Citibank': 'linear-gradient(135deg, #003B70 0%, #056CB6 100%)',
            'Standard Chartered': 'linear-gradient(135deg, #0072AA 0%, #00A9E0 100%)',
            'RHB': 'linear-gradient(135deg, #004B87 0%, #006FCF 100%)',
            'Hong Leong': 'linear-gradient(135deg, #1E3A5F 0%, #3D5A80 100%)',
        };
        return gradients[bank] || 'linear-gradient(135deg, #0F172A 0%, #334155 100%)';
    };

    return (
        <div className="card card-highlight group">
            {/* Card Header - Credit Card Visual */}
            <div
                className="h-44 relative p-5 flex flex-col justify-between"
                style={{
                    background: getCardGradient(card.bank),
                    borderRadius: 'var(--radius) var(--radius) 0 0'
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
                />

                {/* Top Row */}
                <div className="flex items-start justify-between relative z-10">
                    <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', backdropFilter: 'blur(4px)' }}>
                        {card.country === 'MY' ? '🇲🇾 Malaysia' : '🇸🇬 Singapore'}
                    </span>
                    {card.featured && (
                        <span className="badge badge-featured">
                            ⭐ Featured
                        </span>
                    )}
                </div>

                {/* Card Info */}
                <div className="relative z-10">
                    <p className="text-white/70 text-sm font-medium mb-1">{card.bank}</p>
                    <h3 className="text-white font-bold text-lg leading-tight">{card.name}</h3>
                </div>

                {/* Card Chip */}
                <div className="absolute bottom-5 right-5" style={{ opacity: 0.6 }}>
                    <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
                        <rect x="0" y="0" width="40" height="32" rx="4" fill="url(#chipGradient)" />
                        <rect x="4" y="8" width="32" height="2" fill="#C0A060" />
                        <rect x="4" y="13" width="32" height="2" fill="#C0A060" />
                        <rect x="4" y="18" width="32" height="2" fill="#C0A060" />
                        <rect x="4" y="23" width="32" height="2" fill="#C0A060" />
                        <defs>
                            <linearGradient id="chipGradient" x1="0" y1="0" x2="40" y2="32">
                                <stop stopColor="#D4AF37" />
                                <stop offset="1" stopColor="#C0A060" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            {/* Card Body */}
            <div className="p-5">
                {/* Type & Rating */}
                <div className="flex items-center gap-2 mb-4">
                    <span className={`badge ${card.type === 'cashback' ? 'badge-success' : 'badge-accent'}`}>
                        {card.type === 'cashback' ? '💰 Cashback' : '✈️ Miles'}
                    </span>
                    <span className="text-sm font-medium" style={{ color: 'var(--foreground-muted)' }}>
                        ⭐ {card.rating}
                    </span>
                </div>

                {/* Key Stats */}
                <div className="space-y-3 mb-5">
                    <div className="flex justify-between items-center">
                        <span className="text-sm" style={{ color: 'var(--foreground-muted)' }}>Annual Fee</span>
                        <span className="text-sm font-semibold">{card.annualFee.split(' (')[0]}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm" style={{ color: 'var(--foreground-muted)' }}>
                            {card.type === 'cashback' ? 'Cashback' : 'Miles Rate'}
                        </span>
                        <span className="text-sm font-bold" style={{ color: 'var(--accent)' }}>
                            {card.cashbackRate || card.milesRate}
                        </span>
                    </div>
                    {card.signupBonus && (
                        <div className="flex justify-between items-center">
                            <span className="text-sm" style={{ color: 'var(--foreground-muted)' }}>Signup Bonus</span>
                            <span className="text-sm font-bold" style={{ color: 'var(--success)' }}>
                                {card.signupBonus}
                            </span>
                        </div>
                    )}
                </div>

                {/* Highlights */}
                <ul className="mb-5 space-y-2">
                    {card.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                            <span className="mt-0.5" style={{ color: 'var(--accent)' }}>✓</span>
                            <span style={{ color: 'var(--foreground-muted)' }}>{highlight}</span>
                        </li>
                    ))}
                </ul>

                {/* Actions */}
                <div className="flex gap-2">
                    <Link
                        href={`/cards/${card.id}`}
                        className="btn btn-primary flex-1 text-sm"
                    >
                        View Details
                    </Link>
                    {onCompare && (
                        <button
                            onClick={() => onCompare(card)}
                            className={`btn text-sm px-4 ${isComparing
                                    ? 'btn-primary'
                                    : 'btn-secondary'
                                }`}
                            style={isComparing ? { background: 'var(--success)' } : {}}
                        >
                            {isComparing ? '✓' : '+'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
