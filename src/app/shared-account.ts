export class SharedAccount {
    constructor(public accountId: string, public accountName: string, public accountMembers?: string[], public individualAccounts?: string[]){
        this.accountId = accountId,
        this.accountName = accountName,
        this.accountMembers = accountMembers,
        this.individualAccounts = individualAccounts
    }
}
