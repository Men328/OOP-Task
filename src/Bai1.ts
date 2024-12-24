class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number | string {
        if (b === 0) {
            return "Lỗi: Không thể chia cho 0.";
        }
        return a / b;
    }
}

class Main1 {
    private calculator: Calculator;

    constructor() {
        this.calculator = new Calculator();
    }

    run() {
        let continueProgram = true;

        while (continueProgram) {
            const choice = prompt(`Chọn một chức năng:
                                1. Cộng hai số
                                2. Trừ hai số
                                3. Nhân hai số
                                4. Chia hai số
                                5. Dừng chương trình`);

            let a: number;
            let b: number;

            switch (choice) {
                case '1':
                    a = this.getNumber("Nhập số thứ nhất: ");
                    b = this.getNumber("Nhập số thứ hai: ");
                    console.log(`Kết quả: ${this.calculator.add(a, b)}`);
                    break;

                case '2':
                    a = this.getNumber("Nhập số thứ nhất: ");
                    b = this.getNumber("Nhập số thứ hai: ");
                    console.log(`Kết quả: ${this.calculator.subtract(a, b)}`);
                    break;

                case '3':
                    a = this.getNumber("Nhập số thứ nhất: ");
                    b = this.getNumber("Nhập số thứ hai: ");
                    console.log(`Kết quả: ${this.calculator.multiply(a, b)}`);
                    break;

                    case '4':
                        a = this.getNumber("Nhập số thứ nhất: ");
                        b = this.getNumber("Nhập số thứ hai: ");
                        if (b === 0) {
                            console.error("Lỗi: Không thể chia cho 0.");
                        } else {
                            try {
                                console.log(`Kết quả: ${this.calculator.divide(a, b)}`);
                            } catch (error: any) { 
                                console.error(error.message);
                            }
                        }
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

    private getNumber(promptMessage: string): number {
        let number: number;
        while (true) {
            const input = prompt(promptMessage);
            number = parseFloat(input!);
            if (!isNaN(number)) {
                break;
            } else {
                console.error("Vui lòng nhập một số hợp lệ.");
            }
        }
        return number;
    }
}

let app1 = new Main1();
app.run();