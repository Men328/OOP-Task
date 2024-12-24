class Book {
    id: number;
    title: string;
    author: string;
    year: number;

    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class LibraryManager {
    books: Book[] = [];
    nextId: number = 1;

    addBook(title: string, author: string, year: number): void {
        let newBook = new Book(this.nextId++, title, author, year);
        this.books.push(newBook);
        console.log(`Thêm sách thành công: ${title}`);
    }

    listBooks(): void {
        if (this.books.length === 0) {
            console.log("Thư viện hiện không có sách nào.");
            return;
        }
        console.log("\nDanh sách sách trong thư viện:");
        this.books.forEach(book => {
            console.log(`Mã sách: ${book.id}, Tên sách: ${book.title}, Tác giả: ${book.author}, Năm xuất bản: ${book.year}`);
        });
    }

    removeBook(id: number): void {
        let index = this.books.findIndex(book => book.id === id);
        if (index === -1) {
            console.log("Không tìm thấy sách với mã đã cho.");
            return;
        }
        this.books.splice(index, 1);
        console.log(`Xóa sách thành công với mã: ${id}`);
    }

    searchBook(title: string): void {
        let foundBooks = this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
        if (foundBooks.length === 0) {
            console.log("Không tìm thấy sách nào với tên đã cho.");
            return;
        }
        console.log("\nKết quả tìm kiếm:");
        foundBooks.forEach(book => {
            console.log(`Mã sách: ${book.id}, Tên sách: ${book.title}, Tác giả: ${book.author}, Năm xuất bản: ${book.year}`);
        });
    }
}

class Main_ {
    libraryManager: LibraryManager;

    constructor() {
        this.libraryManager = new LibraryManager();
    }

    static main() {
        const app = new Main();
        app.run();
    }

    run() {
        let option: string;

        let showMenu = () => {
            console.log("\nChọn chức năng:");
            console.log("1. Thêm sách vào thư viện");
            console.log("2. Hiển thị danh sách sách");
            console.log("3. Xóa sách theo mã sách");
            console.log("4. Tìm kiếm sách theo tên");
            console.log("5. Dừng chương trình");
        };
    }
    }