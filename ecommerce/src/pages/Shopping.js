import React from "react"
import { useEstado } from "../contexts/CartContext";
import { setRandomImage } from "../utils/randomImage";

import { CartImages, ShoppingContainer, ProductCartContainer, ProductsCartContainer, RemoveFromCartButton, SomaPreco } from "../styles/ShoppingStyle";

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
                    <p>Não há nenhum produto no seu carrinho. Vá para a página de Home e comece suas compras!</p>
                ) : (
                    <ProductsCartContainer>
                        {carrinho.map((item) => (
                            <ProductCartContainer key={item.id}>
                                <SomaPreco>{
                                    price += Number(item.price * item.quantidade)
                                }</SomaPreco>
                                <CartImages src={setRandomImage(item)} alt={`Imagem de ${item.name}`} />
                                <div>
                                    <p>{item.quantidade}</p>
                                    <p>{item.name}</p>
                                    <p>{item.desciption}</p>
                                    <p>{item.price}</p>
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
            <p>Preço total do carrinho = R$ {price}</p>
        </ShoppingContainer>
    )
    
}