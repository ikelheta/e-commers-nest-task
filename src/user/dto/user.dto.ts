export interface IUser {
    userName: string
    email: string
    password: string
    isadmin: boolean
    seller: boolean
}
export class UserClass implements IUser {
    userName: string
    email: string
    password: string
    isadmin: boolean
    seller: boolean
    constructor(o?: any) {
        this.userName = o.userName
        this.email = o.email
        this.password = o.password
        if (o.isadmin) {
            this.isadmin = o.isadmin
        } else {
            this.isadmin = false
        }

        if (o.seller) {
            this.seller = o.seller
        } else {
            this.seller = false
        }

    }
}