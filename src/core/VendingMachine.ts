import {Coin} from "@core/Coin";

export class VendingMachine {
    private currentAmount: number = 0.0;

    public totalAmount(): number {
        return this.currentAmount;
    }

    public insertCoin(coin: Coin) {
        if (coin === Coin.NICKEL) {
            this.currentAmount = coin.valueOf();
        }

        if (coin === Coin.DIME) {
            this.currentAmount = coin.valueOf();
        }

        if (coin === Coin.QUARTER) {
            this.currentAmount = coin.valueOf();
        }
    }

    private defaultDisplayedMessage = "INSERT COIN";

    display() {
        return this.isEmptyAmount()
            ? this.defaultDisplayedMessage
            : this.formatDisplayedAmount();
    }

    private isEmptyAmount() {
        return this.currentAmount === 0.0;
    }

    private formatDisplayedAmount() {
        return Intl.NumberFormat("en-GB", {maximumSignificantDigits: 2}).format(this.currentAmount);
    }

    recoverCoin() {
        return null;
    }
}