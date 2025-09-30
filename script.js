let score = prompt("Enter the Score");

if (score<35){     
    console.log("fail") //0-34              
}else if(score>=35 && score<50 ){
    console.log(" pass Grade D") //35 -49
}else if(score>=50 && score<60){
    console.log("Grade C")  //50 -59
}else if(score>=60 && score<70){
    console.log("Grade B") //60 -69
}else if (score>=70 && score<80){
    console.log("Grade B+") //70 -79
}else if(score>=80 && score<90){
    console.log("Grade A") //80 -89
}else if(score>=90 && score<=100){
    console.log("Grade A+") //90 -100
}else{
    console.log("Enter the Score between 0 to 100") // score is Greater than 100  
}