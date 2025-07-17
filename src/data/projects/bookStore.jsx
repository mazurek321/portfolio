import img1 from "../../assets/img/bookstore/img1.png"
import img2 from "../../assets/img/bookstore/img2.png"
import img3 from "../../assets/img/bookstore/img3.png"
import img4 from "../../assets/img/bookstore/img4.png"
import img5 from "../../assets/img/bookstore/img5.png"
import img6 from "../../assets/img/bookstore/img6.png"
import img7 from "../../assets/img/bookstore/img7.png"
import img8 from "../../assets/img/bookstore/img8.png"
import img9 from "../../assets/img/bookstore/img9.png"
import img10 from "../../assets/img/bookstore/img10.png"
import img11 from "../../assets/img/bookstore/img11.png"
import img12 from "../../assets/img/bookstore/img12.png"
import img13 from "../../assets/img/bookstore/img13.png"
import img14 from "../../assets/img/bookstore/img14.png"
import img15 from "../../assets/img/bookstore/img15.png"
import img16 from "../../assets/img/bookstore/img16.png"
import img17 from "../../assets/img/bookstore/img17.png"
import img18 from "../../assets/img/bookstore/img18.png"
import img19 from "../../assets/img/bookstore/img19.png"
import img20 from "../../assets/img/bookstore/img20.png"
import img21 from "../../assets/img/bookstore/img21.png"
import img22 from "../../assets/img/bookstore/img22.png"
import img23 from "../../assets/img/bookstore/img23.png"
import img24 from "../../assets/img/bookstore/img24.png"
import img25 from "../../assets/img/bookstore/img25.png"
import img26 from "../../assets/img/bookstore/img26.png"
import img27 from "../../assets/img/bookstore/img27.png"
import img28 from "../../assets/img/bookstore/img28.png"
import img29 from "../../assets/img/bookstore/img29.png"
import img30 from "../../assets/img/bookstore/img30.png"
import img31 from "../../assets/img/bookstore/img31.png"

const bookStore = {
    title: 'Book store',
    link: "https://github.com/iAttaquer/BookStore",
    shortDescription:
        "Bookstore is a backend-focused .NET application built using a company-provided dotnetboilerplate. It follows Clean Architecture principles with a modular structure for scalable and maintainable development.",
    technology: [
        "ASP.NET Core",
        "REST Api",
        "Entity Framework Core",
        "Docker",
        "Postgresql",
        "MVC",
        "Outbox Pattern",
        "Dependency Injection",
        "Email Sending (Resend)",
        "Dotnetboilerplate",
        "Clean Architecture",
    ],
    sections: [
        {
            title: "Clean Architecture Structure",
            context:
                "The project is divided into modular layers: Api, Application, Infrastructure, Core, Shared, and Shared.Abstractions — promoting separation of concerns and maintainability."
        },
        {
            title: "Book & Category Management",
            context:
                "Includes core domain logic for managing books, categories, pricing, and availability with clear domain models and repository abstractions."
        },
        {
            title: "Customer Reviews",
            context:
                "Implements review functionality allowing users to add ratings and feedback for books. Reviews are stored, validated, and associated with books through backend logic only."
        },
        {
            title: "Outbox Pattern",
            context:
                "Uses the Outbox pattern to ensure consistent and reliable communication in asynchronous operations and integrations."
        },
        {
            title: "Email Notifications",
            context:
                "Integrates with Resend to send transactional emails, such as user registration."
        },
        {
            title: "Dependency Injection",
            context:
                "Fully configured dependency injection using built-in .NET DI container to wire services, repositories, and cross-layer dependencies."
        },
        {
            title: "Admin Features",
            context:
                "Only admin can update a review created by user."
        }
    ],
    code:[
        {
            title: "Review model",
            images: [img1, img2, img3]
        },
        {
            title: "Dependency injection",
            images: [img4, img5, img6]
        },
        {
            title: "Commands",
            images: [img7, img8, img9, img10, img11]
        },
        {
            title: "Handlers",
            images: [img12, img13, img14]
        },
        {
            title: "Dto",
            images: [img15]
        },
        {
            title: "Exceptions",
            images: [img16]
        },
        {
            title: "Endpoints",
            images: [img17, img18, img19, img20, img21, img22]
        },
        {
            title: "Tests",
            images: [img23, img24, img25, img26, img27, img28, img29, img30, img31]
        },
    ]
}

export default bookStore