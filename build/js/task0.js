"use strict";
// Write your code in the main.ts file:
// creating the objects
const student1 = {
    firstName: 'coline',
    lastName: 'Ben',
    age: 34,
    location: 'usa'
};
const student2 = {
    firstName: 'Peter',
    lastName: 'Kool',
    age: 44,
    location: 'Nigeria'
};
// Create an array of students
const studentsList = [student1, student2];
// Render the table and append rows for each student
const table = document.createElement('table');
studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    //const lastNameCell = document.createElement('td')
    //const ageCell = document.createElement('td')
    const locationCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    // lastNameCell.textContent = student.lastName
    // ageCell.textContent = student.age
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    //row.appendChild(lastNameCell)
    //row.appendChild(ageCell)
    row.appendChild(locationCell);
    table.appendChild(row);
});
// Append the table to the body of the HTML document
document.body.appendChild(table);
