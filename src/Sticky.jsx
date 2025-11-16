import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Bag from './assets/menbg.png'
import Book2 from './assets/book2.png'
import Menbg2 from './assets/menbg2.png'
import Mug from './assets/mug.png'
import './Sticky.css'
function Sticky() {
    useEffect(() => {
        let ctx = gsap.context(() => {
            // gsap.from('Sticky-sec .left-sec', {
            //     scrollTrigger: {
            //         trigger:".Sticky-sec",
            //         //   trigger:"#page3 ",
            //         // scroller:"body",
            //         start: "top 0",
            //         end:"top -150%",
            //         scrub: 2,
            //         pin:true
            //     }

            // })

        })
        return () => ctx.revert();
    }, [])

    return (
        <>
            <section className='Sticky-sec'>
                <div className="left-sticky">

                </div>
                <div className="right-sec">
                    <img src={Bag}  />
                    <div className="content2">
                        <p>Ideal for quiet evenings</p>
                        <h1>Mindful Living in Every Page</h1>
                        <h2>Whether you're looking to reflect on your past, gain clarity on your goals, or simply find a few moments of calm in your busy day, this beautifully designed guide will inspire and motivate.
                            Let Journey Within be the companion that helps you navigate life’s ups and downs with grace and mindfulness.</h2>
                    </div>
                    <div className="book-img2">
                        <img src={Book2} />
                    </div>
                    <div className="sec-bag">
                        <img src={Menbg2} />
                    </div>
                    <div className="content2">
                        <p>quality, simplicity, and comfort
                            Simplicit</p>
                        <h1>Simplicity Meets Sophistication</h1>
                        <h2>Designed for those who appreciate the finer things in life, this mug combines functionality with sleek, modern design. Its smooth ceramic surface is easy to clean and resistant to stains, while the comfortable handle ensures a perfect grip every time.<br></br>
                            Whether you're enjoying a quiet morning at home or a quick break at the office, the Morning Brew Mug adds a touch of sophistication to your daily routine.</h2>

                    </div>
                     <div className="book-img2">
                        <img src={Mug} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sticky