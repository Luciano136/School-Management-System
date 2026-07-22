function GradeForm({
  subject,
  setSubject,
  score,
  setScore,
  addGrade
}) {

  return (
    <form
      className="grade-form"
      onSubmit={addGrade}
    >

      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e)=>setSubject(e.target.value)}
      />


      <input
        type="number"
        placeholder="Score"
        value={score}
        onChange={(e)=>setScore(e.target.value)}
      />


      <button type="submit">
        Add Grade
      </button>

    </form>
  );
}

export default GradeForm;
