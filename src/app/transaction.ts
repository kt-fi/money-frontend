export class Transaction {
    constructor(public transactionId: string, public accountId: string, public userId: string, public quantity: number, public paymentType: string, public concept: string, public date: string){
        this.transactionId = transactionId,
        this.accountId = accountId,
        this.userId = userId,
        this.quantity = quantity,
        this.paymentType = paymentType,
        this.concept = concept,
        this.date = date
    }
}
