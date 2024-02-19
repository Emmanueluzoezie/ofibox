import { toMetaplexFileFromBrowser } from "@metaplex-foundation/js";
import { createSignerFromKeypair, Keypair, publicKey, signerIdentity, Umi } from "@metaplex-foundation/umi";
import { createBundlrUploader } from "@metaplex-foundation/umi-uploader-bundlr"
import { getKeypair } from "./data";


export const getMetadataUrl = async (
    name: string,
    symbol: string,
    description: string,
    image: string,
    umi: Umi
): Promise<string> => {
    try {
        const keypair = getKeypair()
        
        const signer = await createSignerFromKeypair(umi, keypair);
        umi.use(signerIdentity(signer));

        const metadata = {
            name,
            symbol,
            description: description,
            image: image,
        };
        // const images = await toMetaplexFileFromBrowser(image)
        const bundlrUploader = createBundlrUploader(umi);
        const uri = await bundlrUploader.uploadJson(metadata);
        return uri;
    } catch (error) {
        throw error;
    }
}