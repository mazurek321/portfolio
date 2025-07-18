import img1 from "../../assets/img/carrepairshop/img1.png"
import img2 from "../../assets/img/carrepairshop/img2.png"
import img3 from "../../assets/img/carrepairshop/img3.png"
import img4 from "../../assets/img/carrepairshop/img4.png"
import img5 from "../../assets/img/carrepairshop/img5.png"
import img6 from "../../assets/img/carrepairshop/img6.png"
import img7 from "../../assets/img/carrepairshop/img7.png"
import img8 from "../../assets/img/carrepairshop/img8.png"
import img9 from "../../assets/img/carrepairshop/img9.png"
import img10 from "../../assets/img/carrepairshop/img10.png"

const carRepairShop = {
    title: 'Car Repair Shop',
    linkFE: "https://github.com/mazurek321/CarRepairShop",
    shortDescription:
        "Car Repair Shop is a visually polished React-based UI concept for managing auto repair services, bookings, and customer interactions.",
    technology: [
        "React",
        "HTML",
        "CSS"
    ],
    sections: [
        {
            title: "Landing Page & Navigation",
            context:
                "A clean and modern homepage with intuitive navigation to different service sections like diagnostics, repairs, and contact.",
            img: [img1, img2, img6, img8]
        },
        {
            title: "Service Categories",
            context:
                "Clear visual sections highlighting different repair services such as engine diagnostics, tire services, and oil changes.",
            img: [img3]
        },
        {
            title: "Customer Reviews",
            context:
                "Dedicated section showcasing customer testimonials and ratings for various services, enhancing trust and engagement.",
            img: [img4, img7]
        },
        {
            title: "Booking Form (UI Only)",
            context:
                "Interactive UI component for booking appointments with form fields for user input. No backend integration — purely for demonstration.",
            img: [img5]
        },
        {
            title: "Responsive Design",
            context:
                "The layout is responsive and adapts smoothly to various screen sizes for an optimal viewing experience on desktop and mobile devices."
        },
        {
            title: "Admin - Pending Appointments",
            context:
                "Admin view includes a UI section to preview and manage incoming (pending) service appointments. Focused on layout only — no functional data handling.",
            img: [img9]  
        },
        {
            title: "Admin - Appointment History",
            context:
                "A dedicated UI for admins to browse through past customer appointments, allowing organized display of completed service history.",
            img:[img10]
        }
    ]
}

export default carRepairShop;
