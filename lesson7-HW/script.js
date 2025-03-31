class BankAccount {
    constructor(balance) {
        this.balance = balance;

        this.interestInterval;
        this.transactions = [];
    }

    deposit(amount) {
        try {
            if (typeof amount !== "number" || amount <= 0)
                throw new Error("Please check your input data");

            if (amount > 1000000)
                throw new Error("Where did you get this much money?!");
            this.balance += amount;
            this.transactions.push({
                type: "deposit",
                amount: amount,
                date: new Date(),
                accountBalance: this.balance,
            });
            console.log(
                `You have added ${amount} to your account, your new balance is: ${this.balance}`
            );
        } catch (error) {
            console.error(error.message);
        }
    }
    withdraw(amount) {
        try {
            if (typeof amount !== "number" || amount <= 0)
                throw new Error("Please check your input data");

            if (amount > this.balance)
                throw new Error(
                    `You cant withdraw more money than you have. Available balance is ${this.balance}`
                );
            this.balance -= amount;
            this.transactions.push({
                type: "withdrawal",
                amount: amount,
                date: new Date(),
                accountBalance: this.balance,
            });
            console.log(
                `You have withdrawed ${amount} from your account, your new balance is: ${this.balance}`
            );
        } catch (error) {
            console.error(error.message);
        }
    }

    getBalance() {
        try {
            return `Your balance is: ${this.balance}`;
        } catch (error) {
            console.log(error, "Error");
        }
    }

    startInterest(interval, rate) {
        if (this.interestInterval) {
            clearInterval(this.interestInterval);
        }

        this.interestInterval = setInterval(() => {
            const interest = this.balance * rate;
            this.balance += interest;
            console.log(
                `Your interest of ${interest.toFixed(
                    2
                )} has been added to your account. Your new balance is ${this.balance.toFixed(
                    2
                )}`
            );
        }, interval);
    }
    stopInterest() {
        clearInterval(this.interestInterval);
    }

    scheduleTransaction(type, amount, delay) {
        if (amount > this.balance && type === "withdraw") {
            throw new Error("Insufficient balance");
        }
        if (type !== "deposit" && type !== "withdraw") {
            console.log("Please pick operation:  deposit or withdrawal");
        }

        setTimeout(() => {
            switch (type) {
                case "withdraw":
                    this.withdraw(amount);
                    console.log(`Your ${type}al was successfull.`);
                    break;
                case "deposit":
                    this.deposit(amount);
                    console.log(`Your ${type} was successfull.`);
                    break;
                default:
                    console.log("Invalid operation type.");
                    break;
            }
        }, delay);
    }
    getTransactionHistory() {
        console.table(this.transactions);
    }
    getBalanceOnDate(date) {
        const targetDate = new Date(date).toDateString();
        let targetDateBalance = null;

        this.transactions.forEach((transaction) => {
            const transactionDate = new Date(transaction.date).toDateString();
            if (transactionDate === targetDate) {
                targetDateBalance = transaction.accountBalance;
            }
        });
        if (targetDateBalance === null) {
            console.log("There is no available balance for given date.");
            return "No transactions found on this date.";
        }
        console.log(`Your balance on ${targetDate} is: ${targetDateBalance}`);
        return targetDateBalance;
    }
}

const johnBA = new BankAccount(1000);

// johnBA.deposit(1000500);
johnBA.deposit(10);
// johnBA.deposit("10");
// johnBA.deposit(0);

johnBA.withdraw(250);
// johnBA.withdraw(0);
// johnBA.withdraw("10");
// johnBA.withdraw(1000);

console.log(johnBA.getBalance());

johnBA.deposit(100);

// johnBA.startInterest(2000, 0.1);
// johnBA.startInterest(3000, 50);
// // johnBA.stopInterest();

// johnBA.scheduleTransaction("deposit", 888, 3000);
// johnBA.scheduleTransaction("withdraw", 88, 3000);
// johnBA.scheduleTransaction("hello", 88, 3000);

johnBA.getTransactionHistory();
johnBA.getBalanceOnDate("Mar 31 2025");
johnBA.getBalanceOnDate("Mar 30 2025");
