import React from 'react';

function FilterBar({ filters, setFilters }) {
    return (
        <div className="max-w-4xl mx-auto mb-8 bg-white p-4 rounded-xl shadow border border-emerald-100">
            <h3 className="text-lg font-semibold mb-4 text-emerald-700">🔍 Filter Messages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                    type="text"
                    placeholder="Filter by Sender"
                    value={filters.sender}
                    onChange={(e) => setFilters(prev => ({ ...prev, sender: e.target.value }))}
                    className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
                <input
                    type="text"
                    placeholder="Filter by Receiver"
                    value={filters.receiver}
                    onChange={(e) => setFilters(prev => ({ ...prev, receiver: e.target.value }))}
                    className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
                <input
                    type="text"
                    placeholder="Message includes (e.g., board name)"
                    value={filters.message}
                    onChange={(e) => setFilters(prev => ({ ...prev, message: e.target.value }))}
                    className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
            </div>
        </div>
    );
}

export default FilterBar;
