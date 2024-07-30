export default function getStudentIdSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.reduce((sum, students) => sum + students.id, 0);
}
