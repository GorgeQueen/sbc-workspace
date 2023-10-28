import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("6sLQySwobQ32JxisSxfSxxVkFaRfBd5K8aezKEYtEHyE") // PUBKEY of person you want to create the token account

const decoded = base58.decode('552F6x6ZiSmkMgt1wRtr3xKxobhENua8mNmDbNTTcKysPxr1wkHRrvni6Wfek1PUmDZnQgzgrKQh3BE43NJEj3dx')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "AZDVd7LA6jV5L5tWSFLMT64fyw1WeDRxnmm2h5poAwmT"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signertsx
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();