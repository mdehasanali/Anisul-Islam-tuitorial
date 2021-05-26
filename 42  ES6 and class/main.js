class Students {
    constructor(id, name, gpa) {
        this.id = id;
        this.name = name;
        this.gpa = gpa
    }

    set studentName(name) {
        this.name = name
    }

    get studentInfo() {
        return `${this.id} ${this.name} ${this.gpa}`
    }
}

// new array create
var ehasan = new Students(101, 'Md. Ehasan Ali', 2.81);
console.log(ehasan);
console.log(ehasan.id);
console.log(ehasan.name);
console.log(ehasan.gpa);

// set attribite result name chenge
ehasan.studentName = "Sanaullah"
console.log(ehasan.name);

// get attribite result
var ehasan = new Students(101, 'Md. Ehasan Ali', 2.81);
console.log(ehasan.studentInfo);