const user = {
    name: 'Spencer',
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {
    user.transactions.push(transaction);

    if(transaction.type === 'credit') {
        user.balance = user.balance + transaction.value;
    } else {
        user.balance = user.balance - transaction.value;
    }

    return user.balance;
};

function getHigherTransactionByType(type) {
    let higherTransaction;
    let higherValue = 0;
    
    for(let transaction of user.transactions) {
        if(transaction.type === type && transaction.value > higherValue) {
            higherValue = transaction.value;
            higherTransaction = transaction; 
        }
    };

    return console.log(higherTransaction);
};

function getAverageTransactionValue() {
    sum = 0;

    for(let transaction of user.transactions) {
        sum = sum + transaction.value;
    };

    average = sum / user.transactions.length;

    return console.log(`Average transactions = ${average.toFixed(1)}`);
};

function getTransactionsCount() {
    let creditCount = 0;
    let debitCount = 0;

    for(let transaction of user.transactions) {
        if(transaction.type === 'credit') {
            creditCount++;
        } else {
            debitCount++;
        }
    };

    return console.log({ credit: creditCount, debit: debitCount });
};

createTransaction({ type: 'credit', value: 150 });
createTransaction({ type: 'debit', value: 20 });
createTransaction({ type: 'credit', value: 40 });
createTransaction({ type: 'debit', value: 35 });

console.log(`User balance = ${user.balance}`);

getHigherTransactionByType('credit');
getHigherTransactionByType('debit');

getAverageTransactionValue();

getTransactionsCount();