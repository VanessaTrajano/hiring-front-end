import styled from "styled-components";

export const SomaPreco = styled.div`
    display: none;
`

export const ShoppingContainer = styled.div`
    padding-top: 15vh;
`

export const ProductsCartContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const ProductCartContainer = styled.div`
    border: 1px solid purple;
    width: 500px;
    display: flex;
    margin-bottom: 15px;
    position: relative;
`

export const CartImages = styled.img`
    width: 200px;
`

export const RemoveFromCartButton = styled.button`
    position: absolute;
    font-size: 3vh;
    font-weight: 900;
    height: 28px;
    width: 28px;
    background-color: #f3f3f3;
    color: #000;
    border: none;
    border-radius: 50%;
    bottom: 4px;
    right: 4px;

    span{
        display: none;
        font-size: 10px;
        position: absolute;
        right: 20px;
        bottom: 20px;
        width: 70px;
        background-color: #6f6c6c ;
        color: #c9c9c9;
        border-radius: 5px;
    }
    
    &:hover{
        cursor: pointer;
        border: 1px solid grey;

        span{
            display: block;
        }
    }
`