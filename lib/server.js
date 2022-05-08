const StudentController = require("./controllers/StudentController");
const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Thinking Server UP!"});
});

app.get("/v1/students/", (request, response) => {
    const studentlist = StudentController.getAllStudents();
    response.json(studentlist);
});

app.get("/v1/certified/", (request, response) => {
    const studentCertified = StudentController.validateStudentCertification();
    response.json(studentCertified);
});

app.get("/v1/credits/", (request, response) => {
    const studentCredits = StudentController.validateStudentCredits();
    response.json(studentCredits);
});


app.listen(port, () => {
    console.log(`Visual Thinking API in localhost:${port}`);
});

