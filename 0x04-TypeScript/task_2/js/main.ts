interface DirectorInterface {
    workFromHome() {
        return string;
    }

    getCoffeeBreak() {
        return string;
    }

    workDirectorTasks() {
        return string;
    }
}

interface TeacherInterface {
    workFromHome() {
        return string;
    }

    getCoffeeBreak() {
        return string;
    }

    workTeacherTasks() {
        return string;
    }
}

class Teacher {
    TeacherInterface() {

    }
}

// function returns a director or a teacher instance 
function createEmployee(salary: string) {
    if (salary <= 500) {
        return new Teacher;
    } else {
        return Director;
    }

}

// employee argument will be used as a type predicate 
// and if the employee is a director
function isDirector(employee) {

}