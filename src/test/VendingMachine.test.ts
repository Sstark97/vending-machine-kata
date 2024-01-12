import { VendingMachine } from "../core/VendingMachine";

describe("VendingMachine should", () => {
    it("display an initial amount", () => {
        const vendingMachine = new VendingMachine();

        const initialAmount = vendingMachine.totalAmount();

        expect(initialAmount).toBe(0.0)
    });

    it.each([
        {value: 1.0, type: "nickels"},
        {value: 1.0, type: "dimes"},
        {value: 1.0, type: "quarters"},
    ])("insert a valid coin", ({ value, type }) => {
        const vendingMachine = new VendingMachine();

        vendingMachine.insertCoin(value, type);

        expect(vendingMachine.totalAmount()).toBe(value)
    });
})