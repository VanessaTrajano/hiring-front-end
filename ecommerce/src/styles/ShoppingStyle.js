import styled from "styled-components";

export const SomaPreco = styled.div`
    display: none;
`

export const ShoppingContainer = styled.div`
    padding-top: 15vh;
`

export const CartEmpty = styled.p`
    margin: auto;
    margin-top: 30px;
    font-size:3vh;
    letter-spacing:1px;
    font-weight: 500;
    max-width: 350px;
    text-align: center;
`

export const ProductsCartContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 40px;
`

export const ProductCartContainer = styled.div`
    width: 500px;
    display: flex;
    margin-bottom: 15px;
    position: relative;
    transition: 0.8s;
    border-radius: 10px;

    div{
        border-radius: 10px;
    }

    &:hover{
        box-shadow: 2px 2px 10px gray;
    }
`

export const CartImages = styled.img`
    border-radius: 10px 0  0 10px;
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
        right: 18px;
        bottom: 24px;
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

export const ProductCartName = styled.p`
    margin: 5px 15px;
    font-size: 3vh;
    font-weight:700;
    letter-spacing: 2px;
`

export const ProductCartInfo = styled.p`
    margin: 6px 10px;
    color: rgba(255,255,255, 0.6);
    font-size: 2.4vh;
    width: 85%;
`

export const ProductCartPrice = styled.p`
    position: absolute;
    bottom: 10px;
    right: 200px;
    font-size: 3vh;
`

export const ProductCartQuant = styled.p`
    position: absolute;
    bottom: 7px;
    right: 38px;
    font-size: 3.3vh;
    font-weight: 700;
`

export const TotalPrice = styled.p`
    padding: 5px 5px 10px 15px;
    font-size: 3.2vh;
    font-weight: 900;
    letter-spacing: 2px;
    position: fixed;
    bottom: 0px;
    z-index: 1;
    border-top: 2px solid #fafafa;
    border-right: 2px solid #fafafa;
    border-radius: 0 10px 0 0;
`