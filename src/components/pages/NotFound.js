import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h3>The Page you are looking for is not found.</h3>
            <Link to="/">Get Back to The Home Page</Link>
        </div>
    )
}
