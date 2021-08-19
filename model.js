// ENUMS
const taskProgress = {
    NOTSTARTED: 0,
    STARTED: 1,
    FINISHED: 2,
}



// MODEL
const model = {
  // App level
  app: {
    currentPage: "loginPage",
    loggedInUser: "",
  },

  // Input level
  inputs: {
    loginPage: {
      username: "",
      password: "",
    },
    adminPage: {
      chatbox: "",
    },
    studentPage: {
      chatbox: "",
    },
  },

  // Common data
    
  users: [
    admin    =  { userID: "admin",      password: "admin",  isAdmin: true  },
    user0000 =  { userID: "Lars",       password: "admin",  isAdmin: false },
    user0001 =  { userID: "Morten",     password: "admin",  isAdmin: false },
    user0002 =  { userID: "Daniel",     password: "admin",  isAdmin: false },
    user0003 =  { userID: "student4",   password: "admin",  isAdmin: false },
    user0004 =  { userID: "student5",   password: "admin",  isAdmin: false },
    user0005 =  { userID: "student6",   password: "admin",  isAdmin: false },
    user0006 =  { userID: "student7",   password: "admin",  isAdmin: false },
    user0007 =  { userID: "student8",   password: "admin",  isAdmin: false },
  ],

    assignments: [
        week1 =  [
           {
            title: 'Introduksjon til HTMLPage',
            url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=354',
            progress: taskProgress.NOTSTARTED, 
            approved: false,
             
         },
           {
            title: 'Kurs i HTML fra W3SchoolsPage',
            url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=355',
            progress: taskProgress.NOTSTARTED,      
            approved: false,
             
         },
           {
            title: 'Kurs i CSS fra W3SchoolsPage',
            url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=356',
            progress: taskProgress.NOTSTARTED, 
            approved: false,
             
         },
           {
            title: 'Layout med CSS GridPage',
            url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=357',
            progress: taskProgress.NOTSTARTED,
            approved: false,
             
         },
           {
            title: 'SVGPage',
            url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=358',
            progress: taskProgress.NOTSTARTED,
            approved: false,
             
         },
           {
            title: 'Git og GitHubPage',
            url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=378',
            progress: taskProgress.NOTSTARTED,
            approved: false,
             
         },
           {
            title: 'Hands-on med Github og Github DesktopPage',
            url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=379',
            progress: taskProgress.NOTSTARTED,    
            approved: false,
             
         },
    
        ],
        week2 = [],
        week3 = [],
        week4 = [],
        week5 = [],
        week6 = [],
        week7 = [],
        week8 = [],
        weekBonus = [],
    ],
    
};

