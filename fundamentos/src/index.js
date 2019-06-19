import React from 'react';
import ReactDOM from 'react-dom';
import PrimeiroComponente from './components/PrimeiroComponente';

const element = document.getElementById('root');

ReactDOM.render(
    <PrimeiroComponente name="Lucas Santi" idade = {21}/>
    ,element
);