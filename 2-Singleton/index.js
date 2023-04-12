// WHEN WE WANT TO HAVE ONLY ONE INSTANCE(object) OF CLASS

// ----------------------------
// ES5 WAY
// ----------------------------
// function Process(state) {
//     this.state = state;
// }

// const Singleton = (function () {
//     function ProcessManager() {
//         this.numProcesses = 0;

//         this.incrementProcesses = function () {
//             this.numProcesses++;
//         };
//     }

//     let processManager;

//     function createProcessManager() {
//         processManager = new ProcessManager();
//         return processManager;
//     }

//     return {
//         getProcessManager: () => {
//             if (processManager) return processManager;
//             return createProcessManager();
//         },
//     };
// })();

// ----------------------------
// ES6 WAY
// ----------------------------
class Process {
    constructor(state) {
        this.state = state;
    }
}

const Singleton = (function () {
    class ProcessManager {
        constructor() {
            this.numProcesses = 0;
        }
        incrementProcesses() {
            this.numProcesses++;
        }
    }

    let processManagerInstance;

    function createProcessManager() {
        processManagerInstance = new ProcessManager();
        return processManagerInstance;
    }

    return {
        getProcessManager: () => processManagerInstance || createProcessManager(),
    };
})();

const processManager = Singleton.getProcessManager();
const processManager1 = Singleton.getProcessManager();

console.log(processManager === processManager1);
processManager.incrementProcesses();
console.log(processManager.numProcesses);
console.log(processManager1.numProcesses);

processManager1.incrementProcesses();
console.log(processManager.numProcesses);
console.log(processManager1.numProcesses);
