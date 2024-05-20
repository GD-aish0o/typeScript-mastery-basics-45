// All my Typescript codes are crafted using VS code editor & run in Node.js environment.

// Storing a person’s name in a variable, and printing a message to that person.

let personName : string = "Daniel";

console.log(`Hi ${personName}, Where have you been?`);

// // prints the name in uppercase
personName.toUpperCase();
console.log(personName.toUpperCase());

// // prints the name in lowercase
personName.toLowerCase();
console.log(personName.toLowerCase());

// redeclaring person name with last name
personName= "daniel Johnson";
console.log(personName);

// prints the person name with only first letter capitalized
personName = personName.charAt(0).toUpperCase()+"aniel"
console.log(personName);

// A famous life quote with quotation marks.
// “Life is what happens when you’re busy making other plans.” — John Lennon

// Embrace the present moment and not get too caught up in planning for the future.
// Sometimes, the most meaningful experiences occur unexpectedly.

console.log(`John Lennon said: "Life is what happens when you’re busy making other plans"`);

// storing the name & the quote in two different variables.
// Added a space in log by myself. (Aqsa)

let quote:string= `"Life happens when you're busy making other plans"`;
let saidBy:string=" - John lennon"

console.log(quote + " " + saidBy);

// printing a string with "\t" (tab) and "\n" (newline).
// \t tabs the cursor (simply adds some witespace in between).
//  \n works on the strings like the <br> tag of html.

let example:string=`John Lennon said:\n"Life is what happens when you’re busy making other plans"`;
console.log(example);

let Example:string=`\tJohn Lennon said: "Life is what happens when you’re\nbusy making other plans"`
console.log(Example);

// using math operators for the same result "10"
// * = multiply 
// / = divide 
// + = add
// - = subtract

let sum1 :number= 2*5;
console.log(sum1);

let sum2:number= 20/2;
console.log(sum2);

let sum3:number= 8+2;
console.log(sum3);

let sum4:number= 14-4;
console.log(sum4);

// Know my favourite number.

let favNum : number = 7;
console.log(`${favNum} is my favourite number. Might be yours too XD `);

// i've already written too many comments in this file, & This might not be the last one.

// Array of my favourite names.
//Indexing               //0       //1       //2         //3       //4        //5        //6       //7       //8       //9      //10
let FavNames: string[] = ["Zara" , "Ayan" , "Ibrahim" , "Amina" , "Rayyan" , "Safiya" , "Zain" , "Layla", "Yusuf" , "Ayesha" , "Salaar"];

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
console.log(`& at last here comes ${FavNames[10]}, which is truely my most favouirite name`);

// I feel so dumb for not using a loop here.

let messageBiff:string="Hey "
let messageaff:string=", i'm glad i met you"

console.log(messageBiff+FavNames[0]+messageaff);
console.log(messageBiff+FavNames[1]+messageaff);
console.log(messageBiff+FavNames[2]+messageaff);
console.log(messageBiff+FavNames[3]+messageaff);
console.log(messageBiff+FavNames[4]+messageaff);
console.log(messageBiff+FavNames[5]+messageaff);
console.log(messageBiff+FavNames[6]+messageaff);
console.log(messageBiff+FavNames[7]+messageaff);
console.log(messageBiff+FavNames[8]+messageaff);
console.log(messageBiff+FavNames[9]+messageaff);
console.log(messageBiff+FavNames[10]+messageaff);

// My favourite transport options, (with the most unexpected and uncommon one)

let FavTrnsprt: string[] = ["a Honda 200" , "an Audi A8"  , "an Electric car from Tesla" ,"a personal pet Horse"];

FavTrnsprt.forEach(FavTrnsprt => {
    console.log(`I would like to own  ${FavTrnsprt}.`);
});

// last one was weired X|

// Dinner invitition program:
// using the above favtrnsprt method.

let toBeInvited: string[] = ["Hira" , "Sumaiyya"  , "Rida" ,"Marjan"];

toBeInvited.forEach(toBeInvited => {
    console.log(`Hi ${toBeInvited}. Are you free for dinner tomorrow?`);
});

let cantJoin:string="Hira";
console.log(`${cantJoin} has other plans tomorrow, She can't join the rest of us.`);

// adding someone else in place of Hira.

let nowCall:string="Daania"

toBeInvited[toBeInvited.indexOf(cantJoin)] = nowCall;

// inviting everyone again
toBeInvited.forEach(toBeInvited =>{
    console.log(`Dear ${toBeInvited}, Are you free tomorrow? I want to host a dinner party.`)
    }
);

// Printing the places I'd love to visit.

let favPlaces:string[] = ["Northern Areas of Pakistan" , "Hingol National Park" , "capadoccia" , "Eastern village Islands", "Adalar", "&" , "Sultan Ahmed(t) Mosque"];
// pretty too much for a wishlist of "places I want to visit".

console.log(`I'd love to visit ${favPlaces} atleast Once in my life..!`);


// letting all the invited guests know that hira cant join i've invited Daania instead.

toBeInvited.forEach(toBeInvited =>{
    console.log(`Hi ${toBeInvited}, ${cantJoin} is busy this weekend, She can't make it to dinner tomorrow. I've invited ${nowCall} instead.`)
    }
);

// modifying toBeInvited, replacing hira with Daania
// though i've done it already, but stil i used .shift & .unshift to replace the index-0 if toBeInvited

// here is the code:

// toBeInvited.shift();
// toBeInvited.unshift("Daania");
console.log(toBeInvited); // check it here;

toBeInvited.forEach(toBeInvited=> {
    console.log(`listen ${toBeInvited} you have to join us for dinner this weekend.`);
    })

// Thinking about hosting more guests?!

toBeInvited.unshift("Erum" , "Saaniya" , "Mehlab");
toBeInvited.forEach(toBeInvited=>{
    console.log(`${toBeInvited} you are invited for a dinner tomorrow at my place.`);
    
})

// adding some more guests in the middle of an array, and inviting everyone again.
// ps. I added 2 guests instead of one to check how it works.
toBeInvited.splice(5, 0, "Zohra" , "Fatima" );

// the loop below sends (actually prints) the invitition for each person to be invited.

toBeInvited.forEach(toBeInvited=>{
    console.log(`${toBeInvited} you're invited for a dinner this weekend, at my place.`);
})

