let employeeDetails = `{
    "name": "Aleix Melon",
    "id" : "E00245",
    "role": ["Dev, DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "addres": {
        "street": "32, Laham St.",
        "city": "Austria"
    },
    "referred-by": "E0012"
}`

let employeeObj = JSON.parse(employeeDetails);
console.log(employeeObj);

// let role = employeeObj.role;
// console.log(role);

// for (const key of role) {
//     if (key == "Dev") {
//         console.log(`The first name is: ${key}`);
//     }

// }

// let lastName = employeeObj.name;
// let lastName2=lastName.split(" ");
// let lastName3= lastName2[lastName2.length-1];
// console.log(lastName3);

// let joinDate=new Date(employeeObj.doj)
// console.log(joinDate);

// const year=joinDate.getFullYear();
// console.log(`joining year is:`, year);