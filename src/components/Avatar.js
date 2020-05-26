import React from 'react'

export default function Avatar({ user, showName }) {
    return (
        <div className="avatar-component">
            <img className="avatar" src={user.avatar} alt="" />
            {showName && <h3 className="avatar-title">{user.name}</h3>}
        </div>
    )
}
