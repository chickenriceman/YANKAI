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
        <div
            className="card p-4 mb-8 flex flex-wrap gap-4 items-center"
            style={{ boxShadow: 'none', border: '1px solid var(--border)' }}
        >
            {/* Country Filter */}
            <div className="flex items-center gap-3">
                <label className="text-sm font-medium" style={{ color: 'var(--foreground-muted)' }}>
                    Country
                </label>
                <select
                    value={country}
                    onChange={(e) => onCountryChange(e.target.value)}
                    className="select"
                >
                    <option value="all">🌏 All Countries</option>
                    <option value="MY">🇲🇾 Malaysia</option>
                    <option value="SG">🇸🇬 Singapore</option>
                </select>
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-3">
                <label className="text-sm font-medium" style={{ color: 'var(--foreground-muted)' }}>
                    Type
                </label>
                <select
                    value={type}
                    onChange={(e) => onTypeChange(e.target.value)}
                    className="select"
                >
                    <option value="all">All Types</option>
                    <option value="cashback">💰 Cashback</option>
                    <option value="miles">✈️ Miles</option>
                </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3 ml-auto">
                <label className="text-sm font-medium" style={{ color: 'var(--foreground-muted)' }}>
                    Sort by
                </label>
                <select
                    value={sortBy}
                    onChange={(e) => onSortChange(e.target.value)}
                    className="select"
                >
                    <option value="featured">Featured</option>
                    <option value="rating">Highest Rated</option>
                    <option value="name">Name A-Z</option>
                </select>
            </div>
        </div>
    );
}
