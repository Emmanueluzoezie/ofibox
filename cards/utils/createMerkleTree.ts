import { generateSigner, signerIdentity, createSignerFromKeypair, publicKey, Keypair, Umi, } from '@metaplex-foundation/umi'
import { createTree } from '@metaplex-foundation/mpl-bubblegum'
import 'dotenv/config'
import { Wallet } from "@coral-xyz/anchor"

export const createMerkleTree = async (umi: Umi, wallet: Wallet) => {

    try {
        const privateKeyString = process.env.PRIVATE_KEY;

        if (!privateKeyString) {
            throw new Error('Private key is undefined');
        }

        const secretKeyArray = JSON.parse(privateKeyString);

        const keypair: Keypair = {
            publicKey: publicKey("ofbuPxNVCoCNjVyeeQc9yWL8R7P2TSwPhe8aUsSqmUG"),
            secretKey: new Uint8Array(secretKeyArray)
        }

        const signer = await createSignerFromKeypair(umi, keypair);
        umi.use(signerIdentity(signer));

        const merkleTree = generateSigner(umi)

        // When we create a tree at this address.
        const builder = await createTree(umi, {
            merkleTree,
            maxDepth: 14,
            maxBufferSize: 64,
        });

        const tx = await builder.sendAndConfirm(umi);

        return {
            signer,
            tx
        }
    } catch (error) {
        return error
    }
}