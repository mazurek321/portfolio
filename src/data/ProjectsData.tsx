import ProjectInterface from "./ProjectInterface"
import inProgress from "../assets/img/inProgress.jpg";
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
import medConnect from "../assets/img/medConnect.jpg";

import secureShare1 from "../assets/img/secureShare/secureShare1.png"
import secureShare2 from "../assets/img/secureShare/secureShare2.png"
import secureShare3 from "../assets/img/secureShare/secureShare3.png"
import secureShare4 from "../assets/img/secureShare/secureShare4.png"
import secureShare5 from "../assets/img/secureShare/secureShare5.png"

import medConnect1 from "../assets/img/medConnect/img1.jpg"
import medConnect2 from "../assets/img/medConnect/img2.jpg"
import medConnect3 from "../assets/img/medConnect/img3.jpg"
import medConnect4 from "../assets/img/medConnect/img4.jpg"
import medConnect5 from "../assets/img/medConnect/img5.jpg"
import medConnect6 from "../assets/img/medConnect/img6.jpg"



export const ProjectsData : ProjectInterface[] = [

  {
    id: "microservices-ecommerce-platform",
    title: "Enterprise Microservices E-Commerce Platform",
    img: inProgress, 
    technologies: [
      "C#",
      "ASP.NET Core",
      "Microservices",
      "API Gateway",
      "GraphQL",
      "REST Api",
      "WebSockets",
      "JWT",
      "RabbitMQ",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "Docker"
    ],
    description: "Skalowalna, rozproszona platforma e-commerce typu full-stack oparta na architekturze mikroserwisów. Projekt demonstruje integrację wielu niezależnych usług biznesowych, systemów bazodanowych oraz asynchronicznych wzorców komunikacji, zapewniając pełną obsługę procesów sprzedażowych w czasie rzeczywistym.",
    features: [
      "Zdecentralizowana architektura mikroserwisów zarządzana przez centralny komponent API Gateway (routing, rate limiting, walidacja tokenów)",
      "System uwierzytelniania i autoryzacji oparty na tokenach JWT z precyzyjną kontrolą dostępu na poziomie ról użytkowników",
      "Asynchroniczna komunikacja zdarzeniowa (Event-Driven Architecture) pomiędzy autonomicznymi serwisami za pomocą brokera RabbitMQ",
      "Hybrydowe API wykorzystujące standard REST do obsługi operacji transakcyjnych oraz GraphQL do wydajnego i elastycznego pobierania danych",
      "Komunikacja dwukierunkowa w czasie rzeczywistym realizowana przez protokół WebSockets do obsługi powiadomień oraz interaktywnych modułów użytkownika",
      "Wykorzystanie bazy Redis jako rozproszonej pamięci podręcznej (cache), mechanizmu blokad stanów magazynowych oraz warstwy Pub/Sub dla instancji WebSocket",
      "Kompletny potok przetwarzania zamówień zintegrowany z zewnętrznym systemem płatności (obsługa Webhooks) oraz automatyczną wysyłką powiadomień e-mail"
    ]
  },

  {
    id: "medconnect",
    title: "MedConnect",
    img: medConnect,
    screenshots: [medConnect1, medConnect2, medConnect3, medConnect4, medConnect5, medConnect6],
    github: "https://github.com/mazurek321/MedConnect",
    technologies: [
      "C#",
      "ASP.NET Core",
      "GraphQL",
      "React Native",
      "Expo",
      "TypeScript",
      "JWT"
    ],
    description: "System medyczny typu full-stack służący do monitorowania pacjentów i zarządzania personelem w placówkach zdrowia. Projekt składa się z backendu ASP.NET Core opartego na standardzie GraphQL oraz wieloplatformowej aplikacji mobilnej React Native (Expo), umożliwiając natychmiastową synchronizację danych i mobilną obsługę systemu przez personel.",
    features: [
      "Implementacja API w standardzie GraphQL (Query, Mutation, Subscription)",
      "Wieloplatformowa aplikacja mobilna zbudowana w React Native i Expo (TypeScript)",
      "System monitorowania pacjentów z funkcją natychmiastowej zmiany statusu zdrowia z poziomu interfejsu mobilnego",
      "Moduł powiadomień i alertów w czasie rzeczywistym realizowany poprzez subskrypcje GraphQL",
      "Panel administracyjny służący do dodawania nowego personelu medycznego",
      "Bezpieczna autoryzacja użytkowników (JWT) z precyzyjnym podziałem na role i uprawnienia"
    ]
  },

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
      "TailwindCSS"
    ],
    description: "Nowoczesna aplikacja kliencka dedykowana do bezpiecznego zarządzania i udostępniania zasobów. Projekt skupia się na implementacji bezpiecznej architektury BFF (Backend For Frontend), zaawansowanej ochronie sesji użytkownika oraz intuicyjnych panelach dostępu. Interfejs precyzyjnie rozdziela uprawnienia między zwykłych użytkowników a administratorów, dbając o najwyższe standardy UX i bezpieczeństwa danych po stronie klienta.",
    features: [
      "Architektura BFF (Backend For Frontend) z obsługą bezpiecznych ciasteczek HttpOnly",
      "Kompletny moduł uwierzytelniania: rejestracja, logowanie i ochrona tras (Protected Routes)",
      "Dedykowany widok użytkownika z systemem wnioskowania (requestów) o dostęp do zablokowanych plików",
      "Panel administracyjny (Admin Dashboard) do zarządzania uprawnieniami i weryfikacji próśb o dostęp",
      "Responsywny, dopracowany interfejs zbudowany w oparciu o TailwindCSS"
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
      "PostgreSQL"
    ],
    description: "System zgłoszeń serwisowych oparty na Next.js App Router. Aplikacja pozwala na pełną obsługę problemów technicznych – od rejestracji zgłoszenia przez użytkownika, przez zarządzanie jego statusem i przypisywanie techników, aż po zamknięcie wątku.",
    features: [
      "Autoryzacja użytkowników z podziałem na role (User, Helpdesk, Admin) za pomocą NextAuth.js",
      "Tworzenie, zaawansowane filtrowanie oraz dynamiczna aktualizacja statusów zgłoszeń",
      "Dedykowany panel zarządzania dla personelu technicznego",
      "Integracja z chmurową bazą danych Supabase (PostgreSQL)"
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
      "Outbox pattern",
      "SignalR",
      "Quartz.NET",
      "SMTP",
      "JWT",
      "OAuth2",
      "Swagger"
    ],
    description: "Aplikacja full-stack do organizacji pracy zespołowej i zarządzania cyklem życia zadań. Oferuje komunikację w czasie rzeczywistym oraz automatyzację powtarzalnych procesów w tle.",
    features: [
      "Bezpieczne uwierzytelnianie użytkowników przy użyciu tokenów JWT oraz protokołu OAuth2",
      "Powiadomienia i aktualizacje stanów zadań w czasie rzeczywistym dzięki SignalR",
      "Automatyzacja zadań cyklicznych i wysyłki powiadomień e-mail przy użyciu Quartz.NET",
      "Implementacja wzorca Outbox Pattern zapewniająca spójność danych przy operacjach asynchronicznych"
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
      "C#",
      "ASP.NET Core",
      "REST Api",
      "EF Core",
      "PostgreSQL",
      "Docker",
      "JWT",
      "Swagger"
    ],
    description: "Aplikacja e-commerce dla sklepu narciarskiego z podziałem na część kliencką oraz panel zarządzania asortymentem. Projekt koncentruje się na architekturze REST API i czystym przepływie danych (projekt w stałym rozwoju).",
    features: [
      "Autoryzacja użytkowników za pomocą JWT oraz obsługa ról",
      "Katalog produktów z systemem wyszukiwania i filtrowania parametrów",
      "Pełny proces zakupowy z obsługą koszyka i składaniem zamówień",
      "Panel administratora do zarządzania bazą produktów i zamówień",
      "Zkonteneryzowane środowisko deweloperskie przy użyciu Dockera"
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
      "ASP.NET Core",
      "C#",
      "SQL",
      "REST Api",
      "Oracle"
    ],
    description: "Aplikacja webowa służąca do pobierania, agregacji i wizualizacji danych z relacyjnej bazy danych Oracle. Umożliwia monitorowanie wskaźników biznesowych poprzez interaktywne zestawienia.",
    features: [
      "Główny pulpit nawigacyjny prezentujący podsumowania kluczowych metryk",
      "Generowanie interaktywnych wykresów i dynamicznych tabel raportowych",
      "Zaawansowane filtrowanie, sortowanie i eksportowanie prezentowanych danych"
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
    description: "Projekt symulacji 2D przedstawiający uproszczony model ekosystemu drapieżników i ofiar. Nacisk położono na zasady programowania obiektowego (OOP) oraz optymalizację algorytmów zachowań jednostek.",
    features: [
      "Sterowanie parametrami symulacji w czasie rzeczywistym (zmiana prędkości, reset, dodawanie obiektów)",
      "Zaimplementowana logika sztucznej inteligencji dla zachowań wilków i królików",
      "Mechanika zarządzania energią, reprodukcji i naturalnego wymierania populacji",
      "Wydajny system detekcji kolizji obiektów na mapie",
      "Płynne renderowanie grafiki dwuwymiarowej przy użyciu biblioteki SFML"
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
    description: "Aplikacja desktopowa do zarządzania urządzeniami w sieci automatyki domowej. System wspiera dynamiczne wykrywanie sprzętu oraz pozwala na konfigurację parametrów środowiskowych.",
    features: [
      "Dynamiczne wykrywanie, rejestracja i nadawanie identyfikatorów nowym urządzeniom",
      "Sterowanie i symulacja zmian temperatury w czasie rzeczywistym",
      "Moduł kontroli oświetlenia (regulacja jasności oraz zmiana barw z palety kolorów)",
      "Obsługa rolet okiennych wraz z graficzną wizualizacją stopnia ich otwarcia",
      "Wielooknowy interfejs z dedykowanymi panelami kontrolnymi dla każdego typu urządzenia"
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
    description: "Platforma społecznościowa w formie aplikacji mobilnej, ułatwiająca organizację lokalnych wydarzeń oraz szybkie zwoływanie znajomych w świecie rzeczywistym.",
    features: [
      "Moduł rejestracji, uwierzytelniania oraz personalizacji profilu użytkownika",
      "Tworzenie, moderowanie i aplikowanie do lokalnych wydarzeń",
      "System relacji i zarządzania listą znajomych",
      "Integracja z mapami i geolokalizacją urządzenia do wyszukiwania aktywności w okolicy",
      "Wbudowany komunikator (czat) do rozmów w czasie rzeczywistym",
      "Dostęp do aparatu i galerii zdjęć z poziomu kodu Flutter"
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
    description: "Projekt interfejsu webowego (UI) dla warsztatu samochodowego. Skupia się na dostarczeniu intuicyjnych widoków dla klientów zamawiających naprawy oraz panelu dla obsługi warsztatu.",
    features: [
      "Formularz rezerwacji terminów online z wyborem konkretnych usług mechanicznych",
      "Widok listy zaplanowanych napraw oraz archiwum zakończonych zleceń",
      "Panel administracyjny (Dashboard) agregujący statusy prac i historię serwisową pojazdów",
      "W pełni responsywny układ stron dopasowany do urządzeń mobilnych"
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
      "Outbox Pattern",
      "Dependency Injection",
      "Clean Architecture"
    ],
    description: "Modułowy projekt backendowy .NET rozwijany zgodnie z zasadami Clean Architecture. Architektura aplikacji została oparta o szablon dotnetboilerplate w celu zapewnienia wysokiej skalowalności.",
    features: [
      "Implementacja systemu uwierzytelniania i kontroli dostępu opartej na uprawnieniach",
      "Zarządzanie katalogiem produktów, kategoriami oraz stanem magazynowym księgarni",
      "System dodawania, moderacji i agregacji recenzji użytkowników",
      "Integracja z zewnętrznym API (Resend) do niezawodnej wysyłki powiadomień e-mail",
      "Wykorzystanie wzorca Outbox Pattern do zapewnienia spójności transakcyjnej"
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
      "Logistic Regression"
    ],
    description: "Projekt z zakresu uczenia maszynowego skupiony na klasyfikacji obiektów podwodnych na podstawie sygnałów sonarowych. Model analizuje cechy częstotliwościowe, by odróżnić skały od min morskich.",
    features: [
      "Przetwarzanie, czyszczenie i standaryzacja surowych danych sonarowych z repozytorium UCI",
      "Trening i optymalizacja binarnych modeli klasyfikacyjnych (Regresja Logistyczna)",
      "Ewaluacja skuteczności modelu przy użyciu metryk Accuracy, Precision oraz Recall",
      "Skrypt predykcyjny umożliwiający szybką klasyfikację nowych próbek testowych"
    ]
  }
]