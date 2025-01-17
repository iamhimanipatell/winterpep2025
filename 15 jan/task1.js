function createAcc(accNumber, initialAmount) {
    const account = {
        accNumber: accNumber,
        balance: initialAmount
    };
    return account;
}

function deposit(account, amount) {
    let newBalance = account.balance + amount;
    account.balance = newBalance;
    console.log(`Deposited ${amount} into account ${account.accNumber}. New balance: ${newBalance}`);
}

function withdraw(account, amount) {
    if (amount > account.balance) {
        console.log(`Insufficient funds for account ${account.accNumber}`);
    } else {
        let newBalance = account.balance - amount;
        account.balance = newBalance;
        console.log(`Withdrawn ${amount} from account ${account.accNumber}. New balance: ${newBalance}`);
 }
}

const account1 = createAcc("12200526", 1000);
console.log(account1);
deposit(account1, 500);
deposit(account1, 400);
withdraw(account1, 600);
console.log(account1);