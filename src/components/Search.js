import React, { useState, useEffect } from 'react'
import className from 'classnames';
import SrhIcon from '../Assets/Icons/Icon feather-search.png';

export default function Search({ text, textChange, submitForm }) {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (open) {
            console.log('opened');
        }
    }, [open])
    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(text);
    }
    return (
        <div className="header">
            <div className="search-bar">
                <div className="input-box">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input type="text" placeholder="Search your favourite recipe..." value={text} onChange={(e) => textChange(e)} className={className({
                            "search-open": open
                        })} />
                        <img src={SrhIcon} alt="search" className="srh-icon" onClick={() => setOpen(!open)} />
                    </form>
                </div>
                <p className={className({
                    'hide-search': open
                })}>Search your favourite recipe...</p>
            </div>
        </div>
    )
}
