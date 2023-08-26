// let studentRecords = [ 
//     {name: 'John', id: 123, marks:98},
//     {name: 'Baba', id: 101, marks:23 },
//     {name: 'yaga', id: 200, marks:45 },
//     {name: 'Wick', id: 115, marks:75 } ]

//Q1
// let name = studentRecords.map((student)=>{
//     return ((student.name).toUpperCase());
// });
// console.log(name);

//Q2
// let studentMarks = studentRecords.filter((details)=>{
//     return ((details.marks>50) ? details : '');
// });
// console.log(studentMarks);

//Q3
// let studentIds = studentRecords.filter((details)=>{
//     return ((details.marks>50 && details.id>120) ? details : '');
// });
// console.log(studentIds);

//Q4
// let sum = 0;
// let studentTotalMarks = studentRecords.filter((details)=>{
//     return ((details.marks>50 && details.id>120) ? sum += details.marks : '');
// });
// console.log('Sum of marks = ',sum);

//Q5
// let studentMarks = studentRecords.filter((details)=>{
//     return ((details.marks>50) ? details.name : '');
// });
// console.log(studentMarks);

//Q6
// let sum = 0;
// let printMarks = studentRecords.filter((details)=>{
//     return ((details.id>120) ? sum+=details.marks : '');
// });
// console.log('Sum of marks = ',sum);

//Q6
// let sum = 0;
// let studentMarks = studentRecords.map((details)=>{
//    let ans =  (details.marks < 50) ? details.marks+15 : details.marks;
//     return (sum+=ans);
// });
// console.log('Total marks of students = ',sum, studentRecords);

//Q7
// let studentMarks = studentRecords.map((details)=>{
//     if(details.marks < 50){
//       return details.marks += 15;
//     }else{
//       return details.marks
//     }
//   }).filter((mark)=>mark>50).reduce((sum,mark)=> sum+=mark);
//   console.log('Total marks of students = ',studentMarks);

//Q8
// function object(studentName,studentClass,StudentRollNo){
//     this.name = studentName;
//     this.class = studentClass;
//     this.rollNo = StudentRollNo;
// }
// let studentArray = [];
// let stud1 = new object('Rishi','Btech','01');
// let stud2 = new object('Saptarsi','Mtech','02');
// let stud3 = new object('Gurmeet','BCom','03');
// let stud4 = new object('Daniel','MCom','04');
// let stud5 = new object('Mahi','BCA','05');
// let stud6 = new object('Lexi','MCA','06');
// studentArray.push(stud1,stud2,stud3,stud4,stud5,stud6);
// console.log(studentArray);