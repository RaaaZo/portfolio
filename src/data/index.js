import gmail from "assets/svg/gmail.svg";
import phone from "assets/svg/phone.svg";
import linkedin from "assets/svg/linkedin.svg";
import github from "assets/svg/github.svg";

export const ButtonsData = [
  {
    id: 1,
    text: "HTML",
    inverse: false
  },
  {
    id: 2,
    text: "CSS",
    inverse: true
  },
  {
    id: 3,
    text: "Javascript",
    inverse: false
  },
  {
    id: 4,
    text: "REACT",
    inverse: true
  },
  {
    id: 5,
    text: "NODE.JS",
    inverse: false
  },
  {
    id: 6,
    text: "EXPRESS",
    inverse: true
  },
  {
    id: 7,
    text: "MONGODB",
    inverse: false
  },
  {
    id: 13,
    text: "JEST",
    inverse: true
  },
  {
    id: 14,
    text: "REACT TESTING LIBRARY",
    inverse: false
  },
  {
    id: 8,
    text: "GSAP",
    inverse: true
  },
  {
    id: 9,
    text: "NPM",
    inverse: false
  },
  {
    id: 10,
    text: "GIT",
    inverse: true
  },
  {
    id: 11,
    text: "SASS",
    inverse: false
  },
  {
    id: 12,
    text: "REDUX",
    inverse: true
  }
];

export const actuallyLearningData = [
  {
    id: 14,
    text: "Mastering Express",
    inverse: false
  },
  {
    id: 15,
    text: "Mastering MongoDB",
    inverse: true
  },
  {
    id: 16,
    text: "Learning TypeScript",
    inverse: false
  }
];

export const wantToLearnData = [
  {
    id: 21,
    text: "Next.js",
    inverse: true
  },
  {
    id: 18,
    text: "Graphql",
    inverse: false
  },
  {
    id: 20,
    text: "Sanity",
    inverse: false
  }
];

export const othersKnown = [
  {
    id: 23,
    text: "Algorithms",
    inverse: false
  },
  {
    id: 24,
    text: "Scrum methodology",
    inverse: true
  },
  {
    id: 25,
    text: "Figma",
    inverse: false
  },
  {
    id: 26,
    text: "Material UI and Bootstrap",
    inverse: true
  },
  {
    id: 27,
    text: "KISS & DRY ",
    inverse: false
  }
];

export const projectsData = [
  {
    id: 1,
    title: "BestDrinks",
    descTop: `Page where you can add drink recipes. Front-end is written in React (used Context instead of Redux, formik for forms, and other React libraries), Backend in Express.js, and I used MongoDB as a database.`,
    descBottom: `When you log in (default account: test@test.com and password tester123) You can add a new recipe, edit an existing one, and delete existing recipes (if it belongs to Your account). You can also create your new account if you want. Feel free to try it.`,
    live: "https://best-drinks-295be.web.app/",
    code: "https://github.com/RaaaZo/bestdrinks"
  },
  {
    id: 2,
    title: "E-shop",
    descTop: `Page where you can buy some clothes. As in the previous one project Front-end is written in React (used Redux and formik and some minor React libraries), Backend in Express.js, and I used MongoDB as a database.`,
    descBottom: `When you log in (default account: test@test.com and password tester123) You can check your purchase history. If You won't sign in You can still "buy" things and get a thanks for buying page with Your data.`,
    live: "https://e-shop-730ae.web.app/",
    code: "https://github.com/RaaaZo/e-shop"
  },
  {
    id: 3,
    title: "CountryInfo",
    descTop: `There You can check main informations about each Country on the globe (capital name, population, region, etc.) with country name or capital name (Database accepts only English names). This project is also written in React (used context).`,

    live: "https://country-info-551b0.web.app/",
    code: "https://github.com/RaaaZo/CountryInfo"
  },
  {
    id: 4,
    title: "Dentist business page",
    descTop: `Page is written for a Dentist whose working in Toruń. Page is also made in React and it's using GoogleMaps API. Actually I'm waiting for images and text which I can add to each service he offers. Look of a page is accepted and in the near feature it will be done.`,
    live: "https://stomatologist-visitingcard.web.app/",
    code: "https://github.com/RaaaZo/stomatologist"
  }
];

export const contactData = [
  {
    id: 1,
    svg: gmail,
    text: "Gmail",
    data: "koprowicz.mateusz@gmail.com"
  },
  {
    id: 2,
    svg: phone,
    text: "Phone",
    data: "666-842-265"
  },
  {
    id: 3,
    svg: linkedin,
    text: "Linkedin",
    link: "https://www.linkedin.com/in/mateusz-koprowicz-3b8bb3178/"
  },
  {
    id: 4,
    svg: github,
    text: "Github",
    link: "https://github.com/RaaaZo"
  }
];
