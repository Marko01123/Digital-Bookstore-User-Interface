import { Book } from "./bookstore.model";

export class BookstoreService {
    private books: Book [] = [
        {   
            id: 0,
            name: 'Dervis i smrt',
            genre: 'Domaci klasici',
            pages: 376,
            writer: 'Mesa Selimovic',
            publisher: 'Book',
            price: 1089.00,
            date: new Date("2014-06-03"),
            rating: 4.5,
        },
        {   
            id: 1,
            name: '1984',
            genre: 'Strani klasici',
            pages: 296,
            writer: 'Dzorz Orvel',
            publisher: 'Stela knjige',
            price: 719.99,
            date: new Date("2022-03-10"),
            rating: 4.3
        },
        {   
            id: 2,
            name: 'Faust',
            genre: 'Strani klasici',
            pages: 304,
            writer: 'Johan Volfgang Gete',
            publisher: 'Vulkan izdavastvo',
            price: 849.15,
            date: new Date("2016-10-14"),
            rating: 4.4
        },
        {   
            id: 3,
            name: 'Preobrazaj',
            genre: 'Strani klasici',
            pages: 162,
            writer: 'Franc Kafka',
            publisher: 'Otvorena knjiga',
            price: 742.50,
            date: new Date("2022-04-27"),
            rating: 4.2
        },
        {   
            id: 4,
            name: 'Bolnicar',
            genre: 'Triler',
            pages: 377,
            writer: 'Carls Grejber',
            publisher: 'Stela knjige',
            price: 989.10,
            date: new Date("2022-01-15"),
            rating: 4.2
        },
        {   
            id: 5,
            name: 'Pobednici',
            genre: 'Roman',
            pages: 712,
            writer: 'Fredrik Bakman',
            publisher: 'Laguna',
            price: 1349.50,
            date: new Date("2021-12-13"),
            rating: 4.3
        },
        {   
            id: 6,
            name: 'Istorija filma I & II',
            genre: 'Film',
            pages: 456,
            writer: 'Dejvid A. Kuk',
            publisher: 'Vulkan izdavastvo',
            price: 699.99,
            date: new Date("2018-05-28"),
            rating: 4.5
        },
        {   
            id: 7,
            name: 'Poslednja prilika',
            genre: 'Roman',
            pages: 376,
            writer: 'Fredrik Bakman',
            publisher: 'Laguna',
            price: 629.99,
            date: new Date("2019-07-03"),
            rating: 4.0
        },
        {   
            id: 8,
            name: 'Matematicka teorija toplotnih pojava nastalih suncevim zracenjem',
            genre: 'Astronomija',
            pages: 367,
            writer: 'Milutin Milankovic',
            publisher: 'Zavod za udzbenike',
            price: 2376.00,
            date: new Date("2012-08-28"),
            rating: 4.1
        },
        {   
            id: 9,
            name: 'Digitalni minimalizam - kako da zivite bolje sa manje tehnologije',
            genre: 'Popularna psihologija',
            pages: 247,
            writer: 'Kal Njuport',
            publisher: 'Kontrast',
            price: 859.10,
            date: new Date("2022-02-25"),
            rating: 3.7
        },
        {   
            id: 10,
            name: 'Filozofija fudbala',
            genre: 'Sport',
            pages: 157,
            writer: 'Sergej Ostojic',
            publisher: 'Data status',
            price: 1125.50,
            date: new Date("2016-03-26"),
            rating: 3.6
        },
        {   
            id: 11,
            name: 'Kraljica',
            genre: 'Biografija',
            pages: 512,
            writer: 'Metju Denison',
            publisher: 'Laguna',
            price: 1529.10,
            date: new Date("2022-10-12"),
            rating: 4.0
        },
        {   
            id: 12,
            name: 'Ostrvo pacova',
            genre: 'Triler',
            pages: 352,
            writer: 'Ju Nesbe',
            publisher: 'Laguna',
            price: 809.10,
            date: new Date("2021-09-10"),
            rating: 4.4
        },
        {   
            id: 13,
            name: 'Ratne price',
            genre: 'Strani klasici',
            pages: 226,
            writer: 'Lav Nikolajevic Tolstoj',
            publisher: 'Sumatra',
            price: 792.00,
            date: new Date("2022-05-14"),
            rating: 4.2
        },
        {   
            id: 14,
            name: 'Seobe',
            genre: 'Domaci klasici',
            pages: 786,
            writer: 'Milos Crnjanski',
            publisher: 'Laguna',
            price: 1769.90,
            date: new Date("2015-02-08"),
            rating: 4.6
        }
    ];

    getBooks(){
        return this.books;
    }
}