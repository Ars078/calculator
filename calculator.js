var str = document.getElementById('compute'); // Storing the input field element
str.focus(); // Keeping the input field focused as the page is loaded

var allBtn = document.querySelectorAll('.in'); // Selecting all the buttons

// Passing focus to the input area as any button is clicked
for (let i=0; i<allBtn.length; i++) {
	allBtn[i].addEventListener('click', function() {
    str.value += allBtn[i].textContent;
		str.focus();
	})
}

// Cleaning up the input area when the C button is clicked
var clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function(event) {
	str.value="";
})

var btnEqual = document.getElementById('equal');

// Declaring a variable to store the input area's content in
var result = "";

// Declaring a function to calculate the input area's expression
const calculate = () => {
  if (str.value !== "") {
    result = str.value;
    str.value = "";
    str.value = eval(result);
    str.focus();
  }
}
// const clearBackspace = () => {
// 	for (let i=0; i<str.value.length -1; i--){
// 		str.value = str.value[i];
// 	}
// }
// }
// Calculate when the equal button is clicked
btnEqual.addEventListener('click', calculate);

// Calculate when the Enter key is pressed
str.addEventListener('keyup', function(e) {
	if (e.key === 'Enter') { // Checking if Enter is pressed
		calculate(); // Calculating our expression
	}
	if (e.key === 'Backspace') { // Checking if Enter is pressed
		// for (let i=str.value.length; i--){
		// 	// console.log(str.value = str.value[i]);
		// 	// str.value.splice();
		// }
	}
});

// Allowing only digits and arithmetic operators to be entered
const checkInput = key => {
  return (key >= '0' && key <= '9') || key == '+' || key == '+' || key == '-' || key == '*' || key == '/';
}