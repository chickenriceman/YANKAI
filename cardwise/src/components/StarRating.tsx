'use client';

interface StarRatingProps {
    rating: number;
    maxRating?: number;
    showScore?: boolean;
}

export default function StarRating({ rating, maxRating = 5, showScore = true }: StarRatingProps) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="star-rating">
            {/* Full stars */}
            {[...Array(fullStars)].map((_, i) => (
                <span key={`full-${i}`} className="star">★</span>
            ))}

            {/* Half star */}
            {hasHalfStar && (
                <span className="star" style={{ position: 'relative' }}>
                    <span style={{ color: '#E0E0E0' }}>★</span>
                    <span style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        overflow: 'hidden',
                        width: '50%',
                        color: 'var(--star-yellow)'
                    }}>★</span>
                </span>
            )}

            {/* Empty stars */}
            {[...Array(emptyStars)].map((_, i) => (
                <span key={`empty-${i}`} className="star empty">★</span>
            ))}

            {/* Score */}
            {showScore && (
                <span className="star-score">{rating.toFixed(1)}</span>
            )}
        </div>
    );
}
