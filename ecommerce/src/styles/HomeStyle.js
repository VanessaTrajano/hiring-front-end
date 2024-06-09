import styled from "styled-components";

export const HomeContainer = styled.div`
    border: 1px solid red;
    padding-top: 14vh;
`

export const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: top;
`

export const ProductContainer = styled.div`
    border: 1px solid green;
    width: 370px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: left;
    position: relative;
`
export const AddToCartButton = styled.button`
    position: absolute;
    background-color: #000;
    border-radius: 50%;
    border: none;
    width: 28px;
    height: 28px;
    font-size: 2.8vh;
    font-weight: 900;
    top: 4px;
    right: 4px;

    span{
        display: none;
        font-size: 10px;
        position: absolute;
        right: 20px;
        top: 20px;
        width: 70px;
        background-color: #c9c9c9;
        color: #6f6c6c;
        border-radius: 5px;
    }
    
    &:hover{
        cursor: pointer;
        border: 1px solid white;

        span{
            display: block;
        }
    }
`

export const ProductInfo = styled.p`
// to do
`

export const ProductImage = styled.img`
    width: 370px;
    height: fit-content;
`