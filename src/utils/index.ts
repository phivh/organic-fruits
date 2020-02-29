import { ProductType, Product } from "../types"

export const callAPI= async (endpoint:string) => {
    const res = await fetch(endpoint)
    return res.json()
}

export const ingredientsById = (ingredientIds:any, ids:[]) => {
    return new Promise(resolve => {
        if (!ingredientIds) return 
        const productsIngredients = ingredientIds.filter((productItem:any)=>{
            return productItem.id.indexOf(ids) > -1
        })
        resolve(productsIngredients) 
    })
}