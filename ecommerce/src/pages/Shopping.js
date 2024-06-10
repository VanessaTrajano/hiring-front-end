import React from "react"
import { useEstado } from "../contexts/CartContext";
import { setRandomImage } from "../utils/randomImage";

import { CartImages, ShoppingContainer, ProductCartContainer, ProductsCartContainer, RemoveFromCartButton, SomaPreco, ProductCartQuant, ProductCartName, ProductCartInfo, ProductCartPrice, TotalPrice, CartEmpty } from "../styles/ShoppingStyle";

export default function Shopping(){

    const { carrinho, setCarrinho } = useEstado(); 
 
    const removeProdutosNoCarrinho = (item) => {
        const index = carrinho.findIndex((itemDoCarrinho) => itemDoCarrinho.id === item.id);
        
        if (index !== -1) {
            const listaCarrinho = [...carrinho];
            if (listaCarrinho[index].quantidade > 1) {
                listaCarrinho[index] = { ...listaCarrinho[index], quantidade: listaCarrinho[index].quantidade - 1 };
            } else {
                listaCarrinho.splice(index, 1);
            }
            setCarrinho(listaCarrinho);
        }
    }

    let price = 0
    return(
        <ShoppingContainer>
            {
                carrinho.length === 0 ? 
                (
                    <CartEmpty>Não há nenhum produto no seu carrinho. Vá para a página de Home e comece suas compras!</CartEmpty>
                ) : (
                    <ProductsCartContainer>
                        {carrinho.map((item) => (
                            <ProductCartContainer key={item.id}>
                                <SomaPreco>{
                                    price += Number(item.price * item.quantidade)
                                }</SomaPreco>
                                <CartImages src={setRandomImage(item)} alt={`Imagem de ${item.name}`} />
                                <div>
                                    <ProductCartQuant>{item.quantidade}</ProductCartQuant>
                                    <ProductCartName>{item.name}</ProductCartName>
                                    <ProductCartInfo>{item.desciption}</ProductCartInfo>
                                    <ProductCartPrice>R$ {item.price}</ProductCartPrice>
                                </div>
                                <RemoveFromCartButton onClick={() => removeProdutosNoCarrinho(item)}>
                                    -
                                    <span>Remover do Carrinho</span>
                                </RemoveFromCartButton>
                            </ProductCartContainer>
                        ))}
                    </ProductsCartContainer>
                )
            }
            <TotalPrice>Preço total do carrinho = R$ {price.toFixed(2)}</TotalPrice>
        </ShoppingContainer>
    )
    
}