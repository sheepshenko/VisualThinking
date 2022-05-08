class StudentServices {

    static getAllStudents(students){
        const studentlist = students;
        return studentlist;
    }

    static getEmailStudentsCertifed(students){
        const getemails = students.filter((student) => {
            if(student.haveCertification === true){
                return student.email;            
            }
        });
        const emaillist = getemails.map((email) => email.email);
        return emaillist;
    }


}

module.exports = StudentServices;