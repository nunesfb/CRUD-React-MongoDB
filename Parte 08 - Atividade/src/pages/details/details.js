import React, {Component} from 'react';
import api from '../../services/services';
import {Link} from 'react-router-dom';
import './details.css';

export default class Humano extends Component{
    state = {
        humano: {
            nome: "",
            idade: 0,
            caracteristicas: {
                peso: 0,
                altura: 0
            }
        }
    }

    async componentDidMount(){
        const {id} = this.props.match.params;
        const response = await api.get(`/humano/${id}`);
        this.setState({ humano: response.data});
    }

    render() {
        const { humano } = this.state;

        return (
            <div className="humano-info">
                <h1>{humano.nome}</h1>
                <h1>{humano.idade}</h1>
                <h1>{humano.caracteristicas.peso}</h1>
                <h1>{humano.caracteristicas.altura}</h1>
                <br/>
                <Link to={`/`}>Voltar</Link><br/>
                <Link to={`/Editarhumano/${humano._id}`}>Editar</Link><br/>
                <Link to={`/Deletarhumano/${humano._id}`}>Deletar</Link><br/>
            </div>
        )
    }
}