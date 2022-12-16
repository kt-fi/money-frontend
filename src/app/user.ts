export class User {
    constructor(private userId: string, private userName: string, private userAccounts: string[] ){
        this.userId = userId,
        this.userName = userName,
        this.userAccounts = userAccounts
    }
}


