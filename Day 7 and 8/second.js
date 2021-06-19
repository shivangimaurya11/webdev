const student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(Object.getOwnPropertyNames(student));
delete student.rollno;
console.log(student);
console.log(Object.keys(student).length);
const x = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 
for(let i=0;i<x.length;i++)
{
    console.log(x[i].readingStatus);
}
const cyc={
    radii:prompt("Enter the radii of cylinder"),
    height:prompt("enter the height of cylinder"),
};
var volume=3.14*Math.pow(cyc.radii,2)*cyc.height;
volume=volume.toFixed(4);
console.log(volume);
var library= [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
function comp(x, y) {
    if (x.libraryID < y.libraryID) return 1;
    else return -1;
  }
  
  console.log(library.sort(comp));