const students = [{
    id: 101,
    name: 'Md: Ehasan Ali',
    cgpa: 2.81,
}, {
    id: 102,
    name: 'Sanaullah',
    cgpa: 3.21,
}, {
    id: 103,
    name: 'Sifat',
    cgpa: 2.91,
}, {
    id: 104,
    name: 'Rojob',
    cgpa: 3.61,
}, {
    id: 101,
    name: 'Romjan',
    cgpa: 3.08,
}];

function student() {
    return students.filter(function (x) {
        return x.cgpa > 3;
    }).map(function (y) {
        return y.name;
    });
}
// console.log(student());


const studentName2 = () => {
    return students.filter((x) => x.cgpa > 3).map((y) => y.name)
};
// console.log(studentName2());


const studentName3 = () => students.filter((x) => x.cgpa > 3).map((y) => y.name);
console.log(studentName3());