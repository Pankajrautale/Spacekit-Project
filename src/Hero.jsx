// import React from 'react'
import { gsap } from 'gsap';
import React, { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import './Hero.css'
import Bag from './assets/bag.png'
import Lamps from './assets/sec-pic.png'
import Book from './assets/book.png'
import Bag2 from './assets/bag2.png'
import Rarrow from './assets/rightarrow.png'
import Snowfall from 'react-snowfall'
// gsap.registerPlugin(ScrollTrigger);

function Hero() {
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".topic h2", {
                y: -30,
                opacity: 0,
                duration: 2,
                scrollTrigger: {
                    trigger: ".topic h2", // ✅ more specific
                    start: "top 70%",     // ✅ triggers when h2 reaches 70% of viewport height
                    // toggleActions: "play none none reverse",
                    // markers: true // optional: shows visual markers for debugging
                }
            });
            gsap.from(".hero-heading h1", {
                y: -30,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".hero-heading h1", // ✅ more specific
                    start: "top 70%",     // ✅ triggers when h2 reaches 70% of viewport height
                    // toggleActions: "play none none reverse",
                    // markers: true // optional: shows visual markers for debugging
                }
            });
        });

        return () => ctx.revert();
    }, []);
    return (
        <>
            <section className='Hero'><Snowfall   color="grey"/>
                <div className="loop"> <marquee>
                Designed for your everyday adventures 
                      <span> . </span>  Designed for your everyday adventures 
                </marquee></div>

                <div className="hero-heading">
                    <h1>Explore our curated collection of high-quality products</h1>
                    <div className="heading2">
                        <p>Whether you're looking for a stylish new bag, a captivating book, or a perfect mug for your morning brew, we've got you covered.</p>

                    </div>
                </div>
                <div className="All-pic">
                    <div className="big">
                        <img src={Bag} />

                    </div>
                    <div className="img">
                        <img src={Lamps} />
                        <div className="topic">
                            <h2>Lightweight, durable, and perfect for any journey with our premium kits</h2>
                            <button>See Details <img src={Rarrow} style={{ width: '12px' }} /></button>
                        </div>
                    </div>
                    <div className="img"> <img src={Book} />
                        <div className="topic">
                            <h2>Tools to stay organized and on top of your goals every day.</h2>
                            <button>Plan Ahead  <img src={Rarrow} style={{ width: '12px' }} /> </button>
                        </div>
                    </div>
                    <div className="big">
                        <img src={Bag2} />
                        <div className="black-img">
                            <button>Learn More <img src={Rarrow} style={{ width: '12px' }} /> </button>
                        </div>
                    </div>

                </div>
            </section >


        </>
    )
}

export default Hero
