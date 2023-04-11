export interface CartItem {
    id: number;
    name: string;
    genre: string;
    pages: number;
    writer: string;
    publisher: string;
    date?: Date;
    price: number;
    rating?: number;
    status: 'pristiglo' | 'u toku' | 'otkazano' | null;
}