function StudentForm({
  name,
  setName,
  grade,
  setGrade,
  addStudent,
  editingStudent
}) {

  return (
    <form 
      className="student-form"
      onSubmit={addStudent}
    >

      <input
        type="text"
        placeholder="Student name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />


      <input
        type="number"
        placeholder="Year"
        value={grade}
        onChange={(e)=>setGrade(e.target.value)}
      />


        <button type="submit">
        {editingStudent ? "Update Student" : "Add Student"}
        </button>

    </form>
  );
}

export default StudentForm;
