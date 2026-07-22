const db = require("../database/db");

const getStudents = (req, res) => {
    db.all("SELECT * FROM students", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json(rows);
    });
};

const createStudent = (req, res) => {
    const { name, grade } = req.body;

    if (!name || name.trim() === "") {
    return res.status(400).json({
        error:"Name required"
    });
}
if (!grade) {
    return res.status(400).json({
        error:"Year required"
    });
}

    db.run(
        "INSERT INTO students (name, grade) VALUES (?, ?)",
        [name, grade],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.json({
                id: this.lastID,
                name,
                grade,
            });
        }
    );
};

const updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, grade } = req.body;

    db.run(
        "UPDATE students SET name = ?, grade = ? WHERE id = ?",
        [name, grade, id],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.json({ message: "Alumno actualizado" });
        }
    );
};

const deleteStudent = (req, res) => {
    const { id } = req.params;

    db.run(
        "DELETE FROM students WHERE id = ?",
        [id],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.json({ message: "Alumno eliminado" });
        }
    );
};

module.exports = {
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent,
};
