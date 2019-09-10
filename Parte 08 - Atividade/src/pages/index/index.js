import React, {Component} from 'react';
import api from '../../services/services';
import { Link } from 'react-router-dom';
import './index.css';

export default class Humanos extends Component {
    state = {
        humanos: [],
        humanosInfo: {},
        page: 1
    };

    componentDidMount(){
        this.loadHumanos();
    }

    loadHumanos = async (page = 1) => {
        const response = await api.get(`/humano?page=${page}`);
        const {docs, ...humanosInfo} = response.data;
        this.setState ({ humanos: docs, humanosInfo, page});
    }

    prevPage = () => {
        const {page} = this.state;
        if(page === 1) return;

        const pageNumber = page - 1;
        this.loadHumanos(pageNumber);
    }

    nextPage = () => {
        const {page, humanosInfo} = this.state;
        if(page === humanosInfo.pages) return;

        const pageNumber = page + 1;
        this.loadHumanos(pageNumber);
    }

    render() {
        const { humanos, humanosInfo, page} = this.state;
        return (
            <div className="humano-list">
                {this.state.humanos.map( humano => (
                    <article key={humano._id}>
                        <strong>{humano.nome}</strong>
                        <p>{humano.matricula}</p>
                        <p><Link to={`/humano/${humano._id}`}A>Acessar</Link></p>
                    </article>
                ))}

                <div className="actions">
                    <button disabled={page===1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page===humanosInfo.pages} onClick={this.nextPage}>Próxima</button>
            </div>
            </div>
        )
    }
}