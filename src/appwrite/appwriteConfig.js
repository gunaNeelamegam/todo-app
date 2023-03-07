import { Client, Account, Databases } from 'appwrite'

const client = new Client();

client
    .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)
    .setProject('63fd9401bcb588724c15');

    export const account = new Account(client)
    console.log(process.env.REACT_APP_APPWRITE_ENDPOINT)

//Database

export const databases = new Databases(client, "63fd94450a7c2383639b")