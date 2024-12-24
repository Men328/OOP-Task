class Employee {
    private _id: number;
    private _name: string;

    constructor(id: number, name:string) {
        this._id = id;
        this._name = name;
    }

    get id() {
        return this._id;
    }
    
}

class Task {
    private _id: number;
    private _title: string;
    private _deadline: Date;
    private _isCompleted: boolean;

    constructor(id: number, title: string, deadline: Date, isCompleted: boolean = false) {
        this._id = id;
        this._title = title;
        this._deadline = deadline;
        this._isCompleted = isCompleted;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get isCompleted() {
        return this._isCompleted;
    }

    complete(): void {
        this._isCompleted = true;
    }
}

class Assignment {
    private _employee: Employee;
    private _task: Task;

    constructor(employee: Employee, task: Task) {
        this._employee = employee;
        this._task = task;
    }
}

class TaskManager {
    private _employees: Employee[];
    private _tasks: Task[];
    private _assignment: Assignment[];

    constructor(employee: Employee, tasks: Task, assignment: Assignment) {
        this._employees = [];
        this._tasks = [];
        this._assignment = [];
    }

    addEmployee(name: string): void {
        //thêm nhân viên mới vào danh sách
        let id = Math.random();
        let newEmployee = new Employee(id, name);
        this._employees.push(newEmployee);
    }

    addTask(title: string, deadline: Date): void {
        // thêm task mới với hạn hoàn thành
        let id = Math.random();
        let newTask = new Task(id, title, deadline);
        this._tasks.push(newTask);
    }

    assignTask(employeeId: number, taskId: number): void {
        // Tìm kiếm nhân viên trong danh sách employees
        let employee = this._employees.find(e => e.id === employeeId);
        if (!employee) {
            console.error(`Không tìm thấy nhân viên với ID: ${employeeId}`);
            return;
        }
    
        // Tìm kiếm task trong danh sách tasks
        let task = this._tasks.find(t => t.id === taskId);
        if (!task) {
            console.error(`Không tìm thấy task với ID: ${taskId}`);
            return;
        }
    
        // Tạo đối tượng Assignment
        let assignment = new Assignment(employee, task);
        
        // Thêm Assignment vào danh sách assignments
        this._assignment.push(assignment);
        console.log(`Gán task '${task.title}' cho nhân viên '${Employee.name}'`);
    }

    completeTask(taskId: number): void {
        //đánh dấu là task hoàn thành
        let task = this._tasks.find(t => t.id === taskId);
        if(!task) {
            console.error("Task không hợp lệ");
        }
        else {
            task.complete();
            console.log(`task '${task.title}' hoàn thành`);

        }
            
    }

    listTodos(): void {
        // In ra danh sách công việc todo
        if (this._tasks.length === 0) {
          console.log("Chưa có bất kỳ công việc nào cả !!!");
        } else {
          this._tasks.forEach(function (element: Task, index: number) {
            console.log(
              `${index + 1}. ${element.title} - ${
                element.isCompleted ? "Hoàn thành" : "Chưa hoàn thành"
              }`
            );
          });
        }
    }
}

class Main {
    private _taskManager: TaskManager;

    constructor() {
        this._taskManager = new TaskManager();
    }

    run(): void {
        let loop: boolean = true;
        while (loop) {
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
                let empName = prompt("Nhập tên nhân viên:");
                if (empName) {
                    this._taskManager.addEmployee(empName);
                } else {
                    console.error("Tên nhân viên không hợp lệ.");
                }
                break;

            case "2":
                let taskTitle = prompt("Nhập tên task:");
                let deadline = prompt("Nhập hạn hoàn thành (YYYY-MM-DD):");
                if (taskTitle && deadline) {
                    this._taskManager.addTask(taskTitle, deadline);
                } else {
                    console.error("Thông tin task không hợp lệ.");
                }
                break;

            case "3":
                const empId = Number(prompt("Nhập ID nhân viên:"));
                const taskId = Number(prompt("Nhập ID task:"));
                this._taskManager.assignTask(empId, taskId);
                break;

            case "4":
                const completedTaskId = Number(prompt("Nhập ID task hoàn thành:"));
                this._taskManager.completeTask(completedTaskId);
                break;

            case "5":
                this._taskManager.listTodos();
                break;

            case "6":
                console.log("Dừng chương trình.");
                loop = false;
                break;

            default:
                console.log("Lựa chọn không hợp lệ.");
                break;
        }
    }
    }
}

const app = new Main();
app.run();