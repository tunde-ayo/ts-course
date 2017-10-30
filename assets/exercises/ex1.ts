//Try to be as explicit as possible and add Types to everything you can!

type bankAcc = { money: number, deposit: (val: number) => void };

let bankAccount: bankAcc = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};
 
let myself: { name: string, bankAccount: bankAcc, hobbies: string[] } = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
 
myself.bankAccount.deposit(3000);
 
console.log(myself);

//Original Code

/*
let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
 
let myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
 
myself.bankAccount.deposit(3000);
 
console.log(myself);

*/