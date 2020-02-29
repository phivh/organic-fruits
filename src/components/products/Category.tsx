import React from 'react'
import styled from 'styled-components' 
export interface IProduct {
    title : string,
    collection: string
}

const Item = styled.h3`
    width: 100%;
    font-size: 14px;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    background: #e7e7e7;
    text-align: left;
    padding-left: 10px;
    text-transform: uppercase;
    span {
        font-size:12px;
        background: #FBCC18;
        border-radius:4px;
        padding:5px;
        display:inline-block;
        margin-left:10px;
        text-transform: capitalize;
    }
`

const Category: React.FC<IProduct> = ({ title, collection }) => {
    return (
        <Item> {title} <span>{collection} </span></Item>
    )
}

export default Category