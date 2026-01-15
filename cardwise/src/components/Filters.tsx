'use client';

interface FiltersProps {
    country: string;
    type: string;
    sortBy: string;
    onCountryChange: (value: string) => void;
    onTypeChange: (value: string) => void;
    onSortChange: (value: string) => void;
}

export default function Filters({
    country,
    type,
    sortBy,
    onCountryChange,
    onTypeChange,
    onSortChange,
}: FiltersProps) {
    return (
        <div className="sidebar">
            {/* Card Type Filter */}
            <div className="filter-section">
                <h3 className="filter-title">Card Type</h3>
                <div className="filter-options">
                    <label className="filter-option">
                        <input
                            type="radio"
                            name="type"
                            checked={type === 'all'}
                            onChange={() => onTypeChange('all')}
                        />
                        <span>All Cards</span>
                    </label>
                    <label className="filter-option">
                        <input
                            type="radio"
                            name="type"
                            checked={type === 'cashback'}
                            onChange={() => onTypeChange('cashback')}
                        />
                        <span>💰 Cashback</span>
                    </label>
                    <label className="filter-option">
                        <input
                            type="radio"
                            name="type"
                            checked={type === 'miles'}
                            onChange={() => onTypeChange('miles')}
                        />
                        <span>✈️ Travel Miles</span>
                    </label>
                </div>
            </div>

            {/* Country Filter */}
            <div className="filter-section">
                <h3 className="filter-title">Country</h3>
                <div className="filter-options">
                    <label className="filter-option">
                        <input
                            type="radio"
                            name="country"
                            checked={country === 'all'}
                            onChange={() => onCountryChange('all')}
                        />
                        <span>All Countries</span>
                    </label>
                    <label className="filter-option">
                        <input
                            type="radio"
                            name="country"
                            checked={country === 'MY'}
                            onChange={() => onCountryChange('MY')}
                        />
                        <span>🇲🇾 Malaysia</span>
                    </label>
                    <label className="filter-option">
                        <input
                            type="radio"
                            name="country"
                            checked={country === 'SG'}
                            onChange={() => onCountryChange('SG')}
                        />
                        <span>🇸🇬 Singapore</span>
                    </label>
                </div>
            </div>

            {/* Sort By */}
            <div className="filter-section">
                <h3 className="filter-title">Sort By</h3>
                <select
                    className="select"
                    style={{ width: '100%' }}
                    value={sortBy}
                    onChange={(e) => onSortChange(e.target.value)}
                >
                    <option value="featured">Featured</option>
                    <option value="rating">Highest Rated</option>
                    <option value="name">Name (A-Z)</option>
                </select>
            </div>
        </div>
    );
}
