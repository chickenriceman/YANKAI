import { Hero, CategoryTiles, FeaturedPromotions, Testimonials, BlogPreview, Footer } from '@/components';
import cardsData from '@/data/cards.json';
import { CreditCard } from '@/types';

const cards = cardsData as CreditCard[];
const featuredCards = cards.filter(card => card.featured).slice(0, 4);

export default function Home() {
  return (
    <>
      {/* Hero Section - RinggitPlus Style */}
      <Hero />

      {/* Category Navigation Tiles */}
      <CategoryTiles />

      {/* Featured Credit Card Promotions */}
      <FeaturedPromotions cards={featuredCards} />

      {/* User Testimonials */}
      <Testimonials />

      {/* Blog Preview Section */}
      <BlogPreview />

      {/* Enhanced Footer */}
      <Footer />
    </>
  );
}
