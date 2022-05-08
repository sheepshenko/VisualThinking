const StudentService = require('./../../lib/services/StudentServices');

describe("Test of the StudentService",() => {
    test("1. Get all the students", () => {
        const students = [{"name": "Warren",}];
        const getstudents = StudentService.getAllStudents(students);
        expect(getstudents).toEqual([{"name": "Warren"}]);
    });

    test("2. Validate if the student has the Certification", () => {
        const students = [{"haveCertification": true}];
        const validateCertification = StudentService.getEmailStudentsCertifed(students);
        expect(validateCertification.length).toBe(1);
    });
});