export class User {
    constructor(public userId: string | undefined, public userName: string, public userEmail: string, public password: string, public userAccounts: any[] ){
        this.userId = userId,
        this.userName = userName,
        this.userEmail = userEmail,
        this.password = password,
        this.userAccounts = userAccounts
    }
}


