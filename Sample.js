var StudentMark = [

    {name: "Student 1", mark: {tamil: 60 , English: 95}},
    {name: "Student 2", mark: {tamil: 50 , English: 100}}
    
    ]
 

// for Loop
let totalAllMarks = 0
for (let i = 0; i < StudentMark.length; i++) {
    var totalMarks = StudentMark[i].mark.English + StudentMark[i].mark.tamil
    console.log(StudentMark[i].name +":"+totalMarks);
    totalAllMarks += totalMarks;
}
console.log("Total marks of Student 1 & Student 2 : "+totalAllMarks);

// for each
// let totalAllMarks1 = [];
// let s1 = StudentMark.forEach( mark => {
//    var stu = StudentMark.mark;
//      totalAllMarks1.push.mark
//     return  
// });
// console.log(s1);
// console.log(totalAllMarks1);


// //for in
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// //for of
// for (const iterator of object) {
    
// }