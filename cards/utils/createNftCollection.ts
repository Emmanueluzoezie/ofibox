import { createNft, mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata"
import { createSignerFromKeypair, Keypair, percentAmount, publicKey, signerIdentity, Umi } from "@metaplex-foundation/umi";
import { bundlrUploader } from "@metaplex-foundation/umi-uploader-bundlr";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { getKeypair } from "./data";

export const createNftCollection = async(umi: Umi, wallet:WalletContextState, name: string ) => {
    

    try{
        const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

        if (!privateKey) {
            throw new Error("Private key not provided");
        }

        const secretKeyArray = JSON.parse(privateKey);
        const keypair: Keypair = {
            publicKey: publicKey("ofbuPxNVCoCNjVyeeQc9yWL8R7P2TSwPhe8aUsSqmUG"),
            secretKey: new Uint8Array(secretKeyArray),
        };

        // const keypair = await getKeypair()

        if (!wallet.publicKey) {
            throw new Error("An error has occur")
        }

        const signer = createSignerFromKeypair(umi, keypair)
        umi.use(signerIdentity(signer))
        umi.use(mplTokenMetadata())

        // await bundlrUploader

        const collection = await createNft(umi, {
            mint: wallet.publicKey,
            name: name,
            uri: 'https://example.com/my-collection.json',
            sellerFeeBasisPoints: percentAmount(5.5),
            isCollection: true,
        }).sendAndConfirm(umi);

        console.log(collection)
    } catch(error){
        console.log(error)
    }
}