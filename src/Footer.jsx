import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import './Footer.css'
import Logo from './assets/logo.png'
import Twitter from './assets/twitter.png'
import Fb from './assets/fb.png'
import Insta from './assets/insta.png'
import Github from './assets/github.png'
function Footer() {

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".Footer-sec .col", {
                y: 20,
                opacity: 0,
                //   duration: 0.9,
                scrollTrigger: {
                    trigger: ".Footer-sec", // trigger whole footer
                    start: "top 70%",       // animation starts when footer hits 70% of screen
                    toggleActions: "play none none none",
                    // markers: true, // use this for debugging
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section className='Footer-sec'>
                <div className="logo">
                    <a href='#'> <img src={Logo} />

                    </a>
                </div>

                <div className="col">
                    <div className="col1"><h2>Explore</h2>
                        <ul>
                            <li>Home</li>
                            <li>Products</li>
                        </ul>

                    </div>
                    <div className="col1">
                        <h2>Supports</h2>
                        <ul>
                            <li>
                                FAQ
                            </li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col1">
                        <h2>Others</h2>
                        <ul>
                            <li>Style Guide</li>
                            <li>Changelog</li>
                        </ul>
                    </div>
                    <div className="col1">
                        <h2>Utility</h2>
                        <ul>
                            <li>Instruction</li>
                            <li>License</li>
                        </ul>
                    </div>
                </div>
                <div className="social-link">
                    <a href='https://x.com/'><img src={Twitter} />  </a>
                    <a href='https://www.facebook.com/'><img src={Fb} />  </a>
                    <a href='https://www.instagram.com/'><img src={Insta} />  </a>
                    <a href='https://github.com/'><img src={Github} />  </a>
                    {/* <a href='#'><img src={Twitter} />  </a> */}
                </div>
                <div className="copyRight">
                    <h2> License   |    Style Guide   |   Customize</h2>
                </div>
                <div className="designer">
                    <h3>Copyright ©

                        Developed by Pankaj Rautela

                    </h3>
                </div>
            </section>
        </>
    )
}

export default Footer
