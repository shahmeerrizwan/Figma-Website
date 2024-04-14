import React from 'react'
import './Section3.css'
import img1 from '../../Assets/Ellipse 33.png'
import img2 from '../../Assets/Ellipse 34.png'
import img3 from '../../Assets/Ellipse 35.png'
import img4 from '../../Assets/Ellipse 36.png'
import img5 from '../../Assets/Ellipse 37.png'
import img6 from '../../Assets/Ellipse 38.png'
import img7 from '../../Assets/Ellipse 39.png'
import img8 from '../../Assets/Ellipse 40.png'
import img9 from '../../Assets/Ellipse 41.png'


export default function Section3() {
    return (
        <div className='t-s-l'>
            <div className='text-1'>

                <p>14 <span className='span-1'>Unternehmens-<br />
                    beteiligungen</span></p>
                <p>22<span className='span-1'>laufende<br />
                    Projekte</span></p>

                <p>34<span className='span-1'>Experten/Talente<br />
                    behind the brand</span></p>

                <p>90<span className='span-1'>+Jahre gebündelte<br />
                    Erfahrung</span></p>

            </div>
            <div className='s-c-p'>

                <h1>Behind the brand</h1>
                <p>Hinter jeder großen Unternehmung trägt ein noch viel stärkeres Team von <br />
                    Talenten und passionierten Menschen zum Erfolg bei.</p>
                <div className='img-all'>
                    <img src={img1} alt='..' />
                    <img src={img2} alt='..' />
                    <img src={img3} alt='..' />
                    <img src={img4} alt='..' />
                    <img src={img5} alt='..' />
                    <img src={img6} alt='..' />
                    <img src={img7} alt='..' />
                    <img src={img8} alt='..' />
                    <img src={img9} alt='..' />
                    <span> ...</span>
                </div>
            </div>
        </div>
    )
}
