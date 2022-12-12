var StudentMark = [
    {name: "Student 1", mark: {tamil: 60 , English: 95}},
    {name: "Student 2", mark: {tamil: 50 , English: 100}}
    ]

let totalAllMarks = 0
for (let i = 0; i < StudentMark.length; i++) {
    var totalMarks = StudentMark[i].mark.English + StudentMark[i].mark.tamil
    console.log(StudentMark[i].name +":"+totalMarks);
    totalAllMarks += totalMarks;
}
console.log("Total marks of Student 1 & Student 2 : "+totalAllMarks)



let name1 = "";
let Mark = "";
for (let i in StudentMark) {
        name1 = StudentMark[i].name;
        Mark = StudentMark[i].mark;

    console.log(name1 );
    console.log( Mark );
}
