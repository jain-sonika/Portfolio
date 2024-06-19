/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sonika Jain",
  title: "Hi all, I'm Sonika",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ni74L5RbQKs3mpVfcvrTwzAa4iA3aIFj/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jain-sonika",
  linkedin: "https://www.linkedin.com/in/sonika-jain-128b2a25a/",
  gmail: "sonikajain0002@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for web applications"
    ),
    emoji("⚡ Progressive Web Applications"),
    emoji(
      "⚡ Develop java application will help to generate E-mail Id based on department"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongo-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "json",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dr APJ Abdul Kalam Technical University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachlors in Computer Science",
      duration: "July 2019 - June 2023",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Highly motivated and skilled Fresher Computer Science with a passion for developing innovative software solutions",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  display: true,
  subtitle: "SOME OF MY DEVELOPEMENT GEMS ",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Weather Forecasting",
      projectDesc: "In Weather Forecasting user can search locations by city name and get the weather information for the next 5-6 days and 3 hour interval.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://the-weather-forecasting.netlify.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/jain-sonika/Weather-Forecasting"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/news.webp"),
      projectName: "News-App",
      projectDesc: "This News App is powered by the GNews public API and provides users with the latest news articles from around the world.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://yournewsdaily.netlify.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/jain-sonika/News-App"
        }
      ]
    },
    {
      image: require("./assets/images/country.webp"),
      projectName: "Country-Pages",
      projectDesc: "Get Country Flag, Name , population, areas(km) , region , search counties and more . Get any country information regardless how you search",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://6601d055398f2b3adb77383a--brilliant-blini-afde62.netlify.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/jain-sonika/Country-Pages"
        }
      ]
    },
    {
      image: require("./assets/images/email.webp"),
      projectName: "Email-App",
      projectDesc: "This application will help to generate E-mail Id based on department.Have get methods to display the name, email, and mailbox capacity",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/jain-sonika/Projects/tree/Java-Projects/Email%20Application"
        },
        {
          name: "GitHub",
          url: "https://github.com/jain-sonika/Projects/tree/Java-Projects/Email%20Application"
        }
      ]
    }
  ], // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "HackerRank",
      subtitle:
        "Cleared the HakerRank Assesment for the various skills like javascript, React, HTML, CSS, etc.",
      image: require("./assets/images/HackerRank.webp"),
      footerLink: [
        {
          name: "Certificates",
          url: "https://www.hackerrank.com/profile/sonikajain0002"
        },
      ]
    },
    {
      title: "Virtual Experience Program",
      subtitle:
        "Partifipated and completed technology virtual experience program for Walmart, Deloitte, Accenture.",
      image: require("./assets/images/Forage.webp"),
      footerLink: [
        {
          name: "Certificates",
          url: "https://drive.google.com/drive/folders/17JoUCfjYIrR-VU203T-26j2k8JYkcuzw"
        }
      ]
    },

    {
      title: "Leetcode",
      subtitle: "Solved various Data structures and algorithm question and earned several badges based on my performance",
      image: require("./assets/images/leetcode.webp"),
      footerLink: [
        {
          name: "Badges",
          url: "https://leetcode.com/sonikajain0002/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7398068988",
  email_address: "sonikajain0002@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
