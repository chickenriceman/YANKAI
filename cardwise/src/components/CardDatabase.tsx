'use client';

import { useState, useMemo } from 'react';
import { CreditCard } from '@/types';
import CardGrid from './CardGrid';

interface CardDatabaseProps {
  initialCards: CreditCard[];
}

export default function CardDatabase({ initialCards }: CardDatabaseProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBank, setSelectedBank] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');

  // Extract unique banks for filter dropdown
  const banks = useMemo(() => {
    const bankList = initialCards.map(card => card.bank);
    return ['All', ...Array.from(new Set(bankList)).sort()];
  }, [initialCards]);

  // Filter cards based on search term and filters
  const filteredCards = useMemo(() => {
    return initialCards.filter(card => {
      const matchesSearch = 
        card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.bank.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.highlights.some(h => h.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesBank = selectedBank === 'All' || card.bank === selectedBank;
      const matchesType = selectedType === 'All' || card.type === selectedType;

      return matchesSearch && matchesBank && matchesType;
    });
  }, [initialCards, searchTerm, selectedBank, selectedType]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search and Filter Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search Input */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Search Cards</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name, bank, or benefits..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg 
                className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Bank Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bank</label>
            <select
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              {banks.map(bank => (
                <option key={bank} value={bank}>{bank}</option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Card Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="All">All Types</option>
              <option value="cashback">Cashback</option>
              <option value="miles">Air Miles</option>
              <option value="rewards">RewardsPoints</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-sm text-gray-500">
          Showing {filteredCards.length} {filteredCards.length === 1 ? 'result' : 'results'}
        </div>
      </div>

      {/* Results Grid */}
      <CardGrid cards={filteredCards} />
    </div>
  );
}
