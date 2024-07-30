export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }
  if (!Array.isArray(newGrades)) {
    return [];
  }
  return students.map((student) => {
    const studentGrade = newGrades.filter((newGrade) => newGrade.studentId === student.id);
    if (student.location === city && studentGrade.length > 0) {
      return { ...student, grade: studentGrade[0].grade };
    }
    return student;
  });
}
