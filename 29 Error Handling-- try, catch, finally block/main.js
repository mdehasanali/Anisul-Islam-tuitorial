// Error handling -> try , catch, finally , throw
// try ... catch handle run time errors (program which is runable), but not syntax error
// Error object
// The finally statement -> execute code, after try and catch 





// alert("Hello Every one");
// alert(x);
// alert("This is a countinues");






// try {
//     // code test
//     alert("Hello Every one");
//     alert("Bye Every one");
// } catch (error) {
//     //handle error
//     alert("This is a error problem " + error);
// }







// try {
//     // code test
//     alert("Hello Every one");
//     alert(x);
//     alert("Bye Every one");
// } catch (error) {
//     //handle error
//     alert("This is a error problem ");
// }





/*
// error name message 
try {
    // code test
    alert("Hello Every one");
    alert(x);
    alert("Bye Every one");
} catch (error) {
    //handle error
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
*/





try {
    // code test
    alert("Hello Every one");
    alert(x);

} catch (error) {
    //handle error
    console.log(error);
} finally {
    alert("Bye Every one");
}