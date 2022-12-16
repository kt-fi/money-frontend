export class Transaction {
    constructor(private transactionId: string, private sharedAccountNumber: string, private userId: string, private quantity: number, private paymentType: string, private concept: string, private date: string){
        this.transactionId = transactionId,
        this.sharedAccountNumber = sharedAccountNumber,
        this.userId = userId,
        this.quantity = quantity,
        this.paymentType = paymentType,
        this.concept = concept,
        this.date = date
    }
}
