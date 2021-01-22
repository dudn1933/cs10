const { READY, RUNNING, WAITING, TERMINATED } = require("./state");
const { log } = console;

const random = count => {
    let word = "가나다라마바사아자차카타파하";
    let randomId = [];
    let randomSec = [];

    while (randomId.length !== count) {
        let wordlength = Math.floor(Math.random() * word.length);
        randomId.push(word.slice(wordlength, wordlength + 1));
        randomId = [...new Set(randomId)];
    }
    while (randomSec.length !== count) {
        randomSec.push(Math.floor(Math.random() * 8) + 2); // 2 ~ 9까지
        randomSec = [...new Set(randomSec)];
    }

    return [randomId, randomSec];
}

const Process = (id, maxTime, operatedTime = 0, state = READY) => {
    return { id, maxTime, operatedTime, state };
}

const OS = (...process) => {
    const processes = process;
    log(processes)
    const readyQueue = [...processes];
    log(readyQueue)
    const waitingQueue = [];
    log(waitingQueue)
    const executingProcess = null;
    log(executingProcess)
    return { processes, readyQueue, waitingQueue, executingProcess };
};

const isTerminated = (process) => {
    if (process.operatedTime < process.maxTime) {
        process.state = WAITING;
        return false;
    }
    process.state = TERMINATED;
    return true;
};

const getNextRunning = (queue) => {
    const nextProcess = queue.shift();
    nextProcess.state = RUNNING;
    nextProcess.operatedTime++;
    return nextProcess;
};

const execute = (os) => {
    if (os.executingProcess) {
        isTerminated(os.executingProcess) ? null : os.waitingQueue.push(os.executingProcess);
        os.executingProcess = null;
    }
    if (os.readyQueue.length) {
        os.executingProcess = getNextRunning(os.readyQueue);
    } else {
        if (!os.waitingQueue.length) return;
        os.executingProcess = getNextRunning(os.waitingQueue);
    }
};

const isFinished = (processes) => processes.every((e) => e.state === TERMINATED);

const program = () => {
    const [randomId, randomTime] = random(3);

    const processes = randomId.map((id, index) => Process(id, randomTime[index]));
    // 객체 => 배열 [ ID: ID, maxTime: maxTime 설정됨.]

    const os = OS(...processes);
    // 여기까진 operatedTime, state 는 변함이 없다.
    // processes = 객체, readyQueue = 객체, waitingQueue = 빈배열, executingProcess = null

    const repeat = setInterval(() => {
        execute(os);
        os.processes.forEach((process) => {
            const { id, state, maxTime, operatedTime } = process;
            log(`${id}(${state}): ${operatedTime} / ${maxTime}`);
        });
        if (isFinished(os.processes)) {
            clearInterval(repeat);
            log(`\n모든 프로세스가 종료되었습니다.`);
        } else log(".");
    }, 1000);
};

program();