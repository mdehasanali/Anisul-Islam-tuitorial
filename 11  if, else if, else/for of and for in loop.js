// for of and for in loop

// array for of loop
const names = ["Ehasan", "Korim", "Nur Islam", "Sanaullah"];
for (const name of names) {
    console.log(name);
}


// object for in loop

let bioData = {
    ID: 101,
    name: "Md. Ehasan Ali",
    age: 18,
    Roll: 416875,
    Registation: 1502045702,
    Institute: "Chapai Nawabganj Polytichnic Institute"
}

// key gula show korbe  
for (const x in bioData) {
    console.log(x);
}

// deteils gula show korbe  
for (const x in bioData) {
    console.log(bioData[x]);
}

// key & deteils sob gula show korbe  
for (const x in bioData) {
    let result = x + " : " + bioData[x];
    console.log(result);
}

// key & deteils sob gula show korbe  
for (const x in bioData) {
    console.log(`${x} : ${bioData[x]}`);
}