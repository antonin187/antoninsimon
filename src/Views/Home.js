import './Home.css';
import { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from 'gsap/ScrollSmoother';
import Navbar from '../Components/NavBar';


// IMAGE
import profilPic from '../assets/profil_pic.jpg'
import chefaimPres from '../assets/CHEFAIM_Presentation.png'


// TODO remove mousefollow when it's not necessarry

export default function Home() {

    const handleWindowMouseMove = event => {
        gsap.to('.mouseIMGfollowerMJ', { position: 'absolute', x: event.pageX-125, y: event.pageY-200});
        gsap.to('.mouseIMGfollowerJazzy', { position: 'absolute', x: event.pageX-125, y: event.pageY-200});
        gsap.to('.mouseIMGfollowerShepard', { position: 'absolute', x: event.pageX-125, y: event.pageY-200});
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    const onEnterMJ = () => {
        gsap.to('.mouseIMGfollowerMJ', { borderRadius: '20px', opacity: 1, duration: 0.7, ease: "Power3.easeOut" });
    };
    const onEnterJazzy = () => {
        gsap.to('.mouseIMGfollowerJazzy', { borderRadius: '20px', opacity: 1, duration: 0.7, ease: "Power3.easeOut" });
    };
    const onEnterShepard = () => {
        gsap.to('.mouseIMGfollowerShepard', { borderRadius: '20px', opacity: 1, duration: 0.7, ease: "Power3.easeOut" });
    };

    const onLeaveMJ = () => {
        gsap.to('.mouseIMGfollowerMJ', { borderRadius: '60px', opacity: 0, duration: 0.7, ease: "Power3.easeOut" });
    };
    const onLeaveJazzy = () => {
        gsap.to('.mouseIMGfollowerJazzy', { borderRadius: '60px', opacity: 0, duration: 0.7, ease: "Power3.easeOut" });
    };
    const onLeaveShepard = () => {
        gsap.to('.mouseIMGfollowerShepard', { borderRadius: '60px', opacity: 0, duration: 0.7, ease: "Power3.easeOut" });
    };


//   const q = gsap.utils.selector(app);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  
  useEffect(() => {
    let ctx = gsap.context(() => {

        ScrollSmoother.create({
            smooth: 3, // how long (in seconds) it takes to "catch up" to the native scroll position
            effects: true, // looks for data-speed and data-lag attributes on elements
            content: "#smooth-content",
            smoothTouch: 0.1,
          });

        var tlName = gsap.timeline();
        tlName.to('.lett1', {opacity: 1, y: 0, duration: 1, ease: "Power3.easeOut"}, .1);
        tlName.to('.lett2', {opacity: 1, y: 0, duration: 1, ease: "Power3.easeOut"}, .18);
        tlName.to('.lett3', {opacity: 1, y: 0, duration: 1, ease: "Power3.easeOut"}, .26);
        tlName.to('.lett4', {opacity: 1, y: 0, duration: 1, ease: "Power3.easeOut"}, .34);
        tlName.to('.lett5', {opacity: 1, y: 0, duration: 1, ease: "Power3.easeOut"}, .42);
        tlName.to('.lett6', {opacity: 1, y: 0, duration: 1, ease: "Power3.easeOut"}, .5);
        tlName.to('.lett7', {opacity: 1, y: 0, duration: 1, ease: "Power3.easeOut"}, .58);

        var emojiTL = gsap.timeline( {
            scrollTrigger: {
                trigger: '.interestsContainer',
                scrub: true,
                pin: '.bodyContainer',
                start: "center center",
                end: "+=500"
            }
        })
        emojiTL.to('.basketballEmoji', {opacity: 1, duration: 5}, 2);
        emojiTL.to('.computerEmoji', {opacity: 1, duration: 5}, 4);
        emojiTL.to('.trophyEmoji', {opacity: 1, duration: 5}, 6);
        emojiTL.to('.pencilEmoji', {opacity: 1, duration: 5}, 8);
        emojiTL.to('.headphonesEmoji', {opacity: 1, duration: 5}, 10);
        emojiTL.to('.phoneEmoji', {opacity: 1, duration: 5}, 12);

    })
    return () => ctx.revert();
  }, []);

  return (
        <div id='smooth-wrapper'>
            <div id='smooth-content'>
            <div className='mouseIMGfollowerMJ'></div>
            <div className='mouseIMGfollowerJazzy'></div>
            <div className='mouseIMGfollowerShepard'></div>
                <Navbar />
                <div className='bodyContainer'>
                    <div className='myName'>
                        <span className='myNameSpan lett1'>W</span>
                        <span className='myNameSpan lett2'>E</span>
                        <span className='myNameSpan lett3'>L</span>
                        <span className='myNameSpan lett4'>C</span>
                        <span className='myNameSpan lett5'>O</span>
                        <span className='myNameSpan lett6'>M</span>
                        <span className='myNameSpan lett7'>E</span>
                    </div>


                    <section className='containerProfilPic'>
                        <img src={profilPic} data-speed="auto" className='profilePic' alt="" />
                    </section>

                    <div className='subjectContainer'>
                        <div className='subjectImgContainer'>
                            <img className='chefaimImg' src={chefaimPres} alt=''/>
                        </div>
                    </div>


                    <div className='separatorLineContainer'>
                        <span className='line'></span>
                    </div>

                    <div className='wAMContainer'>
                        <div>What</div>
                        <div>About</div>
                        <div>Me</div>
                    </div>

                    <div className='myPresentation'>
                        <div className='mePresentation'>Antonin SIMON, 20, Bordeaux</div>
                        <div className='descriptionPresentation'>Étudiant en informatique, c'est mon attrait pour la création qui m'a poussé vers le développement. Véritablement passionné, j'adore expérimenter à travers le code, et me faire plaisir. <img src={require("../assets/happy_face.png")} alt='' className='happyFace'/></div>

                        <div className='decouvrirProjet'><img src={require("../assets/right-arrow.png")} /><span>Découvrir mes projets</span></div>
                    </div>

                    <section className='citationSection' onMouseMove={handleWindowMouseMove}>
                        {/* <div className='inspirationnal'>
                            <span>"Inspirationnal" (défilement avec emoji bulle)</span>
                        </div> */}
                        <div className='citationContainerRight'>
                            <div className='citation citRight' onMouseEnter={onEnterMJ} onMouseLeave={onLeaveMJ} onMouseMove={handleWindowMouseMove}>
                                “Il faut se fixer des buts avant de pouvoir les atteindre.”
                            </div>
                            <span className='citLibelle citRight'>&#8212; Michael Jordan, NBA Hall Of Famer.</span>
                        </div>
                        <div className='citationContainerLeft'>
                            <div className='citation citLeft' onMouseEnter={onEnterJazzy} onMouseLeave={onLeaveJazzy} onMouseMove={handleWindowMouseMove}>
                                “Connaître mes faiblesses est ma plus grande force.”
                            </div>
                            <span className='citLibelle citLeft'>&#8212; Jazzy Bazz, artiste Hip-Hop</span>
                        </div>
                        <div className='citationContainerRight'>
                            <div className='citation citRight' onMouseEnter={onEnterShepard} onMouseLeave={onLeaveShepard} onMouseMove={handleWindowMouseMove}>
                                “Pour moi, l'essentiel est toujours de démocratiser l'art, et de prendre le risque de le faire.”
                            </div>
                            <span className='citLibelle citRight'>&#8212; Shepard Fairay, street artiste</span>
                        </div>
                    </section>

                    <div className='interestsContainer'>
                        <div className='interestsCenterDiv'>
                            <video autoPlay loop muted className='memoji'>
                                <source src={require('../assets/memoji_reversed.mp4')} type="video/mp4" />
                            </video>
                        <div className='interestsText'>J'ai plusieurs passions.</div>
                        </div>
                        <img className='interestsImg basketballEmoji' src={require('../assets/basketball_emoji.png')} />
                        <img className='interestsImg computerEmoji' src={require('../assets/computer_emoji.png')} />
                        <img className='interestsImg pencilEmoji' src={require('../assets/pencil_emoji.png')} />
                        <img className='interestsImg headphonesEmoji' src={require('../assets/headphones_emoji.png')} />
                        <img className='interestsImg trophyEmoji' src={require('../assets/trophy_emoji.png')} />
                        <img className='interestsImg phoneEmoji' src={require('../assets/phone_emoji.png')} />
                    </div>
                    {/* <div className='testCircleContainer'>
                        <div className='testCircle'></div>
                    </div> */}

                    {/* TODO Delete marger */}
                    <div className='marger'>hello</div>
                </div>
            </div>
        </div>
  );
}
