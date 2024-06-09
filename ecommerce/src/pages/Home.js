import React from "react"
import axios from 'axios'

const apiProdutos = axios.create({
    baseURL: "https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos"
})

export default class Home extends React.Component{
    state = {
        produtos: [],
        produtosProcurados: []
    }

    componentDidMount(){
        this.getProdutos()
    }

    getProdutos = async () => {
        const response = await apiProdutos.get()

        const produtosCatalogo = response.data.map((item) =>{
            return{
                ...item
            }
        })

        this.setState({
            produtos: produtosCatalogo,
            produtosProcurados: produtosCatalogo
        })
    }

    handleChange = (e) => {
        const produtosFilter = this.state.produtos.filter((item) => {
            if(item.name.toLowerCase().includes(e.target.value.toLowerCase())){
                return true
            }
        })

        this.setState({
            produtosProcurados: produtosFilter
        })
    }

    setRandomImage = (produto) => {
        const random = Math.floor(Math.random() * 1000)
        const link = produto.avatar
        const imageLink = `${link}?random=${random}`
        return imageLink
    }

    render(){
        return(
            <div>
                <input type="text" placeholder="Buscar Produtos" onChange={this.handleChange}/>
                <div>
                    {this.state.produtosProcurados.map((item) =>(
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <img src={this.setRandomImage(item)} alt={`Imagem de ${item.name}`}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}