import React from 'react';

//header é um component
//cria uma pasta somente para ele pq vai ficar todos arquivos dele em um lugar só
//para importar o css, venho direto aqui tbm
import './header.css';

//stateless components - criamos componentes por meio de variaveis
const Header = () => (
    <header id="main">Usuários</header>
);

export default Header;
