import ProjectInterface from "./ProjectInterface"
import taskManagmentSystem from "../assets/img/taskManagmentSystem.png";
import skiStore from "../assets/img/skiStore.png";
import reportApplication from "../assets/img/reportApplication.png";
import wolfIsland from "../assets/img/wolfIsland.png";
import intelligentHome from "../assets/img/intelligentHome.png";
import friendTag from "../assets/img/friendTag.png";
import carRepairShop from "../assets/img/carRepairShop.png";
import bookStore from "../assets/img/bookStore.png";
import secureShare from "../assets/img/secureShare/secureShare.png";
import helpDesk from "../assets/img/helpDesk.png";
import rocksVsMines from "../assets/img/rocksVsMines.png";

import secureShare1 from "../assets/img/secureShare/secureShare1.png"
import secureShare2 from "../assets/img/secureShare/secureShare2.png"
import secureShare3 from "../assets/img/secureShare/secureShare3.png"
import secureShare4 from "../assets/img/secureShare/secureShare4.png"
import secureShare5 from "../assets/img/secureShare/secureShare5.png"

export const ProjectsData : ProjectInterface[] = [
  {
    id: "secureshare-frontend",
    title: "SecureShare",
    img: secureShare,
    screenshots: [secureShare1, secureShare2, secureShare3, secureShare4, secureShare5], 
    githubFrontend: "https://github.com/mazurek321/SecureShare-frontend",
    technologies: [
      "NextJs",
      "React",
      "TypeScript",
      "TailwindCSS",
      "React Router",
    ],
    description: "Aplikacja kliencka współpracująca z dedykowanym API, stworzona do bezpiecznego i szyfrowanego udostępniania plików oraz poufnych wiadomości. Projekt kładzie nacisk na prywatność użytkowników oraz intuicyjny interfejs, eliminując ryzyko przechwycenia wrażliwych danych.",
    features: [
      "Bezpieczne przesyłanie i udostępnianie plików oraz notatek",
      "Integracja z dedykowanym API (REST) i autoryzacja użytkowników",
      "Zarządzanie czasem wygasania generowanych linków",
      "Nowoczesny interfejs użytkownika (TailwindCSS)"
    ]
  },
  
  {
    id: "helpdesk-ticket-system",
    title: "Helpdesk Ticket System",
    img: helpDesk,
    githubFrontend: "https://github.com/mazurek321/helpdeskCloud",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "NextAuth.js",
      "Supabase",
      "PostgreSQL",
      "API Routes"
    ],
    description: "Nowoczesny system zgłoszeń serwisowych typu Single Page Application, zbudowany w oparciu o architekturę Next.js App Router. Aplikacja oferuje kompleksowy workflow zarządzania problemami technicznymi — od momentu rejestracji zgłoszenia przez użytkownika, przez dynamiczną zmianę statusów i przypisywanie pomocników, aż po ostateczne rozwiązanie incydentu.",
    features: [
      "Bezpieczna autoryzacja z podziałem na role (User, Helpdesk, Admin) przez NextAuth",
      "Tworzenie, filtrowanie i dynamiczna aktualizacja ticketów w czasie rzeczywistym",
      "Panel zarządzania zgłoszeniami dla personelu technicznego z obsługą modalną",
      "Trwałe i bezpieczne przechowywanie danych w chmurowej bazie Supabase (PostgreSQL)"
    ]
  },
  
  {
    id: "task-management-system",
    title: "System Zarządzania Zadaniami",
    img: taskManagmentSystem,
    githubBackend: "https://github.com/mazurek321/SystemZarzadzania",
    githubFrontend: "https://github.com/mazurek321/SystemZarzadzaniaFrontend",
    technologies: [
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
    description: "Kompleksowe narzędzie zwiększające produktywność, przeznaczone do efektywnego organizowania pracy. Aplikacja pozwala na pełną kontrolę nad cyklem życia zadań w zespołach, oferując powiadomienia w czasie rzeczywistym oraz automatyzację powtarzalnych procesów.",
    features: [
      "Autoryzacja i uwierzytelnianie (JWT & OAuth2)",
      "Automatyczne wysyłanie powiadomień e-mail",
      "Zarządzanie użytkownikami i rolami",
      "Tworzenie, przypisywanie i monitorowanie zadań"
    ]
  },
  {
    id: "ski-store",
    title: "Sklep Narciarski",
    img: skiStore,
    githubBackend: "https://github.com/mazurek321/SkiStore",
    githubFrontend: "https://github.com/mazurek321/SkiStore_frontend",
    technologies: [
      "React",
      "HTML",
      "CSS",
      "C#",
      "ASP.NET Core",
      "REST Api",
      "EF Core",
      "PostgreSQL",
      "Docker",
      "JWT",
      "Swagger"
    ],
    description: "Nowoczesna aplikacja e-commerce do przeglądania, kupowania i zarządzania asortymentem sklepu narciarskiego, zapewniająca płynne i intuicyjne doświadczenie użytkownika. Projekt jest w fazie rozwoju – niektóre funkcjonalności są jeszcze w trakcie wdrażania.",
    features: [
      "Autoryzacja użytkowników (JWT)",
      "Przeglądanie i filtrowanie produktów",
      "Zarządzanie produktami (Panel Administratora)",
      "Funkcjonalność koszyka zakupowego",
      "System składania i procesowania zamówień",
      "Backend API (REST, Swagger)",
      "Integracja z bazą danych (EF Core + PostgreSQL)",
      "Zkonteneryzowane środowisko deweloperskie (Docker)",
      "Responsywny interfejs użytkownika (React + CSS)",
      "Przemyślana architektura projektu z wykorzystaniem obiektów DTO"
    ]
  },
  {
    id: "report-application",
    title: "Aplikacja Raportowa",
    img: reportApplication,
    githubBackend: "https://github.com/mazurek321/reportApplication",
    githubFrontend: "https://github.com/mazurek321/reportApplication",
    technologies: [
      "React",
      "HTML",
      "CSS",
      "ASP.NET Core",
      "C#",
      "SQL",
      "REST Api",
      "Oracle"
    ],
    description: "Webowe narzędzie raportujące, które pobiera i wizualizuje dane z relacyjnej bazy danych Oracle. Aplikacja umożliwia użytkownikom monitorowanie kluczowych wskaźników biznesowych za pomocą interaktywnych pulpitów nawigacyjnych oraz generowanie niestandardowych zestawień.",
    features: [
      "Panel główny (Dashboard) z podsumowaniem danych",
      "Interaktywne wykresy i wizualizacje raportowe",
      "Zaawansowane filtrowanie i sortowanie danych"
    ]
  },
  {
    id: "island-of-wolves",
    title: "Gra Symulacyjna \"Wyspa Wilków\"",
    img: wolfIsland,
    githubBackend: "https://github.com/mazurek321/wyspawilkow",
    technologies: [
      "C++",
      "SFML",
      "OOP Design"
    ],
    description: "Dynamiczna gra symulacyjna prezentująca uproszczony model ekosystemu, w którym drapieżniki (wilki) i ofiary (króliki) wchodzą w bezpośrednie interakcje. Projekt kładzie nacisk na algorytmy zachowań oraz programowanie obiektowe.",
    features: [
      "Pełne dostosowywanie początkowych ustawień symulacji",
      "Dynamiczne sterowanie w czasie rzeczywistym (prędkość, reset, dodawanie jednostek)",
      "Logika zachowania wilków oraz królików",
      "Mechanizm zarządzania energią (wilki zyskują żywotność po złapaniu królika)",
      "System reprodukcji i podtrzymywania gatunku przy spotkaniu osobników",
      "Wydajna detekcja kolizji obiektów",
      "Płynne renderowanie jednostek w grafice 2D przy użyciu biblioteki SFML",
      "Zarządzanie pełnym cyklem życia i wymieraniem populacji"
    ]
  },
  {
    id: "intelligent-home",
    title: "Inteligentny Dom",
    img: intelligentHome,
    githubBackend: "https://github.com/mazurek321/Intelligent-Home",
    technologies: [
      "C++",
      "Qt"
    ],
    description: "Aplikacja desktopowa służąca do zarządzania urządzeniami w sieci automatyki domowej. System automatycznie wykrywa podłączenie nowego sprzętu, pozwalając użytkownikowi na personalizację ustawień i sterowanie parametrami środowiskowymi w czasie rzeczywistym.",
    features: [
      "Dynamiczne dodawanie i rejestracja nowych urządzeń w sieci",
      "Przypisywanie unikalnych nazw i identyfikatorów sprzętu",
      "Kontrola i symulacja zmian temperatury w pomieszczeniach",
      "Sterowanie oświetleniem (płynna regulacja jasności oraz palety kolorów)",
      "Zarządzanie roletami wraz z wizualizacją stopnia ich otwarcia",
      "Przejrzyste główne okno aplikacji z podglądem całej sieci domowej",
      "Wielooknowy interfejs (dedykowane panele sterowania dla każdego urządzenia)"
    ]
  },
  {
    id: "friend-tag",
    title: "Aplikacja Mobilna \"FriendTag\"",
    img: friendTag,
    githubFrontend: "https://github.com/mazurek321/FriendTag",
    githubBackend: "https://github.com/mazurek321/FriendTagBackend",
    technologies: [
      "Flutter",
      "Dart",
      "ASP.NET Core",
      "C#",
      "REST Api",
      "Entity Framework Core",
      "MySQL",
      "Swagger"
    ],
    description: "Nowoczesna platforma społecznościowa stworzona dla osób ceniących spontaniczność, relacje w świecie rzeczywistym oraz łatwość organizacji wydarzeń. Ułatwia szybkie zwoływanie znajomych lub dołączanie do lokalnych inicjatyw w okolicy.",
    features: [
      "Bezpieczna autoryzacja i rejestracja użytkowników",
      "Personalizacja i zarządzanie profilem użytkownika",
      "Tworzenie, edycja i moderowanie ogłoszeń oraz wydarzeń",
      "Zaawansowany system znajomych (wysyłanie zaproszeń, relacje)",
      "Zarządzanie listą obecności i uczestnictwem w wydarzeniach",
      "Wbudowane wsparcie dla geolokalizacji i map",
      "Bezpośrednia integracja z aparatem fotograficznym smartfona",
      "Dostęp do galerii zdjęć i pamięci masowej urządzenia",
      "Komunikator internetowy w czasie rzeczywistym (czat)",
      "System weryfikacji i zatwierdzania zgłoszeń chętnych uczestników"
    ]
  },
  {
    id: "car-repair-shop",
    title: "Warsztat Samochodowy",
    img: carRepairShop,
    githubFrontend: "https://github.com/mazurek321/CarRepairShop",
    technologies: [
      "React",
      "HTML",
      "CSS"
    ],
    description: "Dopracowany wizualnie, responsywny koncept interfejsu użytkownika (UI) warsztatu samochodowego. Projekt skupia się na dostarczeniu intuicyjnych paneli do zarządzania usługami mechanicznymi, rezerwacjami terminów oraz komunikacją z klientem.",
    features: [
      "Estetyczna i nowoczesna strona główna",
      "Intuicyjny formularz rezerwacji wizyt i wyboru usług",
      "Przejrzysta lista oczekujących i zaplanowanych napraw",
      "Archiwum i wykaz zakończonych zleceń",
      "Panel administracyjny (Dashboard) agregujący statystyki",
      "Pełna historia serwisowa pojazdów",
      "Zintegrowany panel do sprawnego zarządzania rezerwacjami"
    ]
  },
  {
    id: "book-store",
    title: "Księgarnia Internetowa",
    img: bookStore,
    githubBackend: "https://github.com/iAttaquer/BookStore",
    technologies: [
      "C#",
      "ASP.NET Core",
      "REST Api",
      "EF Core",
      "Docker",
      "PostgreSQL",
      "MVC",
      "Outbox Pattern",
      "Dependency Injection",
      "Email Sending (Resend)",
      "Dotnetboilerplate",
      "Clean Architecture"
    ],
    description: "Zaawansowana aplikacja .NET skupiająca się na architekturze backendowej, zbudowana na bazie profesjonalnego szablonu dotnetboilerplate. Projekt rygorystycznie przestrzega zasad Czystej Architektury (Clean Architecture) z podziałem na moduły, gwarantując łatwą skalowalność.",
    features: [
      "Bezpieczny system autoryzacji i nadawania uprawnień",
      "Zarządzanie stanem magazynowym oraz katalogiem produktów księgarni",
      "Kompleksowy system dodawania, moderacji i agregacji recenzji oraz opinii",
      "Zaawansowany panel administratora do nadzoru nad platformą",
      "Niezawodna integracja z zewnętrznym dostawcą powiadomień e-mail (Resend API)"
    ]
  },
  {
    id: "rocks-vs-mines",
    title: "Rocks vs Mines Prediction",
    img: rocksVsMines,
    githubBackend: "https://github.com/mazurek321/RocksVsMines",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Machine Learning",
      "Logistic Regression",
      "Data Preprocessing"
    ],
    description: "Projekt z zakresu uczenia maszynowego (Machine Learning) dedykowany klasyfikacji obiektów podwodnych na podstawie sygnałów sonarowych. Model analizuje dane częstotliwościowe i z odbicia fal dźwiękowych, aby precyzyjnie odróżnić naturalne przeszkody (skały) od obiektów militarnych bądź niebezpiecznych (miny morskie).",
    features: [
      "Przetwarzanie i czyszczenie surowych danych sonarowych z repozytorium UCI",
      "Trening binarnych modeli klasyfikacyjnych (np. regresja logistyczna)",
      "Analiza korelacji cech oraz ewaluacja skuteczności modelu (Accuracy, Precision)",
      "Pipeline predykcyjny pozwalający na klasyfikację nowych próbek w czasie rzeczywistym"
    ]
  }
];