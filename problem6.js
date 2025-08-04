/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var currentSalary = startingSalary;
for(var j=1; j<=experience; j++){
    currentSalary=currentSalary*1.05;
}

console.log(currentSalary.toFixed(2));