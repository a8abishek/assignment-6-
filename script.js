let Tamil = Number(prompt("Enter the Tamil Mark"));
let English = Number(prompt("Enter the English Mark"));
let Maths = Number(prompt("Enter the Maths Mark"));
let Science = Number(prompt("Enter the Science Mark"));
let Social = Number(prompt("Enter the Social Mark"));

console.log("Enter the Tamil Mark:"+Tamil)
console.log("Enter the English Mark:"+ English)
console.log("Enter the Maths Mark:"+ Maths)
console.log("Enter the Science Mark:"+ Science)
console.log("Enter the Social Mark:" +Social)

let totalMark = Tamil+English+Maths+Science+Social;
console.log("Total Marks :"+totalMark)

let Average = totalMark / 5
console.log("Average Mark :"+Average)

if(Tamil<35 || English<35 || Maths<35|| Science<35 || Social<35){
    console.log("You failed in subject.Try to improve Mark");
    alert("You failed in one or more subject.Try to improve Mark");
} else{
    console.log("Great job! you've Passed successfully.")
}

switch(true){                           // true is use for this check the all inside case 
    case(Average<35):
        console.log("Grade E ");        // Average is less than 35 
        break;
    case(Average>35 && Average<40):     // Average is 35 to 39 
        console.log("Grade D");
        break;
    case(Average>=40 && Average<50):    // Average is 40 to 49 
        console.log("Grade C");
        break;
    case(Average>=50 && Average<60):    // Average is 50 to 59 
    console.log("Graqde C+");
        break;
    case(Average>60 && Average<70):     // Average is 60 to 69 
        console.log("Grade B");
        break;
    case(Average>70 && Average<80):     // Average is 70 to 79 
        console.log("Grade B+");
        break;
    case(Average>80 && Average<90):     // Average is 80 to 89 
        console.log("Grade A");
        break;
    case(Average>90 && Average<=100):   // Average is 90 to 100
        console.log("Grade A+");
        break;
    default:
        console.log("Invalid Average .please Check the Mark")  // Average is more than 100 
}