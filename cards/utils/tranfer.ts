import { Wallet, WalletContextState } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { CONNECTION } from "./data";

export const transfer = async (wallet: WalletContextState, amount: any)  => {
        if (!wallet || !wallet.connected || !wallet.publicKey) {
            throw new Error("Wallet not found...");
        }

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey("ofbuPxNVCoCNjVyeeQc9yWL8R7P2TSwPhe8aUsSqmUG"),
                lamports: amount * LAMPORTS_PER_SOL
            })
        );

        transaction.feePayer = wallet.publicKey;;

        const { blockhash } = await CONNECTION.getRecentBlockhash();
        transaction.recentBlockhash = blockhash;
        if (!wallet.signTransaction) {
            throw new Error("Wallet does not support signing transactions");
        }
        const signedTransaction = await wallet.signTransaction(transaction);
        const signature = await CONNECTION.sendRawTransaction(signedTransaction.serialize());
        await CONNECTION.confirmTransaction(signature, 'finalized');

}