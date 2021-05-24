// // destursture function paramiters

// const studentInformation = (student) => {
//     console.log(`${student.id} : ${student.fullName}`);
// }

// const student = {
//     id: 101,
//     fullName: 'Md. Ehasan Ali',
//     age: 18,
//     cgpa: 2.81
// }
// studentInformation(student)





// destursture function paramiters

const studentInformation2 = ({
    id,
    fullName,
    cgpa
}) => {
    console.log(`${id} : ${fullName} : ${cgpa}`);
}

const student2 = {
    id: 101,
    fullName: 'Md. Ehasan Ali',
    age: 18,
    cgpa: 2.81
}
studentInformation2(student2)