//adding a constructor

function Student(name, age, cpga, Phone_number, Language) {
    this.name = name;
    this.age = age;
    this.cpga = cpga;
    this.Phone_number = Phone_number;
    this.Language = Language;
}
var student1 = new Student("Md. Ehasan Ali", 18, 4.61, 880175218520, ["Bangla,Hindi,English"]);
var student2 = new Student("Md Sanaullah", 19, 3.50, 880170000000, ["Bangla,Farsi,Hindi"]);
var student3 = new Student("Mst Sahida Khatun", 16, 3.70, 8801870157618, ["Bangla,Farsi,Chinis"]);

console.log(student1);
console.log(student1.name);
console.log(student1.age);
console.log(student1.cpga);
console.log(student1.Phone_number);
console.log(student1.Language);

console.log(student2);
console.log(student2.name);
console.log(student2.age);
console.log(student2.cpga);
console.log(student2.Phone_number);
console.log(student2.Language);

console.log(student3);
console.log(student3.name);
console.log(student3.age);
console.log(student3.cpga);
console.log(student3.Phone_number);
console.log(student3.Language);