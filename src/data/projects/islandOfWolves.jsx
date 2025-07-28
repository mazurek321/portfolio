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
        {
            title: "Main Menu & Navigation",
            context:
                'At startup, players are presented with a main menu containing three options: "Start", "Settings", and "Exit". Selecting "Start" begins the simulation with current parameters, "Settings" allows for modifying simulation rules, and "Exit" closes the program.',
            img: [img1]
        },
        {
            title: "Settings & Controls",
            context:
                "Before starting the simulation, users can customize initial parameters in the Settings panel. These include map width and height, the number of wolves and rabbits at the start, movement speed, and the minimum and maximum number of obstacles. Each field can be increased or decreased by using the +1 or -1 buttons.\n\nDuring gameplay, a control menu on the left side allows users to: add a randomly-gendered wolf, add a rabbit, return to the main menu, speed up or slow down the simulation, and reset it to its initial state. All entities and obstacles are placed at random but non-overlapping positions on the map.",
            img: [img4]
        },
        {
            title: "Simulation Mechanics",
            context:
                "Once the simulation begins, wolves and rabbits move randomly across the map. Wolves come in two types: male (blue) and female (pink). If a rabbit is within 1-tile range, the wolf starts chasing it. Upon reaching it, the wolf kills the rabbit and gains fat. Over time, fat levels decrease; if it reaches zero, the wolf dies. If a male wolf finds a female within 1-tile range, they may reproduce and spawn a new wolf.",
            img: [img2, img5]
        },
        {
            title: "Rabbit Behavior",
            context:
                "Rabbits occasionally move and have a chance to reproduce. They serve as prey for wolves and play a critical role in the survival cycle of the ecosystem.",
        },
        {
            title: "Obstacles & Terrain",
            context:
                "The map includes immovable hedges (dark green), which act as barriers for all animals. The map's edges are surrounded by water (blue border), marking the simulation's boundaries.",
        },
        {
            title: "Visual Representation",
            context:
                "Each creature is color-coded: blue for wolves, pink for female wolves, and brown for rabbits. The simulation plays out on a grid-based map with visual feedback for each interaction and terrain element.",
        },
        {
            title: "Game End & Restart",
            context:
                "The simulation ends when no creatures are left on the map. A game-over screen is displayed, offering the option to return to the main menu and restart the simulation.",
            img: [img3]
        }
    ],
    technology: [
        "C++", 
        "SFML", 
        "OOP Design", 
    ]
}

export default islandOfWolves
