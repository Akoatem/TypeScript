// Write a function printTeacher:

// It accepts two arguments firstName and lastName
// It returns the first letter of the firstName and the full lastName
// Example: printTeacher("John", "Doe") -> J. Doe
// Write an interface for the function named printTeacherFunction.

function printTeacher(firstName: string, lastName: string): string{
    return `${firstName[0]}. ${lastName}`
}

function printTeacherFunction(): void {
    const firstName: string = prompt("Enter the first name:") || "";
    const lastName: string = prompt("Enter the last name:") || "";
    const teacher: string = printTeacher(firstName, lastName);
    console.log("Teacher:", teacher);
  }

