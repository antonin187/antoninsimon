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

    const cardDeplacement = event => {
        let cards = document.querySelectorAll('.cards');
        cards.forEach(element => {
            gsap.to(element, { position: 'absolute', x: event.pageX-(element.offsetWidth / 2), y: event.pageY + 20, duration: 0});
        });
    }

    window.addEventListener('mousemove', {handleWindowMouseMove, cardDeplacement});

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

    const onEnterSpanProfile = ({currentTarget}) => {
        currentTarget.classList.remove('spanHead')
        gsap.to(".spanHead", {opacity: 0.2, duration: 0.3, ease: "Power3.easeOut" });
        gsap.to(".profile-card", {opacity: 1, duration: 0.5, ease: "Power3.easeOut", rotate: -5, scale: 1.1});
    }
    const onLeaveSpanProfile = ({currentTarget}) => {
        currentTarget.classList.add('spanHead')
        gsap.to(".spanHead", {opacity: 1, duration: 0.3, ease: "Power3.easeOut" });
        gsap.to(".profile-card", {opacity: 0, duration: 0.5, ease: "Power3.easeOut", rotate: 0, scale: 1});
    }
    const onEnterSpanStudent = ({currentTarget}) => {
        currentTarget.classList.remove('spanHead')
        gsap.to(".spanHead", {opacity: 0.2, duration: 0.3, ease: "Power3.easeOut" });
        gsap.to(".student-card", {opacity: 1, duration: 0.5, ease: "Power3.easeOut", rotate: 5, scale: 1.1});
    }
    const onLeaveSpanStudent = ({currentTarget}) => {
        currentTarget.classList.add('spanHead')
        gsap.to(".spanHead", {opacity: 1, duration: 0.3, ease: "Power3.easeOut" });
        gsap.to(".student-card", {opacity: 0, duration: 0.5, ease: "Power3.easeOut", rotate: 0, scale: 1 });
    }
    const onEnterSpanDeveloper = ({currentTarget}) => {
        currentTarget.classList.remove('spanHead')
        gsap.to(".spanHead", {opacity: 0.2, duration: 0.3, ease: "Power3.easeOut"});
        gsap.to(".developer-card", {opacity: 1, duration: 0.5, ease: "Power3.easeOut", rotate: -5, scale: 1.1});
    }
    const onLeaveSpanDeveloper = ({currentTarget}) => {
        currentTarget.classList.add('spanHead')
        gsap.to(".spanHead", {opacity: 1, duration: 0.3, ease: "Power3.easeOut" });
        gsap.to(".developer-card", {opacity: 0, duration: 0.5, ease: "Power3.easeOut", rotate: 0, scale: 1 });
    }
    const onEnterSpanBasketball = ({currentTarget}) => {
        currentTarget.classList.remove('spanHead')
        gsap.to(".spanHead", {opacity: 0.2, duration: 0.3, ease: "Power3.easeOut"});
        gsap.to(".basketball-card", {opacity: 1, duration: 0.5, ease: "Power3.easeOut", rotate: 5, scale: 1.1});
    }
    const onLeaveSpanBasketball = ({currentTarget}) => {
        currentTarget.classList.add('spanHead')
        gsap.to(".spanHead", {opacity: 1, duration: 0.3, ease: "Power3.easeOut" });
        gsap.to(".basketball-card", {opacity: 0, duration: 0.5, ease: "Power3.easeOut", rotate: 0, scale: 1 });
    }

    const onEnterGrayScale = ({currentTarget}) => {
        // currentTarget.classList.add('grayscale')
        gsap.to(currentTarget, {filter: "grayscale(0%)", duration: 1, ease: "Power3.easeOut"})
        console.log("Enter")
    }
    const onLeaveGrayScale = async ({currentTarget}) => {
        gsap.to(currentTarget, {filter: "grayscale(100%)", duration: 1, ease: "Power3.easeOut"})
        console.log("Leave")
        // currentTarget.classList.remove('grayscale')
    }
    

