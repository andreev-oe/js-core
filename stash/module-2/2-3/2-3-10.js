class Person {
    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName
        this.lastName = lastName
        this.birthDate = new Date(birthDate)
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    getAge() {
        const dateToday = Date.now()
        const leapYearDays = Math.trunc((dateToday - this.birthDate)/(1000 * 60 * 60 * 24 * 365)/4)
        return Math.trunc(((dateToday - this.birthDate)/(1000 * 60 * 60 * 24) - leapYearDays)/ 365)
    }
}

class Account {
    constructor(person, money) {
        this.person = person
        this.money = money
        this.accountHistory = []
    }
    static transfer(fromAccount, toAccount, amount) {
        fromAccount.withdrawMoney(amount, 'transfer')
        toAccount.addMoney(amount, 'transfer')
    }
    addMoney(amount, description) {
        this.money = this.money + amount
        this.accountHistory.push({
            timestamp: Date.now(),
            target:'in',
            amount: amount,
            description: description
        })
    }
    withdrawMoney(amount, description) {
        this.money = this.money - amount
        this.accountHistory.push({
            timestamp: Date.now(),
            target:'out',
            amount: amount,
            description: description
        })
    }
    getAmount() {
        return this.money
    }
    getAccountHistory() {
        return this.accountHistory
    }
}

// const alex = new Person('Alexey', 'Petrov', '1994-04-14');
// const alexAccount = new Account(alex, 1000);
// const helen = new Person('Helen', 'Smith', '1990-06-06');
// const helenAccount = new Account(helen, 400);
//
// alexAccount.addMoney(1000, 'Зарплата');
// const amount = alexAccount.getAmount();
// alexAccount.withdrawMoney(amount * 0.1, 'Налоги');
// Account.transfer(alexAccount, helenAccount, 100);
// helenAccount.getAmount(); // 500
// alexAccount.getAmount(); // 1700
