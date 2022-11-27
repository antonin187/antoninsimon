import './Home.css';
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from 'gsap/ScrollSmoother';
import ImageSwapper from '../Components/ImageSwapper';

// Swapper Communication Positive
import HomePageCP from '../assets/AirZen/commpositive/HomePage.png'
import TableauCP from '../assets/AirZen/commpositive/TableauExpression.png'
import PodcastsCP from '../assets/AirZen/commpositive/Podcasts.png'
import CitationsCP from '../assets/AirZen/commpositive/Citations.png'

//Swapper CAVE
import AllProductsCAVE from '../../src/assets/CAVE/CAVE_allproducts.PNG'
import MapCAVE from '../../src/assets/CAVE/CAVE_map.PNG'
import AddProductCAVE from '../../src/assets/CAVE/CAVE_addproduct.PNG'
import ProductCAVE from '../../src/assets/CAVE/CAVE_product.PNG'

// TODO remove mousefollow when it's not necessarry

export default function Home() {

    const arrayPicturesCP = [HomePageCP, TableauCP, PodcastsCP, CitationsCP]
    const arrayPicturesCAVE = [AllProductsCAVE, MapCAVE, AddProductCAVE, ProductCAVE]

    const cardDeplacement = event => {
        let cards = document.querySelectorAll('.cards');
        cards.forEach(element => {
            gsap.to(element, { position: 'absolute', x: event.pageX-(element.offsetWidth / 2), y: event.pageY - 20, duration: 0});
        });
    };

    const mouseFollowerDeplacement = event => {
        gsap.to(".CAVEFollower", { position: 'absolute', x: event.pageX + 20, y: event.pageY + 20, duration: 0})
        gsap.to(".CPFollower", { position: 'absolute', x: event.pageX + 20, y: event.pageY + 20, duration: 0})
    }

    window.addEventListener('mousemove', {cardDeplacement});
    window.addEventListener('mousemove', {mouseFollowerDeplacement});

    const onEnterSpanProfile = ({currentTarget}) => {
        currentTarget.classList.remove('spanHead')
        gsap.to(".spanHead", {opacity: 0.2, duration: 0.3, ease: "Power3.easeOut" });
        gsap.to(".profile-card", {display: "block", opacity: 1, duration: 0.5, ease: "Power3.easeOut", rotate: -5, scale: 1.1});
    }
    const onLeaveSpanProfile = ({currentTarget}) => {
        currentTarget.classList.add('spanHead')
        gsap.to(".spanHead", {opacity: 1, duration: 0.3, ease: "Power3.easeOut" });
        gsap.to(".profile-card", {display: "none", opacity: 0, duration: 0.5, ease: "Power3.easeOut", rotate: 0, scale: 1});
    }
    const onEnterSpanStudent = ({currentTarget}) => {
        currentTarget.classList.remove('spanHead')
        gsap.to(".spanHead", {opacity: 0.2, duration: 0.3, ease: "Power3.easeOut" });
        gsap.to(".student-card", {display: "block", opacity: 1, duration: 0.5, ease: "Power3.easeOut", rotate: 5, scale: 1.1});
        gsap.to(".cursor", {opacity: 0, duration: 0.5})
    }
    const onLeaveSpanStudent = ({currentTarget}) => {
        currentTarget.classList.add('spanHead')
        gsap.to(".spanHead", {opacity: 1, duration: 0.3, ease: "Power3.easeOut" });
        gsap.to(".student-card", {display: "none", opacity: 0, duration: 0.5, ease: "Power3.easeOut", rotate: 0, scale: 1 });
        gsap.to(".cursor", {opacity: 1, duration: 0.5})
    }
    const onEnterSpanDeveloper = ({currentTarget}) => {
        currentTarget.classList.remove('spanHead')
        gsap.to(".spanHead", {opacity: 0.2, duration: 0.3, ease: "Power3.easeOut"});
        gsap.to(".developer-card", {display: "block", opacity: 1, duration: 0.5, ease: "Power3.easeOut", rotate: -5, scale: 1.1});
        gsap.to(".cursor", {opacity: 0, duration: 0.5})
    }
    const onLeaveSpanDeveloper = ({currentTarget}) => {
        currentTarget.classList.add('spanHead')
        gsap.to(".spanHead", {opacity: 1, duration: 0.3, ease: "Power3.easeOut" });
        gsap.to(".developer-card", {display: "none", opacity: 0, duration: 0.5, ease: "Power3.easeOut", rotate: 0, scale: 1 });
        gsap.to(".cursor", {opacity: 1, duration: 0.5})
    }
    const onEnterSpanBasketball = ({currentTarget}) => {
        currentTarget.classList.remove('spanHead')
        gsap.to(".spanHead", {opacity: 0.2, duration: 0.3, ease: "Power3.easeOut"});
        gsap.to(".basketball-card", {display: "block", opacity: 1, duration: 0.5, ease: "Power3.easeOut", rotate: 5, scale: 1.1});
        gsap.to(".cursor", {opacity: 0, duration: 0.5})
    }
    const onLeaveSpanBasketball = ({currentTarget}) => {
        currentTarget.classList.add('spanHead')
        gsap.to(".spanHead", {opacity: 1, duration: 0.3, ease: "Power3.easeOut" });
        gsap.to(".basketball-card", {display: "none", opacity: 0, duration: 0.5, ease: "Power3.easeOut", rotate: 0, scale: 1 });
        gsap.to(".cursor", {opacity: 1, duration: 0.5})
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

//   useEffect(() => {
//     const interval = setInterval(() => {
//       console.log('This will run every second!');
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [project]);

  useEffect(() => {
    let ctx = gsap.context(() => {

        ScrollSmoother.create({
            smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
            effects: true, // looks for data-speed and data-lag attributes on elements
            content: "#smooth-content",
            smoothTouch: 0.1,
          });

        gsap.to('.mockups', {transform: 'rotate(25deg)', scrollTrigger: {
            scrub: true,
        }})
        gsap.to('.mockups', {filter: "grayscale(100%)"})

    })
    return () => ctx.revert();
  }, []);
  return (
    <>
    <section className="cursorSection">
        <div className='cursor'></div>
    </section>
        <div id='smooth-wrapper'>
            <div id='smooth-content'>
            <div className='mouseIMGfollowerMJ'></div>
            <div className='mouseIMGfollowerJazzy'></div>
            <div className='mouseIMGfollowerShepard'></div>
                {/* <Navbar /> */}
                <div className='bodyContainer'>
                    <div className='welcomeHeader'>
                        <div>Welcome</div>
                        <div>On My</div>
                        <div>Website</div>
                    </div>
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
                        <img className='cards profile-card' src={require('../assets/cards/profile-card-black.png')} alt="card-presentation"/>
                        <img className='cards student-card' src={require('../assets/cards/student-card.png')} alt="card-presentation"/>
                        <img className='cards developer-card' src={require('../assets/cards/developer-card.png')} alt="card-presentation"/>
                        <img className='cards basketball-card' src={require('../assets/cards/basketball-card.png')} alt="card-presentation"/>
                    </div>

                    <div className='separatorLineContainer'>
                        <span className='line'></span>
                    </div>
                    <div className='subSeparatorLine'>
                        <div>Tous</div>
                        <div>mes</div>
                        <div>Projets</div>
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
                            <img onMouseEnter={onEnterGrayScale} onMouseLeave={onLeaveGrayScale} className='mockups' src={require('../assets/mockups/scan.png')} alt="chefaim-mockup"></img>
                            <img onMouseEnter={onEnterGrayScale} onMouseLeave={onLeaveGrayScale} className='mockups' src={require('../assets/mockups/Recette_1.png')} alt="chefaim-mockup"></img>
                            <img onMouseEnter={onEnterGrayScale} onMouseLeave={onLeaveGrayScale} className='mockups' src={require('../assets/mockups/Homepage Recettes.png')} alt="chefaim-mockup"></img>
                        </div>
                    </div>


                    <section>
                        {/* CAVE
                        AirZen
                        Banque Alimenatire
                        App de transports
                        BabyFun */}
                        <section className='sectionProjects1' onMouseMove={mouseFollowerDeplacement}>
                           <div className='CAVEcontainer' onMouseEnter={() => {gsap.to('body', {background: '#FF99A8', duration: 0.5}); gsap.to('.CAVEFollower', {opacity: 1, duration: 0.5})}}
                        onMouseLeave={() => {gsap.to('body', {background: 'white', duration: 0.5}); gsap.to('.CAVEFollower', {opacity: 0, duration: 0.5})}}
                        >
                            <img src={require('../assets/CAVE/Panel.png')} data-speed="auto" className='CAVE_img' alt="" />
                            <div>Tags</div>
                            <div>CAVE</div>
                        </div> 

                        <div className='AirZencontainer' onMouseEnter={() => {gsap.to('body', {background: '#6AB3F8', duration: 0.5}); gsap.to('.CPFollower', {opacity: 1, duration: 0.5})}}
                        onMouseLeave={() => {gsap.to('body', {background: 'white', duration: 0.5}); gsap.to('.CPFollower', {opacity: 0, duration: 0.5})}}
                        >
                            <img src={require('../assets/AirZen/Panel.png')} data-speed="auto" className='AirZen_img' alt="" />
                            <div>Tags</div>
                            <div>CAVE</div>
                        </div>
                        </section>

                        {/* CAVE Follower */}
                        <div className='CAVEFollower'>
                            <div className='dotContainer'>
                                <div className='dot' style={{backgroundColor: "#FD5F57"}} />
                                <div className='dot' style={{backgroundColor: "#FDBC2E"}} />
                                <div className='dot' style={{backgroundColor: "#28C840"}} />
                            </div>
                            <ImageSwapper images={arrayPicturesCAVE} />
                        </div>

                        {/* CP Follower */}
                        <div className='CPFollower'>
                            <div className='dotContainer'>
                                <div className='dot' style={{backgroundColor: "#FD5F57"}} />
                                <div className='dot' style={{backgroundColor: "#FDBC2E"}} />
                                <div className='dot' style={{backgroundColor: "#28C840"}} />
                            </div>
                            <ImageSwapper images={arrayPicturesCP} />
                        </div>
                        
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

                        {/* <div className='decouvrirProjet'><img src={require("../assets/right-arrow.png")} /><span>Découvrir mes projets</span></div> */}
                    </div>


                    {/* TODO Delete marger */}
                    <div className='marger'>hello</div>
                </div>
            </div>
        </div>
        </>
  );
}
