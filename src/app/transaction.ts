export class Transaction {
    constructor(public transactionId: string, public sharedAccountNumber: string, public userId: string, public quantity: number, public paymentType: string, public concept: string, public date: string){
        this.transactionId = transactionId,
        this.sharedAccountNumber = sharedAccountNumber,
        this.userId = userId,
        this.quantity = quantity,
        this.paymentType = paymentType,
        this.concept = concept,
        this.date = date
    }
}
