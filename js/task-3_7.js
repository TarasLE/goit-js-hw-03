/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

// let depositCount = 0;
// let withdrawCount = 0;
let id = 0;

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 123,
  count: id,
  //   depositCount: depositCount,
  //   withdrawCount: withdrawCount,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const currentTransaction = {
      amount: amount,
      type: type,
      id: (this.count += 1),
    };
    return currentTransaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, `пополнение`));
    // this.count += 1;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance = this.balance - amount;
      //   message = `сняние личных средств №${(count += 1)}`;
      this.transactions.push(this.createTransaction(amount, `снятие`));
      //   count = 2;
    } else {
      console.log("снятие такой суммы не возможно, недостаточно средств");
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    console.log(`Текущий баланс счета: ${this.balance}`);
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    // let message = "";
    for (const element of this.transactions) {
      for (const key in element) {
        if (element[key] === id) {
          console.log(element);
          return element;
        }
        // else {
        //   console.log(
        //     "транзакции с данным id не существует, проверьте номер id"
        //   );
        // }
        // console.log(element[key]);
      }
      //   console.log(element);
    }
    // return console.log(
    //   "транзакции с данным id не существует, проверьте номер id"
    // );
    // return element;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    let message = "";

    for (const element of this.transactions) {
      //   for (const key in element) {
      if (type === element.type) {
        total += element.amount;
        message = element.type;
      }
    }
    console.log(
      `общая сумма транзакций по типу "${message.toLocaleUpperCase()}" равна ${total}`
    );
    return total;
  },
};

account.deposit(100);
account.deposit(10);
account.deposit(1);
account.deposit(3);
account.withdraw(25);
account.withdraw(100);

// account.deposit(500);

console.log(account.transactions);
// console.log(account.balance);
account.getBalance();
console.log(id);

account.getTransactionDetails(4);
account.getTransactionDetails(1);
account.getTransactionDetails(6);
account.getTransactionDetails(25);

account.getTransactionTotal("пополнение");
account.getTransactionTotal("снятие");
