const APP_VERSION_NUMBER = "v0.0000000000007";

// ENUMS
const Progress = {
    NOTSTARTED: 0,
    STARTED: 1,
    FINISHED: 2,
}

const Pages = {
  LOGIN: "loginPage",
  USER: "userPage",
  ADMIN: "adminPage",
}
const MenuType = {
  STUDENT: 0,
  WEEKS: 1,
}

// DEBUG STUFF
const debug = {
      
      useLoginTesting: true,
      defaultUSER: "Admin",
      defaultPW: "admin",
  
}
var chartDataTest;
// MODEL
const model = {


    // App level
    app: {
        currentPage: Pages.LOGIN,
        loggedInUser: "",
    },


    PageStates: {
      menuType: MenuType.WEEKS,
      selectedWeek: 0,
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

    totalUsersMade: 12,

    users: [
        { id: 0,  name: "Admin",      password: "admin", isAdmin: true,  isDisabled: false },
        { id: 1,  name: "Lars",       password: "admin", isAdmin: false, isDisabled: false },
        { id: 2,  name: "Morten",     password: "admin", isAdmin: false, isDisabled: false },
        { id: 3,  name: "Daniel",     password: "admin", isAdmin: false, isDisabled: false },
        { id: 4,  name: "student4",   password: "admin", isAdmin: false, isDisabled: false },
        { id: 5,  name: "student5",   password: "admin", isAdmin: false, isDisabled: false },
        { id: 6,  name: "student6",   password: "admin", isAdmin: false, isDisabled: false },
        { id: 7,  name: "student7",   password: "admin", isAdmin: false, isDisabled: false },
        { id: 8,  name: "student8",   password: "admin", isAdmin: false, isDisabled: false },
        { id: 9,  name: "student9",   password: "admin", isAdmin: false, isDisabled: false },
        { id: 10, name: "student10",  password: "admin", isAdmin: false, isDisabled: false },
        { id: 11, name: "student11",  password: "admin", isAdmin: false, isDisabled: false },
        { id: 12, name: "student12",  password: "admin", isAdmin: false, isDisabled: false },
    ],


    weeks: [
        { weekId: 1, taskCount: 7 },
        { weekId: 2, taskCount: 9 },
        { weekId: 3, taskCount: 10 },
        { weekId: 4, taskCount: 6 },
        { weekId: 5, taskCount: 5 },
        { weekId: 6, taskCount: 2 },
        { weekId: 7, taskCount: 0 },
        { weekId: 8, taskCount: 0 },
    ],
        /*------------------------------------------*
         *           task = index starts 0          *
        /*------------------------------------------*/
    tasks: [
      { id: 1,  weekIndex: 0,  taskInWeek: 0, progress: Progress.STARTED,        approved: false, student: 1 },
      { id: 2,  weekIndex: 0,  taskInWeek: 1, progress: Progress.NOTSTARTED,     approved: false, student: 1 },
      { id: 3,  weekIndex: 0,  taskInWeek: 3, progress: Progress.STARTED,        approved: false, student: 1 },
      { id: 4,  weekIndex: 0,  taskInWeek: 0, progress: Progress.STARTED,        approved: false, student: 2 },
      { id: 5,  weekIndex: 0,  taskInWeek: 4, progress: Progress.FINISHED,       approved: false, student: 1 },
      { id: 6,  weekIndex: 0,  taskInWeek: 5, progress: Progress.FINISHED,       approved: false, student: 1 },
      { id: 7,  weekIndex: 1,  taskInWeek: 1, progress: Progress.FINISHED,       approved: false, student: 2 },
      { id: 8,  weekIndex: 1,  taskInWeek: 2, progress: Progress.FINISHED,       approved: false, student: 2 },
      { id: 9,  weekIndex: 1,  taskInWeek: 3, progress: Progress.FINISHED,       approved: false, student: 2 },
      { id: 10, weekIndex: 1,  taskInWeek: 4, progress: Progress.FINISHED,       approved: false, student: 2 },
      { id: 11, weekIndex: 2,  taskInWeek: 1, progress: Progress.STARTED,        approved: false, student: 2 },
      { id: 12, weekIndex: 2,  taskInWeek: 2, progress: Progress.FINISHED,       approved: false, student: 2 },
    ],



    assignments: [
        /*-----------------------------*
         *           WEEK 1            *
        /*-----------------------------*/

        {
          weekIndex: 0,
          taskInWeek: 0,
          title: 'Introduksjon til HTML',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=354',
        },
        {
          weekIndex: 0,
          taskInWeek: 1,
          title: 'Kurs i HTML fra W3Schools',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=355',
        },
        {
          weekIndex: 0,
          taskInWeek: 2,
          title: 'Kurs i CSS fra W3Schools',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=356',
        },
        {
          weekIndex: 0,
          taskInWeek: 3,
          title: 'Layout med CSS Grid',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=357',
        },
        {
          weekIndex: 0,
          taskInWeek: 4,
          title: 'SVG',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=358',
        },
        {
          weekIndex: 0,
          taskInWeek: 5,
          title: 'Git og GitHub',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=378',
        },
        {
          weekIndex: 0,
            taskInWeek: 6,
          title: 'Hands-on med Github og Github Desktop',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=379',
        },

        /*-----------------------------*
         *           WEEK 2            *
        /*-----------------------------*/

        {
          weekIndex: 1,
          taskInWeek: 0,
          title: 'Onclick og kjøre funksjon som endrer innerHTML til element ut fra Id',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=359',
        },
        {
          weekIndex: 1,
          taskInWeek: 1,
          title: 'Alternative eventhandlere: onchange osv.',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=360',
        },
        {
          weekIndex: 1,
          taskInWeek: 2,
          title: 'Nøkkelordet "this"',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=361',
        },
        {
          weekIndex: 1,
          taskInWeek: 3,
          title: 'Variabel utenfor funksjon og innenfor funksjon, samt sette sammen tekst av flere deler, lagre tekst og tall i variabel',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=362',
        },
        {
          weekIndex: 1,
          taskInWeek: 4,
          title: 'Kode som kjøres når siden lastes vs kode i en funksjon',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=363',
        },
        {
          weekIndex: 1,
          taskInWeek: 5,
          title: 'Sette sammen tekst av flere deler og bruke dette til å bygge HTML dynamisk',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=364',
        },
        {
          weekIndex: 1,
          taskInWeek: 6,
          title: 'Sette variabel til resultat av et regnestykke',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=365',
        },
        {
          weekIndex: 1,
          taskInWeek: 7,
          title: 'Sette variabel til tilfeldig tall',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=366',
        },
        {
          weekIndex: 1,
          taskInWeek: 8,
          title: 'Endre andre ting enn innerHTML: value, style',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=367',
        },
        /*-----------------------------*
         *            WEEK 3           *
        /*-----------------------------*/
        {
          weekIndex: 2,
          taskInWeek: 0,
          title: 'Introduksjon til Model View Controller via et enkelt clickergame',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=420',
        },
        {
          weekIndex: 2,
          taskInWeek: 1,
          title: 'Input fra brukeren med MVC',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=493',
        },
        {
          weekIndex: 2,
          taskInWeek: 2,
          title: 'Oppgave - kalkulator',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=461',
        },
        {
          weekIndex: 2,
          taskInWeek: 3,
          title: 'Enkel statistikk',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=462',
        },
        {
          weekIndex: 2,
          taskInWeek: 4,
          title: 'Valgsetninger - Sammenligne to tall: ==, !=, <, <=, >, >=',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=368',
        },
        {
          weekIndex: 2,
          taskInWeek: 5,
          title: 'Valgsetninger - Sammenligne to teksterPage',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=369',
        },
        {
          weekIndex: 2,
          taskInWeek: 6,
          title: 'Valgsetninger - Sammenligne flere ting på en gang (og)',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=372',
        },
        {
          weekIndex: 2,
          taskInWeek: 7,
          title: 'Valgsetninger - Sammenligne flere ting på en gang (eller)',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=373',
        },
        {
          weekIndex: 2,
          taskInWeek: 8,
          title: 'Valgsetninger - Sammenligne flere ting på en gang (både og og eller samtidig)',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=374',
        },
        {
          weekIndex: 2,
          taskInWeek: 9,
          title: 'oppgaver i code2flow',
          url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=370',
        },
    ],

    /*
    function getAssignment(weekIndex, taskInWeek) {
        for (let assignment og model.assignments) {
            if (assignment.weekIndex == weekIndex && assignment.taskInWeek == taskInWeek) {
                return assignment;
            }
        }
        return null;
    }

    function getAssignment(weekIndex, taskInWeek) {
      return model.assignments.find(a=>a.weekIndex == weekIndex && a.taskInWeek == taskInWeek);
    }

    createUser()
    {
      lastUser++;

      name = inputs.name;
      password = inputs.password;
      isAdmin = inputs.isAdmin;

      createObject(lastUser, name, password, isAdmin, false);
    }

    */

}
