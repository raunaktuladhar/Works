/* Exercise: Using everything you’ve learned up until this point, write a script that asks a user about the width, 
height, and length of a box, then calculate and return to the user the volume of this box.

As an example, a box with width = 20, height = 10, and length = 50 will have a volume of 10000 
(omitting units, as they are not relevant in this scenario). 
For now, assume that the values provided by the user are valid numbers, 
but if you have any ideas on how, 
you can try to make this script in such a way that it will be resistant to invalid values. */

// Solution:

let width = window.prompt("Enter the width of the box: ");
let height = window.prompt("Enter the height of the box: ");
let length = window.prompt("Enter the length of the box: ");

alert("The volume of the box will be " + width * height * length);

/* Lab interaction

Let's go back to our contact list. 
After some recent tweaks (i.e. using an array and objects) it is actually starting to look like a list. 
However, one quite serious problem remained. 
Changing data in the list, such as adding a new contact, has to be provided for right away in the program code. 
What if we want to give the user the ability to enter the data of the added contact while the program is running? 
Modify the program to add, at the end of the list, not the contact, which is given in the code, 
but the one which the user will give during the program run. Use the prompt method to do this. 
At the end, display the first and the last contact from the list.

*/

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
    
    // write your code here
    
    alert("Add Contacts");
    let newName = prompt("Enter Name:");
    let newPhone = prompt("Enter Phone No.:");
    let newEmail = prompt("Enter Email:");
    
    let newContact = {
        name: newName,
        phone: newPhone,
        email: newEmail
    };
    
    contacts.push(newContact);
    
    
    let last = contacts.length - 1;
    
    console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);