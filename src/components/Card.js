import React, { useState } from 'react'
import className from 'classnames';
import Heart from '../Assets/Icons/Icon feather-heart.png';
import Clock from '../Assets/Icons/Icon feather-clock.png';


export default function Card({ dish }) {

    const [full, setFull] = useState(false);

    return (
        <div className="card" onMouseEnter={() => setFull(true)} onMouseLeave={() => setFull(false)}>
            <div className="card-img">
                <div className="tag">Calories: {dish.recipe.calories.toFixed(2)}</div>
                <img src={dish.recipe.image} alt="food" className="food-image" />
            </div>
            <div className="card-data">
                <div className="card-data-top">
                    <div className="card-top-left">
                        <h2 className="card-title">{dish.recipe.label}</h2>
                        <div className="card-timing">
                            <img src={Clock} alt="clock-icon" />
                            <p className="time">{parseInt(Math.random() * (40 - 15) + 15)} mins</p>
                        </div>
                    </div>
                    <div className="card-top-right">
                        <img src={Heart} alt="heart-icon" className="heart" />
                    </div>
                </div>
                <div className="card-desc">
                    {dish.recipe.healthLabels.map((item, index) => <p key={index}>{item}</p>)}
                </div>
            </div>
            <div className={className("card-hover-container", {
                "card-hover-container-show": full
            })}>
                <div className={className("card-hover")}>
                    <a href={dish.recipe.url} target="_blank" rel="noopener noreferrer">VIEW MORE</a>
                </div>
            </div>
        </div>
    )
}
