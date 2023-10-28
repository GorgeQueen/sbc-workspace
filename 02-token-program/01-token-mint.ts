import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("3pQy7PsTHZNBpUECDSvTK63qRKwZ3cbepeijNgyi44F8")
const decoded = base58.decode('552F6x6ZiSmkMgt1wRtr3xKxobhENua8mNmDbNTTcKysPxr1wkHRrvni6Wfek1PUmDZnQgzgrKQh3BE43NJEj3dx')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();