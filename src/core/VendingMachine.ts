import {Coin} from "@core/Coin";

export class VendingMachine {
    private currentAmount: number = 0.0;

    public totalAmount(): number {
        return this.currentAmount;
    }

    public insertCoin(coin: Coin) {
        if (coin === Coin.NICKEL) {
            this.currentAmount += coin.valueOf();
        }

        if (coin === Coin.DIME) {
            this.currentAmount += coin.valueOf();
        }

        if (coin === Coin.QUARTER) {
            this.currentAmount += coin.valueOf();
        }
    }

}