function GradeList({grades}) {

  return (

    <table className="students-table">

      <thead>
        <tr>
          <th>Subject</th>
          <th>Score</th>
        </tr>
      </thead>


      <tbody>

      {
        grades.length === 0 ?

        (
          <tr>
            <td colSpan="2">
              No grades yet.
            </td>
          </tr>
        )

        :

        grades.map((grade)=>(

          <tr key={grade.id}>

            <td>
              {grade.subject}
            </td>

            <td>
              {grade.score}
            </td>

          </tr>

        ))

      }

      </tbody>

    </table>
  );
}

export default GradeList;
