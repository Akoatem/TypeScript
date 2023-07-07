// Write your code in the main.ts file:

// Write an interface named Student that accepts the following elements: firstName(string), 
//lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsListstudentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location

// we  declare the type first
interface Student {
    firstName: string;
    lastName: string;
    age: any[number | string];
    location: string;

}

// creating the objects

const student1: Student = {
    firstName: 'coline',
    lastName: 'Ben',
    age: 34,
    location: 'usa'
}

const student2: Student = {
    firstName: 'Peter',
    lastName: 'Kool',
    age: 44,
    location: 'Nigeria'
}
// Create an array of students
const studentsList: Student[] = [student1, student2]

// Render the table and append rows for each student

const table = document.createElement('table')

studentsList.forEach(student =>{
    const row = document.createElement('tr')
    const firstNameCell = document.createElement('td')
    //const lastNameCell = document.createElement('td')
    //const ageCell = document.createElement('td')
    const locationCell = document.createElement('td')

    firstNameCell.textContent = student.firstName
   // lastNameCell.textContent = student.lastName
   // ageCell.textContent = student.age
    locationCell.textContent = student.location

    row.appendChild(firstNameCell)
    //row.appendChild(lastNameCell)
    //row.appendChild(ageCell)
    row.appendChild(locationCell)
    table.appendChild(row)
})

// Append the table to the body of the HTML document

document.body.appendChild(table)