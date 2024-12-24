class CD {
    private id: number;
    private title: string;
    private artist: string;
    private year: number;

    constructor(id: number, title: string, artist: string, year: number) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.year = year;
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getArtist(): string {
        return this.artist;
    }

    getYear(): number {
        return this.year;
    }

    toString(): string {
        return `ID: ${this.id}, Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}`;
    }
}

class CDStoreManager {
    private cds: CD[] = [];
    private nextId: number = 1;

    addCD(title: string, artist: string, year: number): void {
        let newCD = new CD(this.nextId++, title, artist, year);
        this.cds.push(newCD);
        console.log(`Thêm CD thành công: ${newCD.toString()}`);
    }

    listCDs(): void {
        if (this.cds.length === 0) {
            console.log("Không có CD nào trong cửa hàng.");
            return;
        }
        console.log("Danh sách CD trong cửa hàng:");
        this.cds.forEach(cd => console.log(cd.toString()));
    }

    removeCD(id: number): void {
        let index = this.cds.findIndex(cd => cd.getId() === id);
        if (index === -1) {
            console.error("Không tìm thấy CD với ID đã cho.");
        } else {
            let removedCD = this.cds.splice(index, 1);
            console.log(`Đã xóa CD: ${removedCD[0].toString()}`);
        }
    }

    searchCD(title: string): void {
        
    }

}

class Main4 {
    private storeManager: CDStoreManager;

    constructor() {
        this.storeManager = new CDStoreManager();
    }

    public run() {
        let continueProgram = true;

        while (continueProgram) {
            const choice = prompt(`Chọn một chức năng:
                                    1. Thêm CD vào cửa hàng
                                    2. Hiển thị danh sách CD
                                    3. Xóa CD theo mã CD
                                    4. Tìm kiếm CD theo tên
                                    5. Dừng chương trình`);

            switch (choice) {
                case '1':
                    
                    break;

                case '2':
                    break;

                case '3':
                    break;

                case '4':
                    break;

                case '5':
                    break;

                default:
            }
        }
    }

    
}

const app3 = new Main4();
app.run();