import mainImg from "../../assets/img/wyspaWilkow/mainImg.png"
import img1 from "../../assets/img/wyspaWilkow/img1.png"
import img2 from "../../assets/img/wyspaWilkow/img2.png"
import img3 from "../../assets/img/wyspaWilkow/img3.png"
import img4 from "../../assets/img/wyspaWilkow/img4.png"
import img5 from "../../assets/img/wyspaWilkow/img5.png"

const islandOfWolves = {
    title: 'Simulation Game "Island of Wolves"',
    link: "https://github.com/mazurek321/wyspawilkow",
    mainImg: mainImg,
    shortDescription:
        "Island of Wolves is a dynamic simulation game where wolves and rabbits interact within a living ecosystem. Wolves gain fat when they catch rabbits, and if a male and female meet, a new entity is born.",
    sections: [
        { title: "Simulation Settings Adjustment" },
        { title: "Dynamic Controls (Speed, Reset, Add Entities)" },
        { title: "Wolf and Rabbit Behavior Logic" },
        { title: "Fat Gain Mechanism for Wolves" },
        { title: "Reproduction System (Male & Female Meeting)" },
        { title: "Collision Detection" },
        { title: "Real-time Entity Rendering (SFML)" },
        { title: "Simulation Lifecycle Management" },
    ],
    technology: [
        "C++", 
        "SFML", 
        "OOP Design", 
    ],

    images:[
        img1, img2, img3, img4, img5
    ]
}

export default islandOfWolves
