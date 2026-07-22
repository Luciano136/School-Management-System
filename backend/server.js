const express = require("express");
const cors = require("cors");

const studentsRoutes = require("./routes/students");
const gradesRoutes = require("./routes/grades");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

require("./database/db");

app.use("/students", studentsRoutes);
app.use("/grades", gradesRoutes);

app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
