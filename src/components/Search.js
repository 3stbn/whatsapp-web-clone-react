import React from 'react'

export default function Search({ search, handleSearch }) {
    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search or start a new chat"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    )
}
