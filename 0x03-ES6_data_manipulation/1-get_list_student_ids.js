const getListStudentIds = (students) => {
  let studentIds = [];
  if (students instanceof Array) {
    studentIds = students.map((item) => item.id);
    return studentIds;
  }
  return studentIds;
};

export default getListStudentIds;
