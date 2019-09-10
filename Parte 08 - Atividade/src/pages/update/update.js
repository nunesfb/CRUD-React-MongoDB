import React, {Component} from 'react';
import './update.css';
import {Redirect} from "react-router-dom";
import api from '../../services/services';

class EditarHumano extends Component{
    constructor(props){
        super(props);

        this.state = {
            humano: {
                nome: "",
                idade: 0,
                caracteristicas: {
                    peso: 0,
                    altura: 0
                }
            },
            redirect: false,
        }
    }

    async componentDidMount(){
        const {id} = this.props.match.params;
        const response = await api.get(`/humano/${id}`);
        this.setState({humano: response.data});
    }

    render () {
        const {redirect} = this.state;
        if(redirect) {
            return <Redirect to="/" />
        }else{
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                    <legend>Editar Humano</legend>
                    <div className="humano-update">
                        <label htmlFor="nome">Nome</label>
                        <br/>
                        <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Insira aqui seu nome"
                        minLength="3"
                        maxLength="100"
                        required
                        value={this.state.humano.nome}
                        onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="humano-update">
                        <label htmlFor="idade">Idade</label>
                        <br/>
                        <input
                        type="number"
                        id="idade"
                        name="idade"
                        placeholder="Insira sua idade"
                        min="18"
                        max="150"
                        required
                        value={this.state.humano.idade}
                        onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="humano-update">
                        <label htmlFor="peso">Peso</label>
                        <br />
                        <input
                        type="text"
                        id="peso"
                        name="peso"
                        placeholder="Insira o peso"
                        minLength="0"
                        maxLength="1000"
                        required
                        value={this.state.humano.caracteristicas.peso}
                        onChange={this.handleInputChangecaracteristicas}
                        />
                    </div>
                    <div className="humano-update">
                        <label htmlFor="altura">Altura</label>
                        <br />
                        <input
                        type="text"
                        id="altura"
                        name="altura"
                        placeholder="Insira a altura"
                        minLength="0"
                        maxLength="4"
                        required
                        value={this.state.humano.caracteristicas.altura}
                        onChange={this.handleInputChangecaracteristicas}
                        />
                    </div>
                    <br/>
                    <button type="submit">Editar</button>
                    </fieldset>
                </form>
            )
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            humano: {...prevState.humano, [name]: value}
        }));
    };

    handleInputChangecaracteristicas = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => {
            const humano = {...prevState.humano};
            humano.caracteristicas[name] = value;
            return {humano}
        })
    };

    handleSubmit = event => {
        const {id} = this.props.match.params;

        fetch(`http://localhost:8081/sistema/humano/${id}`, {
            method: "put",
            id: id,
            body: JSON.stringify(this.state.humano),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                if(data.ok){
                    this.setState({redirect: true});
                }
            })

            event.preventDefault();
    }
}

export default EditarHumano;