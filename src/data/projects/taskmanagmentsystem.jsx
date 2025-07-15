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


const taskmanagmentsystem =
     {
        title: 'Task Management System',
        status: "In progress",
        link: "https://github.com/mazurek321/SystemZarzadzania",
        shortDescription:
        "A task management app with notifications and productivity analysis, enabling users to track progress, set priorities, and visualize tasks.",
        longDescription:
        "Task Management System is a comprehensive productivity tool designed to help users effectively manage tasks, stay on top of deadlines, and analyze their efficiency over time. It provides features like customizable task creation, real-time notifications, calendar views, and detailed productivity reports. Users can monitor their daily progress, set priorities, and gain insights through visual analytics and time tracking. The system is suitable for individuals or teams looking to boost organization and performance.",
        technology: [
        "ASP.NET Core",
        "Entity Framework Core",
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
                title: "Clean Architecture Structure",
                context:
                    "The project is divided into modular layers: Api, Infrastructure, Core, MainProgram — promoting separation of concerns and maintainability."
            },
            {
                title: "Task Creation and Management",
                context:
                    "Users can create tasks with a title, description, due date and time, priority, and category. Each task can be edited or deleted. Categories help in organizing tasks (e.g., work, home, study)."
            },
            {
                title: "Notifications and Reminders",
                context:
                    "Users receive reminders before the task's due time (e.g., 1 hour before). Notifications are delivered via desktop/mobile or email. Real-time updates are handled using SignalR and scheduled jobs with Quartz.NET."
            },
            {
                title: "Productivity Analysis",
                context:
                    "Visual reports such as bar and pie charts show how many tasks were completed over time, time spent per category, and average task completion time. This helps users track and improve their productivity."
            },
            {
                title: "Reporting Module",
                context:
                    "Users can generate reports in PDF or Excel formats summarizing completed tasks, time spent on activities, and overall progress. Useful for reviewing performance periodically."
            },
            {
                title: "User Management",
                context:
                    "Optional authentication and user management module with support for user registration and login."
            }
        ],
        code:[
            {
                title: "User model",
                images:[usermodel1, usermodel2, usermodel3]
            },
            {
                title: "Dependency Injection",
                images:[userDI1, userDI2, userDI3]
            },
            {
                title: "User DTO",
                images:[userdto]
            },
            {
                title: "Controller",
                images:[usercontroller, usercontroller2, usercontroller3, usercontroller4 ,usercontroller5, usercontroller6]
            },
            {
                title: "Tests",
                images:[usertests, usertests2, usertests3, usertests4, usertests5, usertests6, usertests7]
            }
        ]
    }

export default taskmanagmentsystem