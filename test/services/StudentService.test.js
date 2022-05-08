const StudentService = require('./../../lib/services/StudentServices');

describe("Test of the StudentService",() => {
    test("1. Get all the students", () => {
        const students = [{"name": "Warren",}];
        const getstudents = StudentService.getAllStudents(students);
        expect(getstudents).toEqual([{"name": "Warren"}]);
    });
});