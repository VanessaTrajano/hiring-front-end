import React from "react"
import { useEstado } from "../contexts/CartContext";
import { setRandomImage } from "../utils/randomImage";

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

    return(
        <div>
            <p>Aqui se encontrará o conteúdo do Carrinho de compras!</p>
            <div>
                {carrinho.map((item) => (
                    <div key={item.id}>
                        <div onClick={() => removeProdutosNoCarrinho(item)}>-</div>
                        <p>{item.name}</p>
                        <img src={setRandomImage(item)} alt={`Imagem de ${item.name}`} />
                        <p>{item.quantidade}</p>
                    </div>
                ))}
            </div>
        </div>
    )
    
}