import React, { useEffect } from 'react';

import './Product.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cross from './assets/Cross.png';
import Bag from './assets/bag3.png';
import Book from './assets/book3.png';
import Mug from './assets/Mug2.png';
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Product() {
    useEffect(() => {
        let ctx = gsap.context(() => {

            gsap.from(".Product-list", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".box",   // 👈 target this section only
                    start: "top 80%",
                    //   end: "bottom 60%",
                    //   toggleActions: "play none none reverse",
                    // 👈 optional, shows start/end markers
                },
            });
            
        });

        return () => ctx.revert(); // cleanup GSAP context
    }, []);

    return (
        <section className='Product-sec'>
            <div className="Product-content">
                <div className="Product-topic">
                    <h2><img src={Cross} alt="cross" loading="eager" />Our products</h2>
                    <p>All collection</p>
                </div>  
              <Link to='/product'> <button>SHOP NOW</button> </Link>  
            </div>

            <div className="Product-list">
                <div className="box">
                    <div className="BOx-img">
                      <img src={Bag} alt="bag" loading="lazy" />
                    </div>
                    <h2>EXPLORE BAG<br /> <span>WHITE / BLACK</span></h2>
                </div>

                <div className="box">
                    <div className="BOx-img">
                        <img src={Book} alt="book" loading="lazy" />
                    </div>
                    <h2>Journey within book<br /><span>WHITE / ORANGE</span></h2>
                </div>

                <div className="box">
                    <div className="BOx-img">
                        <img src={Mug} alt="mug" loading="lazy" />
                    </div>
                    <h2>Morning brew mug<br /><span>WHITE / ORANGE</span></h2>
                </div>
            </div>
        </section>
    );
}

export default Product;
