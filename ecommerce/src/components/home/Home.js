import React from "react"
import axios from 'axios'

const Api = axios.create({
    baseURL: "https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos"
})

export default class Home extends React.Component{
    
    state = {
        produtos: [],
    }

    render(){
        return(
            <div>
                <p>Aqui se encontrará o conteúdo da Home!</p>
            </div>
        )
    }
}