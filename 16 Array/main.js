/*
var name1, name2, name3, name4, name5;
name1 = "Ehasan";
name2 = "Samsul";
name3 = "Roham";
name4 = "Korim";
name5 = "Sanaullah";

console.log(name1);
console.log(name4);
*/




/*
// array added akvabe
const nameArray = new Array();
nameArray[0] = "Ehasan";
nameArray[1] = "Samsul";
nameArray[2] = "Hasan";
nameArray[3] = "Roham";
nameArray[4] = "Korim";
console.log(nameArray);
console.log(nameArray.length);
console.log(nameArray[2]);
*/




/*
// array added arekvabe
var country = ["Bangladesh", "India", "Chaina", "Japan", "Pakistan"];
console.log(country);
console.log(country.length);
console.log(country[0]);
*/





// Array + Array concat kora
var country1 = ["Bangladesh", "India", "Pakistan"];
var country2 = ["Caina", "Nepal", "Japan"];

// console.log(country1);

var country = country1.concat(country2);

console.log(country);
console.log(country.length);

country.push("us", "uk"); // array ba variable add korbe
country.push("Afganistan");

console.log(country);
console.log(country.length);


country.pop(); // last array ba variable delete korbe
console.log(country);
console.log(country.length);

country.pop();
country.pop();
country.pop();
console.log(country);
console.log(country.length);