import { useEffect, useState } from "react";

export default function ImageSwapper ({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex == images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 1000)
        
        return () => clearInterval(intervalId);
    })

    return (
        <img src={images[currentIndex]} style={{maxWidth: "27vw", display: "block", borderRadius: "3px"}} />
    )
}