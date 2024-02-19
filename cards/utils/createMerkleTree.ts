import { generateSigner, signerIdentity, createSignerFromKeypair, publicKey, Keypair, Umi, } from '@metaplex-foundation/umi'
import { createTree } from '@metaplex-foundation/mpl-bubblegum'
import 'dotenv/config'
import { Wallet } from "@coral-xyz/anchor"
import { getKeypair } from './data'

export const createMerkleTree = async (umi: Umi) => {
    try {
        const keypair = getKeypair()

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