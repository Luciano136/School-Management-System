const API = "http://localhost:3000";


export const getStudents = async () => {
    const response = await fetch(`${API}/students`);

    if (!response.ok) {
        throw new Error("Error loading students");
    }

    return await response.json();
};


export const createStudent = async (student) => {
    const response = await fetch(`${API}/students`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(student)
    });

    return await response.json();
};


export const deleteStudent = async (id) => {

    const response = await fetch(`${API}/students/${id}`, {
        method:"DELETE"
    });

    return await response.json();
};


export const getGrades = async (studentId) => {

    const response = await fetch(
        `${API}/grades/${studentId}`
    );

    return await response.json();
};


export const createGrade = async (grade) => {

    const response = await fetch(`${API}/grades`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(grade)
    });

    return await response.json();
};

export const updateStudent = async (id, student) => {

    const response = await fetch(`${API}/students/${id}`, {
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(student)
    });

    return await response.json();
};
