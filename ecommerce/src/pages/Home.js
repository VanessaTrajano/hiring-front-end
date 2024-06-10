import React, { useState, useEffect } from "react";
import axios from 'axios';

import { useEstado } from "../contexts/CartContext";
import { setRandomImage } from "../utils/setRandomImage";

import { AddToCartButton, HomeContainer, ProductContainer, ProductImage, ProductInfo, ProductName, ProductPrice, ProductsContainer, ShearchBar } from "../styles/HomeStyle";

const apiProdutos = axios.create({
    baseURL: "https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos"
});

export default function Home(){
    const [produtos, setProdutos] = useState([]);
    const [produtosProcurados, setProdutosProcurados] = useState([]);
    const { carrinho, setCarrinho } = useEstado(); 

    useEffect(() => {
        getProdutos();
    }, []);

    const getProdutos = async () => {
        const response = await apiProdutos.get();
        const produtosCatalogo = response.data.map((item) => {
            return {
                ...item
            };
        });
        setProdutos(produtosCatalogo);
        setProdutosProcurados(produtosCatalogo);
    };

    const handleChange = (e) => {
        const produtosFilter = produtos.filter((item) => {
            return item.name.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setProdutosProcurados(produtosFilter);
    };

    const adicionaProdutosNoCarrinho = (item) => {
        const itemIndex = carrinho.findIndex((cartItem) => cartItem.id === item.id);
        
        if (itemIndex !== -1) {
            const newCarrinho = [...carrinho];
            newCarrinho[itemIndex] = { ...newCarrinho[itemIndex], quantidade: newCarrinho[itemIndex].quantidade + 1 };
            setCarrinho(newCarrinho);
        } else {
            const newCarrinho = [...carrinho, { ...item, quantidade: 1 }];
            setCarrinho(newCarrinho);
        }
    };

    return (
        <HomeContainer>
            <ShearchBar type="text" placeholder="Buscar Produtos" onChange={handleChange} />
            <ProductsContainer>
                {produtosProcurados.map((item) => (
                    <ProductContainer key={item.id}>
                        <AddToCartButton onClick={() => adicionaProdutosNoCarrinho(item)}>
                            +
                            <span>Adicionar ao Carrinho</span>
                        </AddToCartButton>
                        <ProductImage src={setRandomImage(item)} alt={`Imagem de ${item.name}`} />
                        <ProductName>{item.name}</ProductName>
                        <ProductInfo>{item.desciption}</ProductInfo>
                        <ProductPrice> R$ {item.price}</ProductPrice>
                    </ProductContainer>
                ))}
            </ProductsContainer>
        </HomeContainer> 
    );
};