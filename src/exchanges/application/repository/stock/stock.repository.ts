import { Stock } from "../../../domain";

export class StockRepository {

    private stocks: Stock[] = [];

    public getStocks(): Stock[] {
        return this.stocks;
    }

    public addStock(stock: Stock): void {
        this.stocks.push(stock);
    }

    public removeStock(stock: Stock): void {
        const index = this.stocks.indexOf(stock);
        if (index !== -1) {
            this.stocks.splice(index, 1);
        }
    }

    public findStock(symbol: string): Stock | undefined {
        return this.stocks.find(stock => stock.symbol === symbol);
    }
}
