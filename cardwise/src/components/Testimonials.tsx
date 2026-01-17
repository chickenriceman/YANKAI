'use client';

const testimonials = [
    {
        id: 1,
        name: 'Ahmad R.',
        location: 'Kuala Lumpur',
        rating: 5,
        quote: 'Found the perfect cashback card through CardWise. The comparison tool made it so easy to see all the benefits side by side!',
        avatar: 'AR',
    },
    {
        id: 2,
        name: 'Sarah L.',
        location: 'Penang',
        rating: 5,
        quote: 'I was able to compare travel cards and found one that gives me free airport lounge access. Saved me hours of research!',
        avatar: 'SL',
    },
    {
        id: 3,
        name: 'Kevin T.',
        location: 'Johor Bahru',
        rating: 5,
        quote: 'The detailed reviews helped me understand the fine print. Now I earn 5% cashback on all my petrol purchases.',
        avatar: 'KT',
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="testimonial-stars">
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={`star ${star <= rating ? '' : 'empty'}`}>
                    ★
                </span>
            ))}
        </div>
    );
}

export default function Testimonials() {
    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="section-title">Hear From Our Users</h2>
                <p className="section-subtitle">
                    Join thousands of Malaysians who found their perfect credit card
                </p>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <StarRating rating={testimonial.rating} />
                            <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">{testimonial.avatar}</div>
                                <div>
                                    <div className="testimonial-name">{testimonial.name}</div>
                                    <div className="testimonial-location">{testimonial.location}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
