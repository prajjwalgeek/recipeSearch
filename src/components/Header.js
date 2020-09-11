import React from 'react'
import Search from './Search';

export default function Header({ text, textChange, submitForm, category }) {
    return (
        <div className="header-container">
            <Search text={text} textChange={textChange} submitForm={submitForm} />
            <div className="category">
                <div className="category-inner">
                    <p>CATEGORY</p>
                    <h2>{category}</h2>
                </div>
            </div>
        </div>
    )
}
