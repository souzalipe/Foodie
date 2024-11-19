import ScrollReveal from "scrollreveal";

export const scrollRevealConfigFlip = () => {
    ScrollReveal().reveal(".flip", {

        rotate: {
            x: 20,
            z: 20,
            duration: 1000
        }
       
    })
}