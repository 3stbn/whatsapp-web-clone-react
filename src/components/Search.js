import React from 'react'

export default function Search({ search, setSearch }) {
    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search or start a new chat"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}
