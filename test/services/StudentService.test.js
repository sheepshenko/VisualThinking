const StudentService = require('./../../lib/services/StudentServices');

describe("Test of the StudentService",() => {
    test("1. Get all the students", () => {
        const students = [{"name": "Warren",}];
        const getstudents = StudentService.getAllStudents(students);
        expect(getstudents).toEqual([{"name": "Warren"}]);
    });

    test("2. Validate if the student has the Certification", () => {
        const students = [{"haveCertification": true,"email": "test@mail.com"}];
        const validateCertification = StudentService.getEmailStudentsCertifed(students);
        expect(validateCertification).toContain("test@mail.com");
    });

    test("3. Validate that the student has more than 500 credits", () =>{
        const students = [{"credits": 545}];
        const validateCredits = StudentService.getStudentsCredits(students);
        expect(validateCredits.length).toBe(1);
    })
});