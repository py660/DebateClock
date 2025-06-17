
let number = 1;

interface Timer {
    remaining: number,
    end: number,
    paused: boolean
}

class Timer { // Non-polling stateful
    /**
     * Creates a paused timer
     *
     * @param   total  Time in milliseconds
     * @returns The timer object
     */
    constructor(total: number){
        this.remaining = total;
        this.end = new Date().getTime() + this.remaining;
        this.paused = true;
    }
    /**
     * Sets the time
     *
     * @param   total Time in milliseconds
     */
    set(total){
        this.remaining = total;
        this.end = new Date().getTime() + this.remaining;
    }
    /**
     * @returns Time in milliseconds
     */
    getTime(){
        if (this.paused){
            return this.remaining;
        }
        else{
            return this.end - new Date().getTime();
        }
    }
    stop(){
        this.paused = true;
        this.remaining = this.end - new Date().getTime();
    }
    start(){
        this.paused = false;
        this.end = new Date().getTime() + this.remaining;
    }
}

interface SegmentedTimer {
    name: string,
    start: number,
    end: number
}

type Segment = {
    start: number,
    stop: number,
    title: string,
    mainColor: string,
    hudColor: string
}

class SegmentedTimer { // Timer, but with segment status as well
    constructor(name: string, start: number, end: number, segments: Array<Segment>){
        this.name = name;
        this.start = start;
        this.end = end;
    }
    startLoop(){

    }
}



console.log("hi")