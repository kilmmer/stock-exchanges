export class Stock {
    id?: number;
    name: string;
    price: number;
    quantity: number;
    symbol: string;

    constructor(name: string, price: number,quantity: number, symbol: string,id?: number) {
        this.id = id || Math.floor(Math.random() * 1000000);
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    static create(name: string, price: number, quantity: number, symbol: string) {
        if(name.length < 3){
            throw new Error("Name must be at least 3 characters long")
        }

        if(price < 0){
            throw new Error("Price must be greater than 0")
        }
        
        if(quantity < 0){
            throw new Error("Quantity must be greater than 0")
        }

        if(symbol.length != 4){
            throw new Error("Symbol must be 4 characters long")
        }


        return new Stock(name, price, quantity, symbol);
    }

    static update(id: number, name: string, price: number, quantity: number, symbol: string) {
        if (name.length < 3) {
            throw new Error("Name must be at least 3 characters long");
        }

        if (price < 0) {
            throw new Error("Price must be greater than 0");
        }

        if (quantity < 0) {
            throw new Error("Quantity must be greater than 0");
        }

        if(symbol.length != 4){
            throw new Error("Symbol must be 4 characters long")
        }

        return new Stock(name, price, quantity, symbol, id);
    }

    static delete(id: number) {
        return new Stock("", 0, 0, "", id);
    }

    static get(id: number) {
        return new Stock("", 0, 0, "",  id);
    }

    static getAll() {
        return new Stock("", 0, 0, "");
    }

    static createMany(stocks: Stock[]) {
        return new Stock("", 0, 0, "");
    }

    static updateMany(stocks: Stock[]) {
        return new Stock("", 0, 0, "");
    }

    static deleteMany(ids: number[]) {
        return new Stock("", 0, 0, "");
    }

    static getMany(ids: number[]) {
        return new Stock("", 0, 0, "");
    }

    
}
