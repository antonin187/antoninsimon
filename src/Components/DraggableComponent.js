import './DraggableComponent.css'
import {Draggable} from "gsap/Draggable";
import {gsap} from "gsap";
import {useEffect} from "react";

gsap.registerPlugin(Draggable);


export default function DraggableComponent() {

    const appearDisappear = async () => {
        await gsap.to("#basketballDragger", {opacity: 0, duration: 1})
        gsap.to("#basketballDragger", {position: "absolute", x: 0, y: 0})
        gsap.to("#cible", {opacity: 0.15, duration: 0.4, transform: "scale(1)"})
        setTimeout(() => { gsap.to("#basketballDragger", {opacity: 1, duration: 1, position: "absolute", x: 0, y: 0}) }, 1000)
    }

    // var cibleCircle = document.querySelector("#cible-circle")
    // document.querySelector("#basketballDragger").addEventListener('onclick', () => {
    //     cibleCircle.style.transform = 'scale(1.1)'
    // })

    useEffect(() => {
        Draggable.create("#basketballDragger", {
            type:"y, x",
            bounds: document.getElementById(".draggable-container"),
            inertia:true,
            onDrag: function(e){
                // gsap.to("#cible-circle", {x: this.x - document.querySelector("#cible-circle").offsetWidth/4, y: this.y - document.querySelector("#cible-circle").offsetHeight/4})
                gsap.to("#cible-circle", {x: this.x, y: this.y})
                if (this.hitTest('#cible')){
                    gsap.to("#cible", {opacity: 1, duration: 0.4, transform: "scale(1.1)"})
                    gsap.to("#cible-circle", {zIndex: 0, opacity: 0, duration: 0.4})
                    } else {
                    gsap.to("#cible", {opacity: 0.15, duration: 0.4, transform: "scale(1)"})
                    gsap.to("#cible-circle", {opacity: 1, duration: 0.4})
                }
                var rect = document.querySelector("#cible-circle").getBoundingClientRect();
                console.log("XEmoji : " + this.x);
                console.log("XCircle : " + rect.left)
            },
            onDragEnd:function (e) {
                // gsap.to("#cible-circle", {transform: "scale(1)"})
                if (this.hitTest('#cible')){
                    appearDisappear()
                    gsap.to("#cible-circle", {zIndex: 0, opacity: 0, duration: 0.4})
                }
            }
        });
    }, []);

    return(
        <div className="draggable-container">
            <div className="basketballDragger" id="basketballDragger"><img src={require('../assets/basketball_emoji.png')} /></div>
            <div id="cible">Drop it<br /> here !</div>
            <div id="cible-circle"></div>
        </div>
    )
}