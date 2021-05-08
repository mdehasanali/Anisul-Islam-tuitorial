// Error handling - try, catch, finally
// The throw statement -> create custom errors.



// document.querySelector(".btn").addEventListener("click", function() {
//     var text = document.querySelector(".textField").value;
//     console.log(text);
// });




document.querySelector(".btn").addEventListener("click", function() {
    var text = document.querySelector(".textField").value;

    try {
        if (text < 5) {
            throw " input is too low"
        } else if (text > 10) {
            throw "input is too high"
        } else(
            console.log(text)
        )
    } catch (error) {
        console.log(error);
    }

});