export type Item = {
    id: number,
    image: string,
    title: string,
}

export type User = {
    id: number,
    email: string,
    name: string,
    password: string,
    order: Order[]
}

export type Order = {
    id: number,
    userId: number,
    itemId: number,
    quantity: number,
    item: Item
}