//   const q = gsap.utils.selector(app);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  
  useEffect(() => {
    let ctx = gsap.context(() => {

        ScrollSmoother.create({
            smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
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

        gsap.to('.mockups', {transform: 'rotate(25deg)', scrollTrigger: {
            scrub: true,
        }})
        gsap.to('.mockups', {filter: "grayscale(100%)"})

    })
    return () => ctx.revert();
  }, []);

  return (
        <div id='smooth-wrapper'>
            <div id='smooth-content'>
            <div className='mouseIMGfollowerMJ'></div>
            <div className='mouseIMGfollowerJazzy'></div>
            <div className='mouseIMGfollowerShepard'></div>
                {/* <Navbar /> */}
                <div className='bodyContainer'>
                    {/* <div className='myName'>
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
                    </div> */}

                    <div className='headContainer' onMouseMove={cardDeplacement}>
                        <div className='headSpanContainer'>
                            <span className='spanHead antoninSpan' onMouseEnter={onEnterSpanProfile} onMouseLeave={onLeaveSpanProfile}>Antonin Simon</span>
                            <span className='spanHead'>, je suis </span>
                            <span className='spanHead studentSpan' onMouseEnter={onEnterSpanStudent} onMouseLeave={onLeaveSpanStudent}>étudiant</span>
                            <span className='spanHead'>, </span> 
                            <span className='spanHead developerSpan' onMouseEnter={onEnterSpanDeveloper} onMouseLeave={onLeaveSpanDeveloper}>développeur</span>
                            <span className='spanHead'>  et </span> 
                            <span className='spanHead basketballSpan' onMouseEnter={onEnterSpanBasketball} onMouseLeave={onLeaveSpanBasketball}>passionné de basketball</span>
                            <span className='spanHead'>.</span>
                        </div>
                        <img className='cards profile-card' src={require('../assets/cards/profile-card-black.png')} />
                        <img className='cards student-card' src={require('../assets/cards/student-card.png')} />
                        <img className='cards developer-card' src={require('../assets/cards/developer-card.png')} />
                        <img className='cards basketball-card' src={require('../assets/cards/basketball-card.png')} />
                    </div>

                    <div className='currentProjectContainer'>
                        <div className='currentProjectDescrContainer'>
                            <div className='smallText descrCurrentProject'>
                            <div className='samllText'>Dernier projet en cours</div>
                            <span className='chefaim'>Chefaim</span>
                            <div className='tagContainer'>
                                <div>

                                </div>
                            </div>
                            </div>
                            {/* <div className='mediumText'>Mon projet en cours</div>
                            <div className='hugeText chefaim'>Chefaim</div>
                            <div className='mediumText'>Application mobile du cuisine et de gestion de ressources dans son réfrigirateur</div> */}
                        </div>
                        <div className='currentProjectImgaesContainer'>
                            <img onMouseEnter={onEnterGrayScale} onMouseLeave={onLeaveGrayScale} className='mockups' src={require('../assets/mockups/scan.png')}></img>
                            <img onMouseEnter={onEnterGrayScale} onMouseLeave={onLeaveGrayScale} className='mockups' src={require('../assets/mockups/Recette_1.png')}></img>
                            <img onMouseEnter={onEnterGrayScale} onMouseLeave={onLeaveGrayScale} className='mockups' src={require('../assets/mockups/Homepage Recettes.png')}></img>
                        </div>
                    </div>

                    <div className='separatorLineContainer'>
                        <span className='line'></span>
                    </div>
                    <div className='subSeparatorLine'>
                        <div>Mes</div>
                        <div>Autres</div>
                        <div>Projets</div>
                    </div>

                    <section>
                        {/* CAVE
                        AirZen
                        Banque Alimenatire
                        App de transports
                        BabyFun */}
                        <section className='sectionProjects1'>
                           <div className='CAVEcontainer' onMouseEnter={() => {gsap.to('body', {background: '#FF99A8', duration: 0.5})}}
                        onMouseLeave={() => {gsap.to('body', {background: 'white', duration: 0.5})}}
                        >
                            <img src={require('../assets/CAVE/Panel.png')} data-speed="auto" className='CAVE_img' alt="" />
                            <div>Tags</div>
                            <div>CAVE</div>
                        </div> 

                        <div className='AirZencontainer' onMouseEnter={() => {gsap.to('body', {background: '#90C7CF', duration: 0.5})}}
                        onMouseLeave={() => {gsap.to('body', {background: 'white', duration: 0.5})}}
                        >
                            <img src={require('../assets/AirZen/Panel.png')} data-speed="auto" className='AirZen_img' alt="" />
                            <div>Tags</div>
                            <div>CAVE</div>
                        </div>
                        </section>
                        
                        {/* <section className='AirZenSection'>
                            
                        </section> */}

                        

                    </section>

                    <div className='separatorLineContainer'>
                        <span className='line'></span>
                    </div>
                    <div className='subSeparatorLine'>
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

                    {/* TODO Delete marger */}
                    <div className='marger'>hello</div>
                </div>
            </div>
        </div>
  );
}
