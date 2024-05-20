// All my Typescript codes are crafted using VS code editor & run in Node.js environment.
// Storing a person’s name in a variable, and printing a message to that person.
var personName = "Daniel";
console.log("Hi ".concat(personName, ", Where have you been?"));
// // prints the name in uppercase
personName.toUpperCase();
console.log(personName.toUpperCase());
// // prints the name in lowercase
personName.toLowerCase();
console.log(personName.toLowerCase());
// redeclaring person name with last name
personName = "daniel Johnson";
console.log(personName);
// prints the person name with only first letter capitalized
personName = personName.charAt(0).toUpperCase() + "aniel";
console.log(personName);
// A famous life quote with quotation marks.
// “Life is what happens when you’re busy making other plans.” — John Lennon
// Embrace the present moment and not get too caught up in planning for the future.
// Sometimes, the most meaningful experiences occur unexpectedly.
console.log("John Lennon said: \"Life is what happens when you\u2019re busy making other plans\"");
// storing the name & the quote in two different variables.
// Added a space in log by myself. (Aqsa)
var quote = "\"Life happens when you're busy making other plans\"";
var saidBy = " - John lennon";
console.log(quote + " " + saidBy);
// printing a string with "\t" (tab) and "\n" (newline).
// \t tabs the cursor (simply adds some witespace in between).
//  \n works on the strings like the <br> tag of html.
var example = "John Lennon said:\n\"Life is what happens when you\u2019re busy making other plans\"";
console.log(example);
var Example = "\tJohn Lennon said: \"Life is what happens when you\u2019re\nbusy making other plans\"";
console.log(Example);
// using math operators for the same result "10"
// * = multiply 
// / = divide 
// + = add
// - = subtract
var sum1 = 2 * 5;
console.log(sum1);
var sum2 = 20 / 2;
console.log(sum2);
var sum3 = 8 + 2;
console.log(sum3);
var sum4 = 14 - 4;
console.log(sum4);
// Know my favourite number.
var favNum = 7;
console.log("".concat(favNum, " is my favourite number. Might be yours too XD "));
// i've already written too many comments in this file, & This might not be the last one.
// Array of my favourite names.
//Indexing               //0       //1       //2         //3       //4        //5        //6       //7       //8       //9      //10
var FavNames = ["Zara", "Ayan", "Ibrahim", "Amina", "Rayyan", "Safiya", "Zain", "Layla", "Yusuf", "Ayesha", "Salaar"];
console.log(FavNames[0]);
console.log(FavNames[9]);
console.log(FavNames[6]);
console.log(FavNames[8]);
console.log(FavNames[3]);
console.log(FavNames[2]);
console.log(FavNames[4]);
console.log(FavNames[7]);
console.log(FavNames[5]);
console.log(FavNames[1]);
console.log("& at last here comes ".concat(FavNames[10], ", which is truely my most favouirite name"));
// I feel so dumb for not using a loop here.
var messageBiff = "Hey ";
var messageaff = ", i'm glad i met you";
console.log(messageBiff + FavNames[0] + messageaff);
console.log(messageBiff + FavNames[1] + messageaff);
console.log(messageBiff + FavNames[2] + messageaff);
console.log(messageBiff + FavNames[3] + messageaff);
console.log(messageBiff + FavNames[4] + messageaff);
console.log(messageBiff + FavNames[5] + messageaff);
console.log(messageBiff + FavNames[6] + messageaff);
console.log(messageBiff + FavNames[7] + messageaff);
console.log(messageBiff + FavNames[8] + messageaff);
console.log(messageBiff + FavNames[9] + messageaff);
console.log(messageBiff + FavNames[10] + messageaff);
// My favourite transport options, (with the most unexpected and uncommon one)
var FavTrnsprt = ["a Honda 200", "an Audi A8", "an Electric car from Tesla", "a personal pet Horse"];
FavTrnsprt.forEach(function (FavTrnsprt) {
    console.log("I would like to own  ".concat(FavTrnsprt, "."));
});
// last one was weired X|
// Dinner invitition program:
// using the above favtrnsprt method.
var toBeInvited = ["Hira", "Sumaiyya", "Rida", "Marjan"];
toBeInvited.forEach(function (toBeInvited) {
    console.log("Hi ".concat(toBeInvited, ". Are you free for dinner tomorrow?"));
});
var cantJoin = "Hira";
console.log("".concat(cantJoin, " has other plans tomorrow, She can't join the rest of us."));
// adding someone else in place of Hira.
var nowCall = "Daania";
toBeInvited[toBeInvited.indexOf(cantJoin)] = nowCall;
// inviting everyone again
toBeInvited.forEach(function (toBeInvited) {
    console.log("Dear ".concat(toBeInvited, ", Are you free tomorrow? I want to host a dinner party."));
});
// Printing the places I'd love to visit.
var favPlaces = ["Northern Areas of Pakistan", "Hingol National Park", "capadoccia", "Eastern village Islands", "Adalar", "&", "Sultan Ahmed(t) Mosque"];
// pretty too much for a wishlist of "places I want to visit".
console.log("I'd love to visit ".concat(favPlaces, " atleast Once in my life..!"));
// letting all the invited guests know that hira cant join i've invited Daania instead.
toBeInvited.forEach(function (toBeInvited) {
    console.log("Hi ".concat(toBeInvited, ", ").concat(cantJoin, " is busy this weekend, She can't make it to dinner tomorrow. I've invited ").concat(nowCall, " instead."));
});
// modifying toBeInvited, replacing hira with Daania
// though i've done it already, but stil i used .shift & .unshift to replace the index-0 if toBeInvited
// here is the code:
// toBeInvited.shift();
// toBeInvited.unshift("Daania");
console.log(toBeInvited); // check it here;
toBeInvited.forEach(function (toBeInvited) {
    console.log("listen ".concat(toBeInvited, " you have to join us for dinner this weekend."));
});
// Thinking about hosting more guests?!
toBeInvited.unshift("Erum", "Saaniya", "Mehlab");
toBeInvited.forEach(function (toBeInvited) {
    console.log("".concat(toBeInvited, " you are invited for a dinner tomorrow at my place."));
});
// adding some more guests in the middle of an array, and inviting everyone again.
// ps. I added 2 guests instead of one to check how it works.
toBeInvited.splice(5, 0, "Zohra", "Fatima");
// the loop below sends (actually prints) the invitition for each person to be invited.
toBeInvited.forEach(function (toBeInvited) {
    console.log("".concat(toBeInvited, " you're invited for a dinner this weekend, at my place."));
});
