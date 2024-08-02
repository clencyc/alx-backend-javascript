interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: "Clency",
    lastName: "Christine",
    age: 17,
    location: "Nairobi"
}

const student2: Student = {
    firstName: "JOhn",
    lastName: "Doe",
    age: 22,
    location: "New York"
}

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');
const tableBody = document.createElement('tbody'); 

studentsList.forEach(student   => {
     const row = document.createElement('tr');
     const firstNameCell = document.createElement('td');
     const locationCell = document.createElement('td');
   
     firstNameCell.textContent = student.firstName;
     locationCell.textContent = student.location;
   
     row.appendChild(firstNameCell);
     row.appendChild(locationCell);
     tableBody.appendChild(row);   
   
   });

   table.appendChild(tableBody);
document.body.appendChild(table); 