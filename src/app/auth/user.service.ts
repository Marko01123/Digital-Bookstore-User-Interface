import { Injectable } from "@angular/core";

export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    address: string;
    city: string;
    phone: string;
    date: Date;
}

@Injectable()
export class UserService {

    currentUser: User = UserService.userList[0];

    static userList: Array<User> = [
        {
            id: 0,
            email: "",
            password: "",
            name: "",
            address: "",
            city: "",
            phone: "",
            date: new Date("")
        },
        {
            id: 1,
            email: "nekiemail@gmail.com",
            password: "nekalozinka123",
            name: "Pera Peric",
            address: "Neka adresa",
            city: "Neki grad",
            phone: "0633456789",
            date: new Date("2023-01-01")
        }
    ];
    
    getUserName(user: User): string {
        return user.email;
    }

    getUserById(id: number): User {
        var foundUser!: User;
        UserService.userList.forEach(user => {
            if(user.id == id){
                foundUser = user;
            }
        });

        this.currentUser = foundUser;
        return foundUser;
    }

    getUser(email: string) : User {
        this.currentUser = UserService.userList.find(userToFind => userToFind.email == email)!;
        return this.currentUser;
    }

    isPasswordCorrect(email: string, password: string): boolean{
        return UserService.userList.find(userToFind => 
            (userToFind.email == email && userToFind.password == password)) != undefined;
    }

    registerUser(email: string, password: string, date: Date, name: string, address: string, city: string, phone: string): User {
        var maxId: number = 0;

        UserService.userList.forEach(user => {
            if(maxId < user.id){
                maxId = user.id;
            }
        });

        var id = ++maxId;

        var user: User = {
            id,
            email,
            password,
            name,
            address,
            city,
            phone,
            date
        };

        UserService.userList.push(user);

        this.currentUser = user;
        
        console.log(user);
        return user;
    }
}