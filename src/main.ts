//Typisierung eines Grades
type Grades = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined

//Typisierung eines Studenten
type Student = {
    firstname: string,
    lastname: string,
    age: number,
    grades: Grades[]
    }

//Studentenliste
const students: Student[] = [
    { firstname: "Jens", lastname: "Burkhard", age: 43, grades: [2,"C",undefined,2,"F"]},
    { firstname: "Maria", lastname: "Johansen", age: 33, grades: [3,"B",undefined,1,"C"]},
    { firstname: "Peter", lastname: "Buz", age: 53, grades: [1,"B",5,undefined,"E"]}
]

//Funktion zur Ausgabe eines Studenten
function printStudent(student: Student): void {
    const header = `${student.firstname} ${student.lastname} (${student.age})`;
    const seperator = "=".repeat(30);
    //undefined durch ein '*' ersetzen
    const formattedGrades = student.grades.map(grade => (grade === undefined ? "*" : grade)).join(", ");
    //Ausgabe
    console.log(header);
    console.log(seperator);
    console.log(`Grades: ${formattedGrades}`);
    console.log("\n")
}

//Funktion zur Ausgabe aller Studenten
function printAllStudents(students: Student[]): void {
    students.forEach(student => printStudent(student));
}

//Ausgabe der Liste aller Studenten
printAllStudents(students);