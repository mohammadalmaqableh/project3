// for (let i=0;i<10;i++) {

// if (i%2==0) {
//     console.log(i)

// }
// else if(i==5){
// continue;

// }
// else(
//     console.log("sorry"+i)
// )

//example-----one
// }
// function OddNumber(firstn1,secondn2) {

// for(let i=firstn1;i<secondn2;i++){
// if(i%2==1){
//     console.log("this is a odd namber"+i)
// }

// }

// }
// OddNumber(2,8)

let myStudents = ["ahmad", "ali", "anas", "omar"];
let myStudentsMark = [60, 44, 35, 78];
function markCalculate(params) {
  for (let i = 0; i < myStudentsMark.length; i++) {
    if(myStudentsMark[i]<50){
      console.log("sorry"+"  "+myStudents[i]+"you scored"+"  "+myStudentsMark[i]+"and you have faild")
    }else if(myStudentsMark[i]>=50){
      console.log("congr"+"  "+myStudents[i]+"you scored"+"  "+myStudentsMark[i]+"and you have pass")

    }
  }

  
}
markCalculate();
