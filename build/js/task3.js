"use strict";
// Write a function printTeacher:
// It accepts two arguments firstName and lastName
// It returns the first letter of the firstName and the full lastName
// Example: printTeacher("John", "Doe") -> J. Doe
// Write an interface for the function named printTeacherFunction.
function printTeacher(firstName, lastName) {
    return `${firstName[0]}. ${lastName}`;
}
function printTeacherFunction() {
    const firstName = prompt("Enter the first name:") || "";
    const lastName = prompt("Enter the last name:") || "";
    const teacher = printTeacher(firstName, lastName);
    console.log("Teacher:", teacher);
}
