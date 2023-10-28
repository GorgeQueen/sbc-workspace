import * as Web3 from '@solana/web3.js';

async function main() {
    const publicKey = new Web3.PublicKey('3pQy7PsTHZNBpUECDSvTK63qRKwZ3cbepeijNgyi44F8');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance);
}

main()