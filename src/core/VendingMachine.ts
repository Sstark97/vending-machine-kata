export class VendingMachine {
    private currentAmount: number = 0.0;

    public totalAmount(): number {
        return this.currentAmount;
    }

    public insertCoin(coinValue: number, coinType: string) {
        if (coinType === "nickels") {
            this.currentAmount += coinValue;
        }

        if (coinType === "dimes") {
            this.currentAmount += coinValue;
        }

        if (coinType === "quarters") {
            this.currentAmount += coinValue;
        }
    }
}