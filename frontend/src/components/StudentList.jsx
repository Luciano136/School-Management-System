function StudentList({
  students,
  selectStudent,
  deleteStudent,
  editStudent
}) {

  return (

    <table className="students-table">

      <thead>

        <tr>
          <th>Name</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>

      </thead>


      <tbody>

        {students.map((student)=>(

          <tr key={student.id}>

            <td>
              {student.name}
            </td>


            <td>
              {student.grade}
            </td>


            <td>

              <button
                onClick={()=>{
                  selectStudent(student);
                }}
              >
                View
              </button>


              <button
                onClick={()=>{
                  deleteStudent(student.id);
                }}
              >
                Delete
              </button>

              <button
                onClick={()=>editStudent(student)}
                >
                Edit
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  );
}




export default StudentList;
