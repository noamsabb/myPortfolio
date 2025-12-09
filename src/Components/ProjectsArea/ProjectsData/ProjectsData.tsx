export type Tech =
  | "React"
  | "TypeScript"
  | "Angular"
  | "Node.js"
  | "Express"
  | "MongoDB"
  | "MySQL"
  | "Docker"
  | "Redux"
  | "Charting"
  | "Auth"
  | "JavaScript";

export interface Project {
  id: string;
  slug: string;
  title: string;
  //   year: number;
  summary: string; // 1–2 lines
  tech: Tech[]; // tags
  image: string;
  gallery?: string[];
  github: string;
  highlights: string[]; // 2–4 bullets
}

// CryptoLive
import CryptoLiveHero from "../../../assets/CryptoLive/Home.png";
import cryptoHome2 from "../../../assets/CryptoLive/Home 2.png";
import cryptoLiveReports from "../../../assets/CryptoLive/Live Reports.png";
import cryptoMaxCoins from "../../../assets/CryptoLive/Max coins.png";

// GeoStaff
import GeoStaffHero from "../../../assets/GeoStaff/Home.png";
import geoAdd from "../../../assets/GeoStaff/Add.png";
import geoList from "../../../assets/GeoStaff/List.png";
import geoRandomGame from "../../../assets/GeoStaff/Random Game.png";

// Like2Vacation
import like2VacationHero from "../../../assets/Like2Vacation/home.png";
import likeLogin from "../../../assets/Like2Vacation/login.png";
import likeSignin from "../../../assets/Like2Vacation/signin.png";
import likeVacations from "../../../assets/Like2Vacation/vacations.png";
import likeVacations2 from "../../../assets/Like2Vacation/vacations2.png";

// MeetFlow
import MeetFlowHero from "../../../assets/MeetFlow/Home.png";
import meetAdd from "../../../assets/MeetFlow/Add.png";
import meetMeetings from "../../../assets/MeetFlow/Meetings.png";

// Mapping object
export const projectImages = {
  // CryptoLive
  "CryptoLive-Home": CryptoLiveHero,
  "CryptoLive-Home2": cryptoHome2,
  "CryptoLive-LiveReports": cryptoLiveReports,
  "CryptoLive-MaxCoins": cryptoMaxCoins,

  // GeoStaff
  "GeoStaff-Add": geoAdd,
  "GeoStaff-Home": GeoStaffHero,
  "GeoStaff-List": geoList,
  "GeoStaff-RandomGame": geoRandomGame,

  // Like2Vacation
  "Like2Vacation-home": like2VacationHero,
  "Like2Vacation-login": likeLogin,
  "Like2Vacation-signin": likeSignin,
  "Like2Vacation-vacations": likeVacations,
  "Like2Vacation-vacations2": likeVacations2,

  // MeetFlow
  "MeetFlow-Add": meetAdd,
  "MeetFlow-Home": MeetFlowHero,
  "MeetFlow-Meetings": meetMeetings,
};
export const projects: Project[] = [
  {
    id: "like2vacation",
    slug: "like2vacation",
    title: "Like2Vacation",
    summary: "Vacation platform with likes, filters, reports, and admin CRUD.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Docker"],
    image: like2VacationHero,
    gallery: [
      "Like2Vacation-home",
      "Like2Vacation-login",
      "Like2Vacation-signin",
      "Like2Vacation-vacations",
      "Like2Vacation-vacations2",
    ],
    github: "https://github.com/noamsabb/final-project-vacations",
    highlights: [
      "Role-based auth (user/admin), likes & reports",
      "Pagination, filtering and responsive UI",
      "Dockerized dev environment",
    ],
  },
  {
    id: "meeting-manager",
    slug: "meeting-manager",
    title: "Meeting Manager",
    summary: "Team meetings manager with groups and scheduling.",
    tech: ["React", "Node.js", "MongoDB", "Auth"],
    image: MeetFlowHero,
    gallery: ["MeetFlow-Add", "MeetFlow-Home", "MeetFlow-Meetings"],
    github: "https://github.com/noamsabb/meetFlow",
    highlights: ["REST API + form validation", "Reusable UI components"],
  },
  {
    id: "cryptoLive",
    slug: "cryptoLive",
    title: "CryptoLive",
    summary: "Crypto dashboard with search, live reports, and charts.",
    tech: ["JavaScript", "Charting"],
    image: CryptoLiveHero,
    gallery: [
      "CryptoLive-Home",
      "CryptoLive-Home2",
      "CryptoLive-LiveReports",
      "CryptoLive-MaxCoins",
    ],
    github: "https://github.com/noamsabb/cryptoLive",
    highlights: [
      "External API integration",
      "Performance-conscious list rendering",
    ],
  },
  {
    id: "geoStaff",
    slug: "geoStaff",
    title: "GeoStaff",
    summary:
      "A full-stack system that stores users and their GPS location, with full CRUD operations and map visualization. ",
    tech: ["Node.js", "Express", "Angular", "TypeScript", "MongoDB"],
    image: GeoStaffHero,
    gallery: [
      "GeoStaff-Add",
      "GeoStaff-Home",
      "GeoStaff-List",
      "GeoStaff-RandomGame",
    ],
    github: "https://github.com/noamsabb/geoStaff",
    highlights: [
      "External API integration",
      "Performance-conscious list rendering",
    ],
  },
];
