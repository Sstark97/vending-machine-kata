import {VendingMachine} from "../core/VendingMachine";
import {Coin} from "../core/Coin";

describe("VendingMachine should", () => {
    it("display an initial state", () => {
        const vendingMachine = new VendingMachine();

        expect(vendingMachine.display()).toBe("INSERT COIN")
        expect(vendingMachine.recoverCoin()).toBe(null)
    });

    it.each([
        {coin: Coin.NICKEL, expectedAmount: "0.05", coinName: "nickels"},
        {coin: Coin.DIME, expectedAmount: "0.10", coinName: "dimes"},
        {coin: Coin.QUARTER, expectedAmount: "0.25", coinName: "quarter" },
    ])("insert a valid coin $coinName", ({ coin, expectedAmount}) => {
        const vendingMachine = new VendingMachine();

        vendingMachine.insertCoin(coin);

        expect(vendingMachine.display()).toBe(expectedAmount)
        expect(vendingMachine.recoverCoin()).toBe(null)
    });

    it("insert an invalid coin", () => {
        const vendingMachine = new VendingMachine();

        vendingMachine.insertCoin(Coin.PENNY);

        expect(vendingMachine.display()).toBe("INSERT COIN")
        expect(vendingMachine.recoverCoin()).toBe(Coin.PENNY)
    });
})