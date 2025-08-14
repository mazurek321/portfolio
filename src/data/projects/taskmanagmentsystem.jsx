// data/projects.js (example of taskmanagmentsystem export)
import mainImg from "../../assets/img/systemzarzadzania/mainImg.png"
import usermodel1 from "../../assets/img/systemzarzadzania/usermodel.png"
import usermodel2 from "../../assets/img/systemzarzadzania/usermodel2.png"
import usermodel3 from "../../assets/img/systemzarzadzania/usermodel3.png"
import userdto from "../../assets/img/systemzarzadzania/userdto.png"
import userDI1 from "../../assets/img/systemzarzadzania/userDI.png"
import userDI2 from "../../assets/img/systemzarzadzania/userDI2.png"
import userDI3 from "../../assets/img/systemzarzadzania/userDI3.png"
import usercontroller from "../../assets/img/systemzarzadzania/usercontroller.png"
import usercontroller2 from "../../assets/img/systemzarzadzania/usercontroller2.png"
import usercontroller3 from "../../assets/img/systemzarzadzania/usercontroller3.png"
import usercontroller4 from "../../assets/img/systemzarzadzania/usercontroller4.png"
import usercontroller5 from "../../assets/img/systemzarzadzania/usercontroller5.png"
import usercontroller6 from "../../assets/img/systemzarzadzania/usercontroller6.png"
import usertests from "../../assets/img/systemzarzadzania/userTests.png"
import usertests2 from "../../assets/img/systemzarzadzania/userTests2.png"
import usertests3 from "../../assets/img/systemzarzadzania/userTests3.png"
import usertests4 from "../../assets/img/systemzarzadzania/userTests4.png"
import usertests5 from "../../assets/img/systemzarzadzania/userTests5.png"
import usertests6 from "../../assets/img/systemzarzadzania/userTests6.png"
import usertests7 from "../../assets/img/systemzarzadzania/userTests7.png"
import img1 from "../../assets/img/systemzarzadzania/img1.png"
import img2 from "../../assets/img/systemzarzadzania/img2.png"
import img3 from "../../assets/img/systemzarzadzania/img3.png"
import img4 from "../../assets/img/systemzarzadzania/img4.png"
import img5 from "../../assets/img/systemzarzadzania/img5.png"
import img6 from "../../assets/img/systemzarzadzania/img6.png"
import img7 from "../../assets/img/systemzarzadzania/img7.png"
import img8 from "../../assets/img/systemzarzadzania/img8.png"

const taskmanagmentsystem = {
  title: 'Task Management System',
  status: "In progress",
  linkBE: "https://github.com/mazurek321/SystemZarzadzania",
  linkFE: "https://github.com/mazurek321/SystemZarzadzaniaFrontend",
  mainImg: mainImg,
  shortDescription:
    "A task management app with notifications and productivity analysis, enabling users to track progress, set priorities, and visualize tasks.",
  longDescription:
    "Task Management System is a comprehensive productivity tool designed to help users effectively manage tasks, stay on top of deadlines, and analyze their efficiency over time. It provides features like customizable task creation, real-time notifications, calendar views, and detailed productivity reports. Users can monitor their daily progress, set priorities, and gain insights through visual analytics and time tracking. The system is suitable for individuals or teams looking to boost organization and performance.",
  technology: [
    "Angular",
    "ASP.NET Core",
    "Entity Framework Core",
    "REST Api",
    "MySql",
    "MVC",
    "Outbox pattern",
    "SignalR",
    "Quartz.NET",
    "SMTP",
    "JWT",
    "OAuth2",
    "Swagger"
  ],
  sections: [
    {
      title: "Authorization",
    },
    {
      title: "Email sending",
    },
    {
      title: "User managment",
    },
    {
      title: "Task managment",
    },
    {
      title: "Real time notifications",
    },
    {
      title: "Real time messages",
    },
    {
      title: "Rapport rendering",
    },
    {
      title: "Background jobs",
    },
    
  ],
  code: [
    {
      title: "User model",
      images: [usermodel1, usermodel2, usermodel3]
    },
    {
      title: "Dependency Injection",
      images: [userDI1, userDI2, userDI3]
    },
    {
      title: "User DTO",
      images: [userdto]
    },
    {
      title: "Controller",
      images: [usercontroller, usercontroller2, usercontroller3, usercontroller4, usercontroller5, usercontroller6]
    },
    {
      title: "Tests",
      images: [usertests, usertests2, usertests3, usertests4, usertests5, usertests6, usertests7]
    }
  ],
  images:[
    img1, img2, img3, img4, mainImg, img6, img7
  ]
}

export default taskmanagmentsystem
