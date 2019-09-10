import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import api from "../../services/services";

class DeletarHumano extends Component {
    constructor(props) {
        super(props);

        this.state = {
            humano: {},
            redirect: false
        };
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/humano/${id}`);
        this.setState({ humano: response.data });
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" />;
        } else {
            return (
                <fieldset>
                    <legend>Deletar Humano</legend>
                    <div className="humano-delete">
                        <label htmlFor="nome">Nome</label>
                        <h5>{this.state.humano.nome}</h5>
                        <p>Tem certeza que deseja deletar este registro?</p>

                        <button onClick={this.handleClick}>Remover</button>
                        <br /><br />
                        <Link to={`/`}>Voltar</Link>
                    </div>
                </fieldset>
            );
        }
    }

    handleClick = event => {
        const { id } = this.props.match.params;

        fetch(`http://localhost:8081/Sistema/humano/${id}`, {
            method: "delete"
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true });
                }
            })

        event.preventDefault();
    }

}

export default DeletarHumano;