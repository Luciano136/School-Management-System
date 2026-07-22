const db = require("../database/db");

const createGrade = (req, res) => {
    const { student_id, subject, score } = req.body;

    if (!subject || subject.trim() === "") {
    return res.status(400).json({
        error:"Subject required"
    });
}
if (score === undefined || score < 0 || score > 10) {
    return res.status(400).json({
        error:"Invalid score"
    });
}

    db.run(
        "INSERT INTO grades (student_id, subject, score, passed) VALUES (?, ?, ?, ?)",
        [student_id, subject, score, score >= 6 ? 1 : 0],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.json({
                id: this.lastID,
                student_id,
                subject,
                score,
            });
        }
    );
};

const getGradesByStudent = (req, res) => {
    const { studentId } = req.params;

    db.all(
        "SELECT * FROM grades WHERE student_id = ?",
        [studentId],
        (err, rows) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.json(rows);
        }
    );
};

module.exports = {
    createGrade,
    getGradesByStudent,
};
