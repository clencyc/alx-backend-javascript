export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  let employeesArray = [];
  for (const department in allEmployees) {
    employeesArray = employeesArray.concat(allEmployees[department]);
}

  return employeesArray[Symbol.iterator]();
}
