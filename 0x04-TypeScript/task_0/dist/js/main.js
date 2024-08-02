var student1 = {
    firstName: "Clency",
    lastName: "Christine",
    age: 17,
    location: "Nairobi"
};
var student2 = {
    firstName: "JOhn",
    lastName: "Doe",
    age: 22,
    location: "New York"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tableBody = document.createElement('tbody');
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});
table.appendChild(tableBody);
document.body.appendChild(table);
//# sourceMappingURL=main.js.map