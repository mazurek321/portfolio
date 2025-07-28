import mainImg from "../../assets/img/friendtag/img1.png"
import img1 from "../../assets/img/friendtag/img1.jpg"
import img2 from "../../assets/img/friendtag/img2.jpg"
import img3 from "../../assets/img/friendtag/img3.jpg"
import img4 from "../../assets/img/friendtag/img4.jpg"
import img5 from "../../assets/img/friendtag/img5.jpg"
import img6 from "../../assets/img/friendtag/img6.jpg"
import img7 from "../../assets/img/friendtag/img7.jpg"
import img10 from "../../assets/img/friendtag/img10.jpg"
import img11 from "../../assets/img/friendtag/img11.jpg"

const friendtag = 
    {
        title: 'Mobile application "FriendTag"',
        linkFE: "https://github.com/mazurek321/FriendTag",
        linkBE: "https://github.com/mazurek321/FriendTagBackend",
        mainImg: mainImg,
        shortDescription:
        "FriendTag is a social app for organizing spontaneous meetups and connecting with people nearby.",
        longDescription: "FriendTag is a modern social app designed for people who value spontaneity, real-life connections, and the ease of organizing meetups. It’s the perfect tool to quickly invite friends for a hangout or join local events happening around you.",
        type: "mobile",
        sections: [
            {
                title: "Meetup Announcements",
                context:
                    "Create your own events and decide who can join. Choose a topic, location (public or shared after acceptance), date, time, and preferred age group of participants.",
                img:[img4]
            },
            {
                title: "Find Friends Nearby",
                context:
                    "Discover people in your area with similar interests. Browse profiles and connect easily – no pressure, just genuine interaction.",
                img: [img11, img3]
            },
            {
                title: "Chat & Location Sharing",
                context:
                    "Chat with new friends, send photos, share your plans, and – if you wish – the exact location of your meetup spot.",
                img: [img6, img7]
            },
            {
                title: "Open Meetup Mode",
                context:
                    "Create public events that anyone can join. Perfect for those who enjoy meeting new people and socializing in larger groups.",
                img: [img5]
            },
            {
                title: "User Profiles",
                context:
                    "View photos and basic information to get to know people before connecting or joining their events.",
                img: [img1, img2]
            },
            {
                title: "Friend Suggestions from Contacts",
                context:
                    "FriendTag can suggest people you already know by scanning your phone contacts – making it easier to find familiar faces.",
                img: [img10]
            }
        ],
        technology: [
            "Flutter", 
            "Dart",
            "ASP.NET core",
            "REST Api", 
            "Entity Framework Core", 
            "MySql", 
            "Swagger"
        ]
    }

export default friendtag