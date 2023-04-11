export interface Book {
    id: number;
    name: string;
    genre: string;
    pages: number;
    writer: string;
    publisher: string;
    date?: Date;
    price: number;
    rating?: number;
}