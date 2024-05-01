"use client"
import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core'
import { SolanaWalletConnectors } from '@dynamic-labs/solana'
import { HuddleClient, HuddleProvider } from "@huddle01/react";

interface Childern {
  children: React.ReactNode
}

const StoreProvider: React.FC<Childern> = ({ children }) => {
  const environmentId = process.env.NEXT_PUBLIC_DYNAMIC_API_KEY || '';

  const huddleClient = new HuddleClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  });

  const cssOverrides = `
  .dynamic-widget-class {
    height: 10px;
  }
`;

  return (
    <Provider store={store}>
      <DynamicContextProvider
        settings={{
          environmentId: environmentId,
          walletConnectors: [SolanaWalletConnectors],
          cssOverrides
        }}>
        <HuddleProvider client={huddleClient}>
          {children}
        </HuddleProvider>
      </DynamicContextProvider>
    </Provider>
  )
}

export default StoreProvider