import { fetchMerkleTree, mintToCollectionV1, mintV1 } from "@metaplex-foundation/mpl-bubblegum"
import { publicKey, PublicKey, Umi } from "@metaplex-foundation/umi"
import { WalletContextState } from "@solana/wallet-adapter-react";


export const mintCnft = async (
    umi: Umi, 
    merkleTreePubKey: PublicKey, 
    name: string, 
    wallet: WalletContextState,
    uri: string) => {

    const merkleTree = await fetchMerkleTree(umi, merkleTreePubKey)

    if(!wallet.publicKey){
        return
    }

    await mintToCollectionV1(umi, {
        leafOwner: publicKey(wallet.publicKey),
        merkleTree: publicKey(merkleTreePubKey),
        collectionMint: publicKey(wallet.publicKey),
        metadata: {
            name: 'My Compressed NFT',
            uri: 'https://example.com/my-cnft.json',
            sellerFeeBasisPoints: 500, // 5%
            collection: { key: publicKey(wallet.publicKey), verified: false },
            creators: [
                { address: umi.identity.publicKey, verified: false, share: 100 },
            ],
        },
    }).sendAndConfirm(umi)
    
}