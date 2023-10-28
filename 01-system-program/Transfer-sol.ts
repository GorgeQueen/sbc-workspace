import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('552F6x6ZiSmkMgt1wRtr3xKxobhENua8mNmDbNTTcKysPxr1wkHRrvni6Wfek1PUmDZnQgzgrKQh3BE43NJEj3dx')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('3pQy7PsTHZNBpUECDSvTK63qRKwZ3cbepeijNgyi44F8');
    const publicKeyTo = new Web3.PublicKey('6sLQySwobQ32JxisSxfSxxVkFaRfBd5K8aezKEYtEHyE');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();