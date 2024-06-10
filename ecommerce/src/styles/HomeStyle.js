import styled from "styled-components";

export const HomeContainer = styled.div`
    padding-top: 14vh;
`

export const ShearchBar = styled.input`
    margin: 10px;
    margin-top:0;
    width: 300px;
    border-radius:10px;
    height: 25px;
    padding-left: 10px;
    background-color: #f8f8f8;
    color: #0a0a0a;
    border: 2px solid grey;
    font-size: 16px;
`

export const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: top;
`

export const ProductContainer = styled.div`
    width: 370px;
    height: 360px;
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
    top: 2px;
    right: 6px;

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

export const ProductName = styled.p`
    margin: 3px 9px;
    font-size: 3.3vh;
`

export const ProductInfo = styled.p`
    margin: 2px 5px;
    color: rgba(255,255,255, 0.6);
    font-size: 2.4vh;
`

export const ProductPrice = styled.p`
    font-size: 3.2vh;
    position: absolute;
    bottom: 86px;
    right: 4px;
    padding: 2px 4px;
    border-radius: 10px 0 0 0;
`

export const ProductImage = styled.img`
    width: 360px;
    height: fit-content;
    align-self:center;
`