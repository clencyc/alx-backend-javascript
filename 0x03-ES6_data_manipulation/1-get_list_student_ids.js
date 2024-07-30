function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((students) => students.id);
}
export default getListStudentIds;
