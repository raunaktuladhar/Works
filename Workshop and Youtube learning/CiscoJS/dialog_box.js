/* Dialog boxes are integral parts of web browsers, and available in almost all of them, even really old ones. 
All of them are popup windows (or modal windows) which means that when the dialog box is displayed, 
it isn’t possible to interact with the webpage itself until this dialog box is closed.

This inconvenience when the popup is visible is one of the reasons why we shouldn’t overuse them. 
They’re perfectly fine for the learning process, 
and in some rare cases where important information needs to be displayed, 
or some input from the user is mandatory, but they should be avoided in other circumstances. 
We have three dialog boxes available to use. */

// alert dialog box

/* The alert dialog box is the simplest one of the three, and to show an alert box, 
we need to call a method named alert(). The alert method accepts one optional parameter – 
the text that will be displayed. The alert method is a method of the object window, but for convenience, 
it can be used without the need to type window.alert, so both forms are correct and can be seen in real applications.*/

alert("Hello World!");
window.alert("Hello World again");
alert(4 * 7);
alert(true);
alert("text 1", "text 2"); // text 1 is only displayed

/* Just like console.log, we can insert any value to the alert method and it will be converted to a string. 
The difference is that we can put an arbitrary number of parameters to console.log, 
whereas with the alert we must put only one (or zero, as it’s an optional parameter).

The alert window will be visible until the user clicks the OK button visible on the popup. 
Code execution will be halted until the dialog box is closed. */

// Confirm dialog box

/* The second dialog box is called the confirm dialog box. 
Like alert, it’s a method that accepts one optional parameter – a message that will be displayed. 
The difference between alert and confirm is that the confirm dialog box displays two buttons, 
the OK button and the Cancel button. 
Depending on the button pressed by the user, the confirm method returns a Boolean value. 
True is returned when the user closes the dialog box using the OK button, 
and false is returned when the user presses the Cancel button. */

// let decision = window.confirm("Is it OK?");
// console.log(decision);

// let remove = confirm("Remove all data?");
// let message = remove ? "Deleting Data" : "Cancelled"
 
// console.log(message);

// Prompt dialog box

/* The last of the dialog boxes is the prompt dialog box. 
It’s a further development of the confirm popup. 
Like the confirm dialog box, it contains the OK and Cancel buttons, 
but it also contains a single-line text field that allows the user to input text.

As with other dialog boxes, the prompt accepts an optional parameter as a message that will be displayed. 
The prompt also accepts a second optional parameter, 
which is the default value of the text field visible in the dialog window. 
The same as confirm, the prompt method will return a result that is dependent on user input.

If the user closes the window with the OK button, 
anything in the text field will be returned from the prompt method as a string. 
If the dialog box is closed with the Cancel button, 
the method will return a null value. 
Due to the fact that on pressing the OK button, the value returned will be of the String type */

let name = window.prompt("What is your name?", "John Doe");  // -> ("What is your name?", "John Doe") = John Doe will be displayed in input
name = name ? name : "anonymous";
 
let age = prompt("Hello " + name + " how old are you?");
alert(name + " is " + age + " years old");


