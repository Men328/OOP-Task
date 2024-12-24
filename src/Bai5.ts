class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    toString(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}

class Course {
    private id: number;
    private title: string;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    toString(): string {
        return `ID: ${this.id}, Title: ${this.title}`;
    }
}

class Enrollment {
    private student: Student;
    private course: Course;
    private scheduleTime: string;

    constructor(student: Student, course: Course, scheduleTime: string) {
        this.student = student;
        this.course = course;
        this.scheduleTime = scheduleTime;
    }

    toString(): string {
        return `${this.student.toString()}, Course: ${this.course.toString()}, Schedule Time: ${this.scheduleTime}`;
    }
}

class StudyManager {
    private students: Student[] = [];
    private courses: Course[] = [];
    private enrollments: Enrollment[] = [];
    private nextStudentId: number = 1;
    private nextCourseId: number = 1;

    public addStudent(name: string): void {
        let newStudent = new Student(this.nextStudentId++, name);
        this.students.push(newStudent);
        console.log(`Thêm sinh viên thành công: ${newStudent.toString()}`);
    }

    public addCourse(title: string): void {
        let newCourse = new Course(this.nextCourseId++, title);
        this.courses.push(newCourse);
        console.log(`Thêm khóa học thành công: ${newCourse.toString()}`);
    }

    public enrollStudent(studentId: number, courseId: number, scheduleTime: string): void {
        
    }

    public listEnrollments(): void {
        if (this.enrollments.length === 0) {
            console.log("Không có thời khóa biểu nào.");
            return;
        }
        console.log("Danh sách thời khóa biểu:");
        this.enrollments.forEach(enrollment => console.log(enrollment.toString()));
    }
}

class Main5 {
    private studyManager: StudyManager;

    constructor() {
        this.studyManager = new StudyManager();
    }

    public run() {
        let continueProgram = true;

        while (continueProgram) {
            const choice = prompt(`Chọn một chức năng:
                                    1. Thêm sinh viên mới
                                    2. Thêm khóa học mới
                                    3. Đăng ký khóa học cho sinh viên
                                    4. Hiển thị thời khóa biểu học tập
                                    5. Dừng chương trình`);

            switch (choice) {
                case '1':
                    let studentName = prompt("Nhập tên sinh viên: ")!;
                    this.studyManager.addStudent(studentName);
                    break;

                case '2':
                    let courseTitle = prompt("Nhập tên khóa học: ")!;
                    this.studyManager.addCourse(courseTitle);
                    break;

                case '3':
        
                    break;

                case '4':
                    this.studyManager.listEnrollments();
                    break;

                case '5':
                    continueProgram = false;
                    console.log("Chương trình đã dừng.");
                    break;

                default:
                    console.error("Lựa chọn không hợp lệ. Vui lòng thử lại.");
            }
        }
    }

    
}

const app5 = new Main();
app.run();