import { publicKey, Keypair } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { Connection } from "@solana/web3.js";


export const CONNECTION = new Connection('https://api.devnet.solana.com', 'confirmed');

export const umi = createUmi("https://api.devnet.solana.com")

export const getKeypair = () => {
    const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

    if (!privateKey) {
        throw new Error("Private key not provided");
    }

    const secretKeyArray = JSON.parse(privateKey);
    const keypair: Keypair = {
        publicKey: publicKey("ofbuPxNVCoCNjVyeeQc9yWL8R7P2TSwPhe8aUsSqmUG"),
        secretKey: new Uint8Array(secretKeyArray),
    };

    return keypair
}