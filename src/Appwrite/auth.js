import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

    this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name)
            if (userAccount) {
                return this.Login({email,password})
            } else {
                return userAccount
            }
        } catch (error) {
            console.log('Appwrite service :: create account :: error',error);
        }
    }

    async Login ({email, password}) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            console.log('Appwrite service :: Login :: error',error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log('Appwrite service :: get current user :: error',error);
        }

        return null;
    }

    async Logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log('Appwrite service :: Log out :: error',error);
        }
    }


}

const authService = new AuthService();

export default authService