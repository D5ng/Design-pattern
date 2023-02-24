// JS 클로저를 이용한 방식
// const Singleton = (function () {
//   let pManager;

//   function ProcessManager() {}

//   function createProcessManager() {
//     pManager = new ProcessManager();
//     return pManager;
//   }

//   return {
//     getProcessManager: () => {
//       if (!pManager) pManager = createProcessManager();
//       return pManager;
//     },
//   };
// })();

// const singleton = Singleton.getProcessManager();
// const singleton2 = Singleton.getProcessManager();

// console.log(singleton === singleton2); // true


// JS Class를 이용한 방식
class Singleton {
  static instance;
  constructor(name, type){
    if(Singleton.instance){
      return Singleton.instance
    }

    this.name = name;
    this.type = type;
    return Singleton.instance = this;
  }
}

const singleton = new Singleton('dongs', 'Dev');
const singleton2 = new Singleton("dongHyun", "Tester");

console.log(singleton === singleton2);