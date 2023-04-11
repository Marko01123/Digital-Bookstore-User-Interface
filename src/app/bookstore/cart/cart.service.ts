import { CartItem } from "./cart.model";

export class CartService {
    private items: Array<CartItem> = [
        {   
            id: 0,
            name: 'Dervis i smrt',
            genre: 'Domaci klasici',
            pages: 376,
            writer: 'Mesa Selimovic',
            publisher: 'Book',
            price: 1089.00,
            date: new Date("2014-06-03"),
            status: "pristiglo"
        },
        {   
            id: 1,
            name: 'Faust',
            genre: 'Strani klasici',
            pages: 304,
            writer: 'Johan Volfgang Gete',
            publisher: 'Vulkan izdavastvo',
            price: 849.15,
            date: new Date("2016-10-14"),
            status: "u toku"
        },
        {   
            id: 2,
            name: 'Preobrazaj',
            genre: 'Strani klasici',
            pages: 162,
            writer: 'Franc Kafka',
            publisher: 'Otvorena knjiga',
            price: 742.50,
            date: new Date("2022-04-27"),
            status: "otkazano"
        },
        {   
            id: 3,
            name: 'Poslednja prilika',
            genre: 'Roman',
            pages: 376,
            writer: 'Fredrik Bakman',
            publisher: 'Laguna',
            price: 629.99,
            date: new Date("2019-07-03"),
            status: "pristiglo"
        },
        {   
            id: 4,
            name: 'Kraljica',
            genre: 'Biografija',
            pages: 512,
            writer: 'Metju Denison',
            publisher: 'Laguna',
            price: 1529.10,
            date: new Date("2022-10-12"),
            status: "otkazano"
        },
    ];

    getItems(){
        return this.items;
    }

    addItemsToCart(name: string, genre: string, pages: number, writer: string, publisher: string, price: number, date: any, status: any){
        var maxId: number = 0;

        this.getItems().forEach(cartItem => {
            if(maxId < cartItem.id){
                maxId = cartItem.id;
            }
        });

        var id = ++maxId;

        var cartItem: CartItem = {
            id,
            name,
            genre,
            pages,
            writer,
            publisher,
            price,
            date,
            status
        };

        this.getItems().push(cartItem);
    }

    addRatingById(id: number, rating: number){
        this.getItems().find(item => {
            if(item.id == id){
                item.rating = rating;
            }
        });
    }
}