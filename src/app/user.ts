export class User {
    constructor(private userId: string | undefined, private userName: string, private userEmail: string, private password: string, private userAccounts?: string[] ){
        this.userId = userId,
        this.userName = userName,
        this.userEmail = userEmail,
        this.password = password,
        this.userAccounts = userAccounts
    }
}


