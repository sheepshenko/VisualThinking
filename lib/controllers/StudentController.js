const StudentServices = require("./../services/StudentServices");
const Reader = require("./../utils/Readers");

class StudentController{

    static getAllStudents(){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentServices.getAllStudents(students);
    }

    static validateStudentCertification(){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentServices.getEmailStudentsCertifed(students);
    }

    static validateStudentCredits(){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentServices.getStudentsCredits(students);
    }
}


module.exports = StudentController;