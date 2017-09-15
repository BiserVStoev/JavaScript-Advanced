class Task{
    constructor(title, deadline){
        this.title = title;
        this.deadline = deadline;
        this.status = 'Open';
    }

    get deadline(){
        return this._deadline;
    }

    set deadline(value){
        let now = new Date();
        now.setHours(0,0,0,0);
        if(value < now){
            throw new Error('deadline cannot be in the past');
        }

        this._deadline = value;
    }
    get isOverdue(){
        if(this.status === 'Complete'){
            return false;
        }

        let now = Date.now();
        if(this.deadline < now){
            return true;
        }

        return false;
    }

    static comparator(a,b){
        let criteria = new Map();
        criteria.set('Complete', 10);
        criteria.set('Open', 20);
        criteria.set('In Progress', 30);


        if ((a.status === b.status) || (a.isOverdue && b.isOverdue)){
            if (a.deadline < b.deadline){
                return -1;
            } else if (a.deadline > b.deadline){
                return 1;
            } else{
                return 0;
            }
        } else {
            if(a.isOverdue > b.isOverdue){
                return -1;
            } else if (a.isOverdue < b.isOverdue){
                return 1;
            } else{
                if(criteria.get(a.status) > criteria.get(b.status)){
                    return -1;
                } else if(criteria.get(a.status) < criteria.get(b.status)){
                    return 1;
                } else {
                    return 0;
                }
            }
        }

    }

    toString(){
        let statusIcon = '';
        if (this.status === 'Complete'){
            statusIcon = "\u2714";
        } else if(this.isOverdue){
            statusIcon = "\u26A0";
        } else if(this.status === 'Open'){
            statusIcon = "\u2731";
        } else if(this.status === 'In Progress'){
            statusIcon = "\u219D";
        }


        let hasDeadline = true;
        let isOverdue = false;
        let deadline = this.deadline;
        if (this.status === 'Complete'){
            hasDeadline = false;
        } else if(this.isOverdue){
            deadline = 'overdue';
            isOverdue = true;
        }

        let result = `[${statusIcon}] ` + this.title;

        if (hasDeadline){
            if(isOverdue){
                result += ` (${deadline})`;
            } else{
                result += ` (deadline: ${deadline})`;
            }
        }

        return result;
    }
}

let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];

console.log();
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));}, 1000); // Sort and print one second later
