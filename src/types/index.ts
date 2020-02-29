
export interface Product extends ApiResponse {
    id: number,
    name: string,
    collection: string,
    ingredient_ids: any
}
export type ApiResponse = Record<string, any>

export interface ProductType {
    products: Product[]
}


export interface ProductState {
    readonly data?: ProductType
    readonly loading?: boolean
    readonly errors?: string
}

