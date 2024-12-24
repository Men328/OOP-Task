"use strict";
class Employee {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }
    get id() {
        return this._id;
    }
}
class Task {
    constructor(id, title, deadline, isCompleted = false) {
        this._id = id;
        this._title = title;
        this._deadline = deadline;
        this._isCompleted = isCompleted;
    }
    get id() {
        return this._id;
    }
}
class Assignment {
    constructor(employee, task) {
        this._employee = employee;
        this._task = task;
    }
}
class TaskManager {
    constructor(employee, tasks, assignment) {
        this._employees = [];
        this._tasks = [];
        this._assignment = [];
    }
    addEmployee(name) {
        //thêm nhân viên mới vào danh sách
        let id = Math.random();
        let newEmployee = new Employee(id, name);
        this._employees.push(newEmployee);
    }
    addTask(title, deadline) {
        // thêm task mới với hạn hoàn thành
        let id = Math.random();
        let newTask = new Task(id, title, deadline);
        this._tasks.push(newTask);
    }
    assignTask(employeeId, taskId) {
        //phân công task cho nhân viên
        // danh sách employee phải có sẵn nhân viên
        // - Thực hiện tính năng thêm nhân viên mới 
        // danh sách task phải có sẵn các task
        // - thực hiện tính năng thêm mới task
        // -------------------------------------
        // Sử dụng employeeid do người dùng nhập vào để tìm kiếm
        // ra nhân viên cần phải giao task trong mảng employee
        let employee = this._employees.find(emp => emp.id === employeeId);
        // Sử dụng taskId do người dùng nhập vào để tìm kiếm
        // ra task cần phải giao cho employee tìm thấy ở trên
        let task = this._tasks.find(tsk => tsk.id === taskId);
        // new Assignment(nhân_viên_tìm_ra, task_tìm_ra);
        let newAssign = new Assignment(employee, task);
        this._assignment.push(newAssign);
        // --> add Assignment vừa tạo ra vào trong mảng assignments
    }
    completeTask(taskId) {
        //đánh dấu là task hoàn thành
    }
    listTask() {
        //hiển thị danh sách task
        if (this._tasks.length === 0) {
            console.log("Chưa có bất kì task nào!");
        }
        else {
            this.
            ;
        }
    }
}
class Main {
    constructor() {
        this._taskManager = new TaskManager();
    }
    run() {
        console.log("Chương trình bắt đầu");
        console.log("1.Thêm nhân viên mới");
        console.log("2.Thêm task mới");
        console.log("3.Gán task cho nhân viên");
        console.log("4.Đánh dấu task hoàn thành");
        console.log("5.Hiển thị danh sách task");
        console.log("6.Dừng chương trình");
        let choice = prompt("mời chọn");
        switch (choice) {
            case "1":
                break;
            case "2":
                break;
            case "3":
                break;
            case "4":
                break;
            case "5":
                break;
            case "6":
                break;
            default:
                console.log("lựa chọn không hợp lệ");
                break;
        }
    }
}
const app = new Main();
app.run();
