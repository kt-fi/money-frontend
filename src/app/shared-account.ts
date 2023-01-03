export class SharedAccount {
    constructor(private accountId: string, private accountName: string, private accountMembers?: string[], private individualAccounts?: string[]){
        this.accountId = accountId,
        this.accountName = accountName,
        this.accountMembers = accountMembers,
        this.individualAccounts = individualAccounts
    }
}
