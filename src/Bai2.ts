class GeometryCalculator {
    circleArea(radius: number): number {
        return Math.PI * radius * radius;
    }

    circlePerimeter(radius: number): number {
        return 2 * Math.PI * radius;
    }

    triangleArea(base: number, height: number): number {
        return 0.5 * base * height;
    }

    trianglePerimeter(a: number, b: number, c: number): number {
        return a + b + c;
    }

    rectangleArea(width: number, height: number): number {
        return width * height;
    }

    rectanglePerimeter(width: number, height: number): number {
        return 2 * (width + height);
    }

    parallelogramArea(base: number, height: number): number {
        return base * height;
    }

    parallelogramPerimeter(a: number, b: number): number {
        return 2 * (a + b);
    }

    rhombusArea(d1: number, d2: number): number {
        return (d1 * d2) / 2;
    }

    rhombusPerimeter(side: number): number {
        return 4 * side;
    }
}

class Main2 {
    private calculator: GeometryCalculator;

    constructor() {
        this.calculator = new GeometryCalculator();
    }

    run() {
        let continueProgram = true;

        while (continueProgram) {
            let choice = prompt(`Chọn một chức năng:
                                    1. Tính diện tích và chu vi hình tròn
                                    2. Tính diện tích và chu vi hình tam giác
                                    3. Tính diện tích và chu vi hình chữ nhật
                                    4. Tính diện tích và chu vi hình bình hành
                                    5. Tính diện tích và chu vi hình thoi
                                    6. Dừng chương trình`);

            switch (choice) {
                case '1':

                case '2':
                    
                case '3':
                    
                case '4':

                case '5':
                
                case '6':

                default:
            }
        }
    }

}

// Khởi chạy ứng dụng
const app2 = new Main2();
app.run();