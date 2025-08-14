import img1 from "../../assets/img/intelligent-home/img1.png"
import img2 from "../../assets/img/intelligent-home/img2.png"
import img3 from "../../assets/img/intelligent-home/img3.png"
import img4 from "../../assets/img/intelligent-home/img4.png"
import img5 from "../../assets/img/intelligent-home/img5.png"
import img6 from "../../assets/img/intelligent-home/img6.png"
import img7 from "../../assets/img/intelligent-home/img7.png"
import img8 from "../../assets/img/intelligent-home/img8.png"
import img9 from "../../assets/img/intelligent-home/img9.png"

const intelligentHome = 
    {
        title: 'Intelligent Home',
        link: "https://github.com/mazurek321/Intelligent-Home",
        mainImg: img3,
        shortDescription:
        "Intelligent Home is an application that allows adding new devices to a home network.",
        longDescription: "Intelligent Home detects when a new device is connected and prompts the user to assign a unique name to it. Once added, devices can be controlled individually. The app supports controlling temperature, lights, and blinds. It offers simulations for opening and closing blinds, adjusting light intensity and color, and changing temperature. The application has a main window, while each device can be controlled in a separate window.",
        type: "desktop",
        sections: [
            { title: "Adding New Devices" },
            { title: "Assigning Unique Names" },
            { title: "Temperature Control" },
            { title: "Light Control" },
            { title: "Blinds Control" },
            { title: "Blinds Opening/Closing Simulation" },
            { title: "Adjusting Light Intensity and Color" },
            { title: "Changing Temperature" },
            { title: "Main Application Window" },
            { title: "Separate Device Windows" }
        ],
        technology: [
            "C++", 
            "Qt"
        ],
        images: [
            img1, img2, img3, img4, img5, img6, img7, img8, img9
        ],
    }

export default intelligentHome
