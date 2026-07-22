import { useEffect, useState } from "react";
import "./App.css";
import StudentForm from "./Components/StudentForm";
import StudentList from "./Components/StudentList";
import GradeForm from "./Components/GradeForm";
import GradeList from "./Components/GradeList";
import {
  getStudents,
  createStudent,
  deleteStudent as removeStudent,
  updateStudent as editStudent,
  getGrades,
  createGrade
} from "./services/api";

function App() {
  const [tab, setTab] = useState("students");

  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState([]);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editingStudent, setEditingStudent] = useState(null);

  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");

  const [subject, setSubject] = useState("");
  const [score, setScore] = useState("");

const loadStudents = async () => {
  try {
    const data = await getStudents();
    setStudents(data);
  } catch(error) {
    console.log(error.message);
  }
};

  useEffect(() => {
    loadStudents();
  }, []);

const addStudent = async (e) => {
  e.preventDefault();

  if (!name.trim()) {
    alert("Enter student name");
    return;
  }
  if (grade === "") {
    alert("Enter student year");
    return;
  }

  await createStudent({
    name,
    grade:Number(grade)
  });

    setName("");
    setGrade("");

    loadStudents();
  };

const deleteStudent = async (id) => {
  await removeStudent(id);
  loadStudents();
};

const editStudentData = async (e) => {
  e.preventDefault();

  if (!name.trim()) {
    alert("Enter student name");
    return;
  }
  if (grade === "") {
    alert("Enter student year");
    return;
  }

  await editStudent(editingStudent.id, {
    name,
    grade:Number(grade)
  });

  setName("");
  setGrade("");
  setEditingStudent(null);

  loadStudents();
};

const loadGrades = async (studentId) => {
const data = await getGrades(studentId);
setGrades(data);
};

  const selectStudent = async (student) => {
    setSelectedStudent(student);
    await loadGrades(student.id);
  };

  const addGrade = async (e) => {
    e.preventDefault();

if (!selectedStudent) return;

if (!subject.trim()) {
  alert("Enter subject");
  return;
}
if (score === "" || Number(score) < 1 || Number(score) > 10) {
  alert("Score must be between 1 and 10");
  return;
}
await createGrade({
  student_id:selectedStudent.id,
  subject,
  score:Number(score)
});

    setSubject("");
    setScore("");

    loadGrades(selectedStudent.id);
  };

  return (
    <div className="container">

      <h1>School Management System</h1>

      <div className="tabs">

        <button
          className={tab === "students" ? "active" : ""}
          onClick={() => setTab("students")}
        >
          Students
        </button>

        <button
          className={tab === "grades" ? "active" : ""}
          onClick={() => setTab("grades")}
        >
          Manage Grades
        </button>

      </div>
      {tab === "students" && (
        <>

<StudentForm
  name={name}
  setName={setName}
  grade={grade}
  setGrade={setGrade}
  addStudent={
    editingStudent 
    ? editStudentData
    : addStudent
  }
  editingStudent={editingStudent}
/>


<StudentList
  students={students}

  selectStudent={(student)=>{
    selectStudent(student);
    setTab("grades");
  }}

  deleteStudent={deleteStudent}

  editStudent={(student)=>{

    setEditingStudent(student);

    setName(student.name);

    setGrade(student.grade);

  }}
/>

        </>
      )}
      {tab === "grades" && (
        <>

          <h2>Manage Grades</h2>

          {!selectedStudent ? (

            <p>Select a student from the Students tab.</p>

          ) : (

            <>

              <div className="student-info">

                <h3>{selectedStudent.name}</h3>

                <p>Year {selectedStudent.grade}</p>

              </div>

<GradeForm
  subject={subject}
  setSubject={setSubject}
  score={score}
  setScore={setScore}
  addGrade={addGrade}
/>

<GradeList
  grades={grades}
/>

            </>

          )}

        </>
      )}
      </div>
  );
}

export default App;
