'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CreditCard } from '@/types';
import StarRating from './StarRating';

interface CardItemProps {
    card: CreditCard;
    onCompare?: (card: CreditCard) => void;
    isComparing?: boolean;
}

export default function CardItem({ card, onCompare, isComparing }: CardItemProps) {
    return (
        <div className="card-row">
            {/* Card Image */}
            <div className="card-row-image">
                <Image
                    src={card.image}
                    alt={card.name}
                    width={180}
                    height={114}
                    style={{ objectFit: 'contain' }}
                    priority
                />
            </div>

            {/* Card Info */}
            <div className="card-row-info">
                <div className="card-row-header">
                    <p className="card-row-bank">{card.bank}</p>
                    <h3 className="card-row-name">{card.name}</h3>

                    <div className="card-row-rating">
                        <StarRating rating={card.rating} />
                        <span className="badge-country">
                            {card.country === 'MY' ? '🇲🇾 Malaysia' : '🇸🇬 Singapore'}
                        </span>
                    </div>

                    <span className="card-row-badge">
                        {card.type === 'cashback' ? '💰 Best for Cashback' : '✈️ Best for Travel Miles'}
                    </span>
                </div>

                {/* Stats Row */}
                <div className="card-row-stats">
                    <div className="card-stat">
                        <span className="card-stat-label">Annual Fee</span>
                        <span className="card-stat-value">{card.annualFee.split(' (')[0]}</span>
                    </div>
                    <div className="card-stat">
                        <span className="card-stat-label">
                            {card.type === 'cashback' ? 'Cashback Rate' : 'Miles Rate'}
                        </span>
                        <span className="card-stat-value" style={{ color: 'var(--primary)' }}>
                            {card.cashbackRate || card.milesRate}
                        </span>
                    </div>
                    {card.signupBonus && (
                        <div className="card-stat">
                            <span className="card-stat-label">Signup Bonus</span>
                            <span className="card-stat-value" style={{ color: 'var(--success)' }}>
                                {card.signupBonus}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Actions */}
            <div className="card-row-actions">
                <Link
                    href={card.applyUrl}
                    target="_blank"
                    className="btn btn-primary"
                >
                    Apply Now →
                </Link>
                <Link
                    href={`/cards/${card.id}`}
                    className="btn btn-secondary btn-sm"
                >
                    View Details
                </Link>
                {onCompare && (
                    <label className="compare-checkbox">
                        <input
                            type="checkbox"
                            checked={isComparing}
                            onChange={() => onCompare(card)}
                        />
                        <span>Compare</span>
                    </label>
                )}
            </div>
        </div>
    );
}
