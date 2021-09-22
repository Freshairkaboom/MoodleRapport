const APP_VERSION_NUMBER = "v0.0000000000013 - WHATS IN THE BOXXXX :D";



/* DEBUG FUNCTION */
function printChatData(_studentID)
{
  model.chatMsg.forEach( element => {
      if (element.studentID == _studentID)
        console.log(element.msgs);
    });
}
/* DEBUG FUNCTION */


// MODEL
const model = {

  chatMsg: [
    { studentId: 1, msgs: [
      { week: 0, order: 1, whoCommented: 'Admin', msg: "Bra jobbet", timeStamp: '12:20:00', isVisible: true },
      { week: 0, order: 2, whoCommented: 'Admin', msg: "Veeeeel...", timeStamp: '',         isVisible: false},
      { week: 0, order: 3, whoCommented: 'Admin', msg: "Sjakk er gøy", timeStamp: '',       isVisible: false},
      { week: 0, order: 4, whoCommented: 'Admin', msg: "Daniel er kul", timeStamp: '',      isVisible: false},
      { week: 0, order: 5, whoCommented: 'Admin', msg: "Nå eru snart ute", timeStamp: '',   isVisible: false},

   ],},
    { studentId: 2, msgs: [
      { week: 0, order: 0, whoCommented: 'Admin', msg: "Bra jobbet", timeStamp: '', isVisible: true },
      { week: 0, order: 1, whoCommented: 'Admin', msg: "Veeeeel...", timeStamp: '', isVisible: false},
    ],},
    { studentId: 3, msgs: [
      { week: 0, order: 0, whoCommented: 'Admin', msg: "Bra jobbet", timeStamp: '', isVisible: true },
      { week: 0, order: 1, whoCommented: 'Admin', msg: "Veeeeel...", timeStamp: '', isVisible: false},
    ],},
    { studentId: 4, msgs: [
      { week: 0, order: 0, whoCommented: 'Admin', msg: "Bra jobbet", timeStamp: '', isVisible: true },
      { week: 0, order: 1, whoCommented: 'Admin', msg: "Veeeeel...", timeStamp: '', isVisible: false},
    ],},
    { studentId: 5, msgs: [
      { week: 0, order: 0, whoCommented: 'Admin', msg: "Bra jobbet", timeStamp: '', isVisible: true },
      { week: 0, order: 1, whoCommented: 'Admin', msg: "Veeeeel...", timeStamp: '', isVisible: false},
    ],},
    { studentId: 6,  msgs: [],},
    { studentId: 7,  msgs: [],},
    { studentId: 8,  msgs: [],},
    { studentId: 9,  msgs: [],},
    { studentId: 10, msgs: [],},
    { studentId: 11, msgs: [],},
    { studentId: 12, msgs: [],},
  ],

  // App level
  app: {
    currentPage: Pages.LOGIN,
    loggedInUser: "",
  },


  PageStates: {
    menuType: MenuType.WEEKS,
    selectedWeek: 0,
    selectedStudent: '',
  },

  // Input levelw
  inputs: {
    loginPage: {
      username: "",
      password: "",
      errorMessage: ErrorMessages.NONE,
    },
    defaultChatMessage: "Skriv her...",
    tempChatMessage: "Skriv her...",
  },

  chatBox: { isHiddenBoxTicked: true, },/*[
     { id: 0, whoCommented: 0, Owner: 1, Msg: "Bra jobbet", isVisible: true, isHiddenBoxTicked: true }
  ],*/

  // Common data

  totalUsersMade: 18,

  users: [
    { id: 0,  name: "Admin",       password: "admin", isAdmin: true,  isDisabled: false },
    { id: 1,  name: "Lars",        password: "admin", isAdmin: false, isDisabled: false },
    { id: 2,  name: "Morten",      password: "admin", isAdmin: false, isDisabled: false },
    { id: 3,  name: "Daniel",      password: "admin", isAdmin: false, isDisabled: false },
    { id: 4,  name: "Adrian",      password: "admin", isAdmin: false, isDisabled: false },
    { id: 5,  name: "Asbjørn",     password: "admin", isAdmin: false, isDisabled: false },
    { id: 6,  name: "Bjørn",       password: "admin", isAdmin: false, isDisabled: false },
    { id: 7,  name: "Theodor",     password: "admin", isAdmin: false, isDisabled: false },
    { id: 8,  name: "Jostein",     password: "admin", isAdmin: false, isDisabled: false },
    { id: 9,  name: "Kasper",      password: "admin", isAdmin: false, isDisabled: false },
    { id: 10, name: "Mailinn",     password: "admin", isAdmin: false, isDisabled: false },
    { id: 11, name: "MagzyBogues", password: "admin", isAdmin: false, isDisabled: false },
    { id: 13, name: "Mats",        password: "admin", isAdmin: false, isDisabled: false },
    { id: 14, name: "Nanna",       password: "admin", isAdmin: false, isDisabled: false },
    { id: 15, name: "Nikolai",     password: "admin", isAdmin: false, isDisabled: false },
    { id: 16, name: "Stefanos",    password: "admin", isAdmin: false, isDisabled: false },
    { id: 17, name: "Disabled",    password: "admin", isAdmin: false, isDisabled: true  },
  ],


  weeks: [
    { weekId: 1, description: "Uke 1", taskCount: 7 },
    { weekId: 2, description: "Uke 2", taskCount: 9 },
    { weekId: 3, description: "Uke 3", taskCount: 10 },
    { weekId: 4, description: "Uke 4", taskCount: 6 },
    { weekId: 5, description: "Uke 5", taskCount: 5 },
    { weekId: 6, description: "Uke 6", taskCount: 2 },
    { weekId: 7, description: "Bonus-Pensum", taskCount: 24 },
  ],


  /*------------------------------------------*
   *           task = index starts 0          *
   *------------------------------------------*/

  totalTasksMade: 12,

  tasks: [
    { id: 1,  weekIndex: 0, taskInWeek: 0, progress: Progress.STARTED,    approved: false, student: 1 },
    { id: 2,  weekIndex: 0, taskInWeek: 1, progress: Progress.NOTSTARTED, approved: true,  student: 1 },
    { id: 3,  weekIndex: 0, taskInWeek: 3, progress: Progress.STARTED,    approved: false, student: 1 },
    { id: 4,  weekIndex: 0, taskInWeek: 0, progress: Progress.STARTED,    approved: true,  student: 2 },
    { id: 5,  weekIndex: 0, taskInWeek: 4, progress: Progress.FINISHED,   approved: false, student: 1 },
    { id: 6,  weekIndex: 0, taskInWeek: 5, progress: Progress.FINISHED,   approved: false, student: 1 },
    { id: 7,  weekIndex: 1, taskInWeek: 1, progress: Progress.FINISHED,   approved: false, student: 2 },
    { id: 8,  weekIndex: 1, taskInWeek: 2, progress: Progress.FINISHED,   approved: false, student: 2 },
    { id: 9,  weekIndex: 1, taskInWeek: 3, progress: Progress.FINISHED,   approved: false, student: 2 },
    { id: 10, weekIndex: 1, taskInWeek: 4, progress: Progress.FINISHED,   approved: false, student: 2 },
    { id: 11, weekIndex: 2, taskInWeek: 1, progress: Progress.STARTED,    approved: false, student: 2 },
    { id: 12, weekIndex: 2, taskInWeek: 2, progress: Progress.FINISHED,   approved: false, student: 2 },
  ],



  displayedTaskId: [], // DECREPATED



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
    /*-----------------------------*
     *            WEEK 4           *
    /*-----------------------------*/
    {
      weekIndex: 3,
      taskInWeek: 0,
      title: 'Introduksjon til unit testing',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=470',
    },
    {
      weekIndex: 3,
      taskInWeek: 1,
      title: 'Oppgave: formatering av tekst',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=471',
    },
    {
      weekIndex: 3,
      taskInWeek: 2,
      title: 'Oppgave: gjenkjenne epostadresse',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=472',
    },
    {
      weekIndex: 3,
      taskInWeek: 3,
      title: 'Enhetstesting av controller-funksjonene',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=484',
    },
    {
      weekIndex: 3,
      taskInWeek: 4,
      title: 'Refactoring - og kunsten å dele opp koden i korte og pene funksjoner',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=473',
    },
    {
      weekIndex: 3,
      taskInWeek: 5,
      title: 'Unit testing av controller-funksjonene i clicker-gamet fra tidligere',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=511',
    },
    /*-----------------------------*
     *            WEEK 5           *
    /*-----------------------------*/
    {
      weekIndex: 4,
      taskInWeek: 0,
      title: 'Undervisning - Løkker og tabeller Page',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=389',
    },
    {
      weekIndex: 4,
      taskInWeek: 1,
      title: 'Oppgave - Gangetabellen',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=463',
    },
    {
      weekIndex: 4,
      taskInWeek: 2,
      title: 'Oppgave - Tre på rad med løsning',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=390',
    },
    {
      weekIndex: 4,
      taskInWeek: 3,
      title: 'Oppgave - Tallpuslespill',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=430',
    },
    {
      weekIndex: 4,
      taskInWeek: 4,
      title: 'Oppgave - Reaksjonstid',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=491',
    },
    /*-----------------------------*
     *            WEEK 6           *
    /*-----------------------------*/
    {
      weekIndex: 5,
      taskInWeek: 0,
      title: 'Enhetstesting av controller-funksjoner',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=486',
    },
    {
      weekIndex: 5,
      taskInWeek: 1,
      title: 'Obligatorisk oppgave',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=459',
    },
    /*-----------------------------*
     *        BONUS-PENSUM         *
    /*-----------------------------*/
    {
      weekIndex: 6,
      taskInWeek: 0,
      title: 'Gjennomgang av problemløsningsteknikkene fra "Koding for alle i JavaScript"',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=512',
    },
    {
      weekIndex: 6,
      taskInWeek: 1,
      title: 'Debugging i nettleser og console.log',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=523',
    },
    {
      weekIndex: 6,
      taskInWeek: 2,
      title: 'Callbacks, promises, async og await',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=404',
    },
    {
      weekIndex: 6,
      taskInWeek: 3,
      title: 'Firestore intro',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=405',
    },
    {
      weekIndex: 6,
      taskInWeek: 4,
      title: 'Oppgaver',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=406',
    },
    {
      weekIndex: 6,
      taskInWeek: 5,
      title: 'Oppgave - Vinlotterix',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=434',
    },
    {
      weekIndex: 6,
      taskInWeek: 6,
      title: 'Undervisning - Introduksjon til eksempelet',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=407',
    },
    {
      weekIndex: 6,
      taskInWeek: 7,
      title: 'Undervisning - Forbedret og mer objektorientert versjon av svingende tekst',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=408',
    },
    {
      weekIndex: 6,
      taskInWeek: 8,
      title: 'Oppgave - Tilfeldige firkanter',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=409',
    },
    {
      weekIndex: 6,
      taskInWeek: 9,
      title: 'Oppgave - Tre på rad revisited',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=410',
    },
    {
      weekIndex: 6,
      taskInWeek: 10,
      title: 'Introduksjon til web-komponenter',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=526',
    },
    {
      weekIndex: 6,
      taskInWeek: 11,
      title: 'Introduksjon til SPA-rammeverk og Vue.js',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=411',
    },
    {
      weekIndex: 6,
      taskInWeek: 12,
      title: 'Tutorials',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=412',
    },
    {
      weekIndex: 6,
      taskInWeek: 13,
      title: 'Eksempel - med og uten komponent',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=413',
    },
    {
      weekIndex: 6,
      taskInWeek: 14,
      title: 'Vue CLI',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=414',
    },
    {
      weekIndex: 6,
      taskInWeek: 15,
      title: 'Vue - med events og properties',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=426',
    },
    {
      weekIndex: 6,
      taskInWeek: 16,
      title: 'Oppgave',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=429',
    },
    {
      weekIndex: 6,
      taskInWeek: 17,
      title: 'Oppgave',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=433',
    },
    {
      weekIndex: 6,
      taskInWeek: 18,
      title: 'Vuex',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=464',
    },
    {
      weekIndex: 6,
      taskInWeek: 19,
      title: 'Bonusmateriale',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=440',
    },
    {
      weekIndex: 6,
      taskInWeek: 20,
      title: 'Oppgave Yatzy del 1 - Model og View for scoreboard',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=415',
    },
    {
      weekIndex: 6,
      taskInWeek: 21,
      title: 'Oppgave Yazty del 2 - Model og View for fem terninger',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=416',
    },
    {
      weekIndex: 6,
      taskInWeek: 22,
      title: 'Oppgave Yatzy del 3 - Plassere resultat på scoreboard',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=417',
    },
    {
      weekIndex: 6,
      taskInWeek: 23,
      title: 'Idé til oppgave',
      url: 'https://getacademy.moodlecloud.com/mod/page/view.php?id=418',
    },
  ],


/*







*/




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
