import { Entity } from "./Entity";

export class Stock extends Entity<Stock> {
    name: string;
    currentPrice: number;
    marketCap: number;
    symbol: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(name: string, currentPrice: number, marketCap: number, symbol: string, id?: number) {
        super(id || 0);

        if(id){
            this.id = id;
            this.updatedAt = new Date();
        }
        
        this.name = name;
        this.currentPrice = currentPrice;
        this.marketCap = marketCap;
        this.symbol = symbol;


        if(!id) {
            this.createdAt = new Date();
        }
    }

    static create(name: string, currentPrice: number, marketCap: number, symbol: string) {
        if(name.length < 3){
            throw new Error("Name must be at least 3 characters long")
        }

        if(currentPrice < 0){
            throw new Error("Price must be greater than 0")
        }

        if(marketCap < 0){
            throw new Error("Market Cap must be greater than 0")
        }

        if(symbol.length != 4){
            throw new Error("Symbol must be 4 characters long")
        }


        return new Stock(name, currentPrice, marketCap, symbol);
    }

    static update(id: number, name: string, currentPrice: number, marketCap: number, symbol: string) {
        if (name.length < 3) {
            throw new Error("Name must be at least 3 characters long");
        }

        if (currentPrice < 0) {
            throw new Error("Current price must be greater than 0");
        }

        if (marketCap < 0) {
            throw new Error("Market cap must be greater than 0");
        }

        if(symbol.length != 4){
            throw new Error("Symbol must be 4 characters long")
        }

        return new Stock(name, currentPrice, marketCap, symbol, id);
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
