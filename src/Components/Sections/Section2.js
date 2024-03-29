import React from 'react'
import './Section2.css'
import img1 from '../../Assets/sec-2-i-1.jpg'
import img2 from '../../Assets/s-2-i-2.png'


export default function Section2() {
    return (
        <div className='sec-2'>
            <div className='s-2-c'>
                <h2>Über uns.</h2>
                <h3>“People first. Creating value.”</h3>

                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla rerum adipisci sint sequi, numquam sunt atque ipsam culpa facilis inventore, porro repudiandae? Nam ullam numquam ipsam et facere eum dolores commodi unde necessitatibus, harum quos consequatur rem provident quidem minus quis laborum laudantium quia culpa reprehenderit fuga quisquam ea consectetur deleniti. Nam eum ullam omnis, rerum iusto ipsa consequatur aliquam veniam perspiciatis, molestiae dolore dolorem, architecto suscipit ea cumque ratione iste quam dolores quia autem sunt quidem deleniti! Et sint ullam soluta.
                </p>
                <button><i class="fa fa-play-circle"></i> Play Video</button>
                <button className='btn-1'>Kontakt</button>

            </div>
            <div className='s-2-i'>
                <div className='im-1'>
                    <img src={img1} alt='' />
                    <h2>Andreas Küffner</h2>
                    <p>Founder</p>
                </div>

                <div className='im-2'><img src={img2} alt='' /></div>

            </div>
        </div>
    )
}