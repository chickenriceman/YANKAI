const fs = require('fs');
const cards = require('./cardwise/src/data/cards.json');

console.log(`Checking ${cards.length} cards...`);

cards.forEach(card => {
    if (!card.fees) console.error(`Card ${card.id} missing fees`);
    if (!card.fees?.currency) console.error(`Card ${card.id} missing fees.currency`);
    if (!card.requirements) console.error(`Card ${card.id} missing requirements`);
    if (!card.benefits) console.error(`Card ${card.id} missing benefits`);
    if (!card.highlights) console.error(`Card ${card.id} missing highlights`);

    // Check deep nested safety
    if (card.benefits?.cashback && !card.benefits.cashback.categories) console.error(`Card ${card.id} missing cashback categories`);
});

console.log('Validation complete.');
