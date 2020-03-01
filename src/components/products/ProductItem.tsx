import React from 'react'
import styled from 'styled-components' 
import defaultIMG from '../../assets/images/default.jpg'
export interface IProduct {
    title? : string
}

const Item = styled.div`
    padding: 10px;
    width:100%;
    font-size:14px; 
    figure {
        border:1px solid #ccc;
        padding: 10px;
        width: 25%;
        margin: 0;
    }
    h3 {
        text-align: left;
    }

    img {
        max-width:100%;
    }
`

const ProductItemIngredient: React.FC<IProduct> = ({ title }) => {
    return (
        <Item> 
            <figure>
                {title && <img src={defaultIMG} alt=""/> } 
                <figcaption>
                    <h3>{ title }</h3>
                </figcaption>
            </figure>
        </Item>
    )
}

export default ProductItemIngredient