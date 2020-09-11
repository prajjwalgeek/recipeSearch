import React from 'react'
import IL1 from '../Assets/Images/Illustration1.png';
import IL2 from '../Assets/Images/Illustration2.png';
import IL3 from '../Assets/Images/Illustration3.png';
import IL4 from '../Assets/Images/Illustration4.png';

export default function Background() {
    return (
        <div className="backdrop">
            <img src={IL1} className="il1" alt="illustartion " />
            <img src={IL2} className="il2" alt="illustartion " />
            <img src={IL3} className="il3" alt="illustartion " />
            <img src={IL4} className="il4" alt="illustartion " />
        </div>
    )
}
