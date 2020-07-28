const users = [
    {
      name: "Lucas",
      income: [115.3, 48.7, 98.3, 14.5],
      expenses: [85.3, 13.5, 19.9]
    },
    {
      name: "Jessica",
      income: [24.6, 214.3, 45.3],
      expenses: [185.3, 12.1, 120.0]
    },
    {
      name: "Charlotte",
      income: [9.8, 120.3, 340.2, 45.3],
      expenses: [450.2, 29.9]
    }
  ];

function sumNumbers(numbers) {
    sum = 0;

    for(let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]; 
    };

    return sum;
};

function calculateBalance(income, expenses) {
    const incomeSum = sumNumbers(income);
    const expensesSum = sumNumbers(expenses);

    return incomeSum - expensesSum;    
};

for (let i = 0; i < users.length; i++) {
    const balance = calculateBalance(users[i].income, users[i].expenses);
    
    if(balance > 0) {
        console.log(`${users.name} has a POSITIVE balance of ${balance.toFixed(1)}`);
    } else {
        console.log(`${users.name} has a NEGATIVE balance of ${balance.toFixed(1)}`);
    }
};

