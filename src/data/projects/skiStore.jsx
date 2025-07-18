import img1 from "../../assets/img/skistore/img1.png"
import img2 from "../../assets/img/skistore/img2.png"
import img3 from "../../assets/img/skistore/img3.png"
import img4 from "../../assets/img/skistore/img4.png"
import img5 from "../../assets/img/skistore/img5.png"
import img6 from "../../assets/img/skistore/img6.png"
import img7 from "../../assets/img/skistore/img7.png"
import img8 from "../../assets/img/skistore/img8.png"
import img9 from "../../assets/img/skistore/img9.png"
import img10 from "../../assets/img/skistore/img10.png"
import img11 from "../../assets/img/skistore/img11.png"
import img12 from "../../assets/img/skistore/img12.png"
import img13 from "../../assets/img/skistore/img13.png"
import img14 from "../../assets/img/skistore/img14.png"
import img15 from "../../assets/img/skistore/img15.png"
import img16 from "../../assets/img/skistore/img16.png"
import img17 from "../../assets/img/skistore/img17.png"
import img18 from "../../assets/img/skistore/img18.png"
import img19 from "../../assets/img/skistore/img19.png"
import img20 from "../../assets/img/skistore/img20.png"
import img21 from "../../assets/img/skistore/img21.png"
import img22 from "../../assets/img/skistore/img22.png"


const skiStore = 
{
        title: 'Ski store',
        linkBE: "https://github.com/mazurek321/SkiStore",
        linkFE: "https://github.com/mazurek321/SkiStore_frontend",
        shortDescription:
        "Ski Store is a modern e-commerce app for browsing, buying, and managing products with a smooth and intuitive user experience. The project is not yet finished — some functionalities are still under development, and the images used are random placeholders.",
        technology: [
            "React",
            "HTML",
            "CSS",
            "ASP.NET core", 
            "REST Api",
            "EF Core", 
            "Postgresql", 
            "Docker", 
            "JWT",
            "Swagger"
        ],
        sections: [
            {
                title: "Product Browsing",
                context:
                    "Users can browse a wide range of ski products such as skis, snowboards, helmets, and apparel.",
                    img:[img15, img17]
            },
            {
                title: "Product Details & Media",
                context:
                    "Each product page contains detailed information, specifications, multiple images, and availability status.",
                img: [img16, img18,]
            },
            {
                title: "Shopping Cart & Checkout",
                context:
                    "Users can add products to a cart, update quantities.",
                img: [img19, img20]
            },
            {
                title: "User Authentication & Profiles",
                context:
                    "Customers can register and log in to manage their orders, wishlists, and personal information. JWT-based authentication ensures secure access and session management.",
                img: [img13, img14, img21, img22]
            }
        ],
        code:[
            {
                title: "Models",
                images: [img1, img2, img3, img4, img5, img6]
            },
            {
                title: "Database context",
                images: [img7]
            },
            {
                title: "Dto",
                images: [img8]
            },
            {
                title: "Controller",
                images: [img9, img10, img11, img12]
            },
        ]
    }

export default skiStore