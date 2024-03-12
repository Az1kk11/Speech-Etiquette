import React from 'react'

import img1 from '../../image/1.png'
import img2 from '../../image/2.png'
import img3 from '../../image/3.png'
import img4 from '../../image/4.png'

import './style.css'

const Carusel: React.FC = () => {
    return (

        <div className="carusel">
            <div className="img-car-box">
                <img src={img1} alt="" />
            </div>
            <div className="img-car-box">
                <img src={img2} alt="" />
            </div>
            <div className="img-car-box">
                <img src={img3} alt="" />
            </div>
            <div className="img-car-box">
                <img src={img4} alt="" />
            </div>
        </div>

    )
}

export default Carusel