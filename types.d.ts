type Loader = {
    state: boolean
    type: string
}

type Card = {
    id: string
    createdAt: Date
    updateAt?: Date
    userId: string
    media?: string
    rule?: string
    rank?: string
    action?: string
    collectionId: string
    amount: string
    currency?: string
    uri?: string
    nftAddress?: string
    title?: string
    toll?: string
    theme?: string
    template: string
    image: string
}

type paymentList = {
    creation: number,
    template: number,
    total: number
}