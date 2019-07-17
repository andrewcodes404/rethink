import React from 'react'
import iconData from './iconData'
import { StyledIconBar } from './iconBarStyle'
const IconBar = () => (
    <StyledIconBar data-aos="new-animation">
        <div className="icon-bar-content">
            {iconData.map((el, index) => (
                <div key={index} className="icon-card">
                    <div className="card-img">
                        <img
                            src={`./static/icons/${el.img}-white.svg`}
                            alt=""
                        />
                    </div>
                    <div className="card-text">
                        <h4>{el.text}</h4>
                    </div>
                </div>
            ))}
        </div>
    </StyledIconBar>
)
export default IconBar
