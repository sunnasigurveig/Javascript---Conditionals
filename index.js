// Array of people
const arrayOfPeople = [
    {
        name:"Aleta Emmanuel",
        dateOfBirth: 9/15/1971,
        children: 1,
        country: "Indonesia",
        knowsHowToProgram: false,
    },
    {
        name:"Rollie Glendenning",
        dateOfBirth: 6/4/1990,
        children: 5,
        country: "Ukraine",
        knowsHowToProgram: false,  
    },
    {
        name:"Carina MacMenaime",
        dateOfBirth: 9/7/1984,
        children: 3,
        country: "Cuba",
        knowsHowToProgram: true,
    },
    {
        name:"Verney Thireau",
        dateOfBirth: 1/21/1993,
        children: 5,
        country: "United States",
        knowsHowToProgram: true,
    },
    {
        name:"Tobe Martinuzzi",
        dateOfBirth: 7/21/1975,
        children: 2,
        country: "Norway",
        knowsHowToProgram: false,
    }
]

// To calculate their ages

function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(calculate_age(new Date(1975, 07, 21))) //<---- change these dates to calculate each person

/*Aleta Emmanuel is 49 years old
Tobe Martinuzzi is 46 years old*/



/* QUESTIONS */



// 1. Is the first person older than the last person

const ageOfAleta = arrayOfPeople[0].dateOfBirth;
const ageOfTobe = arrayOfPeople[4].dateOfBirth;

console.log("Is Aleta older than Tobe? ", (ageOfAleta > ageOfTobe))

// 2. Does the 2nd person have the same amount of kids as the 3rd?

const sameAmountOfChildrenRollie = arrayOfPeople[1].children;
const sameAmountofChildrenCarina = arrayOfPeople[2].children;

console.log("Does Rollie and Carina have the same amount of children?" , (sameAmountOfChildrenRollie == sameAmountofChildrenCarina))

/* 3. Create a statement that checks if the 1st person and the 4th person in the array
both know how to program. If yes, output “Yay!”, if not output “LMGTFY” */

const AletaknowsHowToProgram = arrayOfPeople[0].knowsHowToProgram;
const VerneyknowsHowToProgram = arrayOfPeople[3].knowsHowToProgram;

if (AletaknowsHowToProgram == VerneyknowsHowToProgram){
    console.log("Yay!")
} else if (AletaknowsHowToProgram < VerneyknowsHowToProgram){
    console.log("LMGTFY")
}

/* 4. Create a statement that checks the 2nd person in the array for their nationality.
If the person’s country is Iceland, output “Hæ”, if he/she is from Spain output “Hola”,
if he/she is from Korea output “여보세요”). If the country is none of the above, output “Hello”.
Tip: a switch statement might be a good fit for this task. */

const rollieIsFrom = arrayOfPeople[1].country;

switch(rollieIsFrom) {
    case "Iceland":
        console.log("hæ")
        break;
    case "Spain":
        console.log("Hola")
        break;
    case "Korea":
        console.log("여보세요")
        break;
    default:
        console.log("Hello")

}

/* 5. Use a ternary operator to output if the 2nd person’s name is longer than 5 characters. */

const nameLengthRollie = arrayOfPeople[1].name.length;

const result = (nameLengthRollie > 5) 

console.log(result);