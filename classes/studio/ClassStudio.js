//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore);
    }
    average() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        return Math.round(10 * sum / this.scores.length) / 10;
}

status() {
    let avg = this.average();
    if(avg >= 90) {
        return "Accepted";
    } else if(avg >= 80) {
        return "Reserve";
    } else if(avg >= 70) {
        return "Probationary";
    } else {
        return "Rejected";
    }
}
    
    reachReserve() {
        let count = 0;
        while(this.average() < 80) {
            this.addScore(100);
            count++;
        }
        return `It takes ${count} tests for ${this.name} to reach Reserve`;
    }
    reachAccepted() {
        let count = 0;
        while(this.average() < 90) {
            this.addScore(100);
            count++
        }
        return `It takes ${count} test for ${this.name} to reach Accepted`;
    }
}


let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

bubbaBear.addScore(83);
console.log(bubbaBear.scores);

let candidates = [bubbaBear, merryMaltese, gladGator];
for (let i=0; i < candidates.length; i++) {
    console.log(`\n${candidates[i].name} earned an average test score of ${candidates[i].average()}% and has a status of ${candidates[i].status()}.`);
}
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
console.log(gladGator.reachReserve());
console.log(gladGator.reachAccepted());